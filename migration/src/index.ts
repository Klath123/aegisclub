/**
 * ============================================================
 *  GLITCHCRAFT — Supabase → MongoDB Migration Script
 *
 *  Reads LIVE data directly from Supabase via the JS client,
 *  transforms each row into the new unified MongoDB schema,
 *  and inserts into MongoDB. Idempotent — safe to re-run.
 *
 *  Usage:
 *    cp .env.example .env   # fill in SUPABASE_URL, SUPABASE_SERVICE_KEY, MONGODB_URI
 *    npm run migrate
 *
 *  Required env vars:
 *    SUPABASE_URL          – e.g. https://xxxxx.supabase.co
 *    SUPABASE_SERVICE_KEY  – service role key (bypasses RLS, read all rows)
 *    MONGODB_URI           – destination connection string
 * ============================================================
 */

import "dotenv/config";
import mongoose from "mongoose";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ── ESM __dirname ─────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPORT_PATH = path.join(__dirname, "..", "migration_report.json");

// ── Env validation ────────────────────────────────────────────────────────
const SUPABASE_URL         = process.env["SUPABASE_URL"];
const SUPABASE_SERVICE_KEY = process.env["SUPABASE_SERVICE_KEY"];
const MONGODB_URI          = process.env["MONGODB_URI"] ?? "mongodb://localhost:27017/glitchcraft";

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error(
    "❌  Missing required env vars.\n" +
    "    Copy .env.example to .env and fill in:\n" +
    "      SUPABASE_URL\n" +
    "      SUPABASE_SERVICE_KEY\n"
  );
  process.exit(1);
}

// ── Domain types ──────────────────────────────────────────────────────────
type EventType = "SOLO" | "GROUP" | "SOLO_OR_PAIR";

/** Raw flat row returned by Supabase select("*") */
interface SupabaseRow {
  "Full Name":     string | null;
  "USN":           string | null;
  "Email ID":      string | null;
  "Phone Number":  string | null;
  "Department":    string | null;
  "Year of Study": string | number | null;
  "Team Name":     string | null;
  [key: string]:   string | number | null | undefined;
}

interface EventMeta {
  supabaseTable: string;
  mongoEventId:  string;
  name:          string;
  type:          EventType;
  teamSize?:     number;
}

interface MigratedParticipant {
  fullName: string;
  usn:      string;
  email:    string;
}

interface MigratedDocument {
  eventId:          string;
  eventName:        string;
  eventType:        EventType;
  participants:     MigratedParticipant[];
  phoneNumber:      string;
  department:       string;
  yearOfStudy:      number;
  teamName:         string;
  participantCount: number;
  registeredAt:     Date;
  _migratedFrom:    "supabase";
}

interface ConvertResult {
  doc:      MigratedDocument | null;
  warnings: string[];
}

interface EventReport {
  supabaseTable: string;
  mongoEventId:  string;
  fetched:       number;
  inserted:      number;
  skipped:       number;
  errors:        number;
  rowWarnings:   Array<{ rowIndex: number; warnings: string[] }>;
  rowErrors:     Array<{ rowIndex: number; error: string }>;
}

interface MigrationReport {
  startedAt:   string;
  finishedAt?: string;
  events:      Record<string, EventReport>;
  totals: {
    fetched:   number;
    inserted:  number;
    skipped:   number;
    errors:    number;
    warnings:  number;
  };
}

// ── Event map: Supabase tables → MongoDB event metadata ───────────────────
const EVENTS: EventMeta[] = [
  { supabaseTable: "Pitch_Pe_Paisa",           mongoEventId: "pitch-pe-paisa",      name: "Pitch Pe Paisa",             type: "GROUP",        teamSize: 4 },
  { supabaseTable: "Decipher_Blitz",           mongoEventId: "decipher-blitz",      name: "Decipher Blitz",             type: "SOLO"                       },
  { supabaseTable: "Lens_& _Lore",             mongoEventId: "lens-and-lore",       name: "Lens & Lore",                type: "SOLO_OR_PAIR"                },
  { supabaseTable: "Popcorn_Panic",            mongoEventId: "popcorn-panic",       name: "Popcorn Panic",              type: "GROUP",        teamSize: 3 },
  { supabaseTable: "Escape_the_Enigma",        mongoEventId: "escape-enigma",       name: "Escape the Enigma",          type: "GROUP",        teamSize: 4 },
  { supabaseTable: "VALORANT_Tournament",      mongoEventId: "valorant-tournament", name: "Valorant Battle",            type: "GROUP",        teamSize: 5 },
  { supabaseTable: "BGMI_Last_Squad_Standing", mongoEventId: "bgmi-lss",            name: "BGMI - Last Squad Standing", type: "GROUP",        teamSize: 4 },
];

// ── Inline Mongoose model ─────────────────────────────────────────────────
// Declared inline to avoid a circular import from the backend package.
const participantSchema = new mongoose.Schema(
  { fullName: String, usn: String, email: String },
  { _id: false }
);

const registrationSchema = new mongoose.Schema(
  {
    eventId:          { type: String, required: true },
    eventName:        { type: String, required: true },
    eventType:        { type: String, required: true },
    participants:     { type: [participantSchema], required: true },
    phoneNumber:      { type: String, required: true },
    department:       { type: String, required: true },
    yearOfStudy:      { type: Number, required: true },
    teamName:         { type: String, default: "" },
    participantCount: { type: Number, default: 1 },
    registeredAt:     { type: Date, default: Date.now },
    _migratedFrom:    { type: String },
  },
  { timestamps: true }
);

// Mirror the unique index from the backend model so duplicates are caught
registrationSchema.index(
  { eventId: 1, "participants.usn": 1 },
  { unique: true, partialFilterExpression: { "participants.usn": { $exists: true } } }
);

const Registration = mongoose.model("Registration", registrationSchema);

// ── Supabase paginated fetcher ────────────────────────────────────────────
// Supabase caps responses at 1000 rows by default; we paginate until done.
async function fetchAllFromTable(
  client: SupabaseClient,
  tableName: string
): Promise<SupabaseRow[]> {
  const PAGE   = 1000;
  const result: SupabaseRow[] = [];
  let   offset = 0;

  while (true) {
    const { data, error } = await client
      .from(tableName)
      .select("*")
      .range(offset, offset + PAGE - 1);

    if (error) {
      throw new Error(`Supabase query failed on "${tableName}": ${error.message}`);
    }

    if (!data || data.length === 0) break;

    result.push(...(data as SupabaseRow[]));

    // If fewer rows than page size came back, we're on the last page
    if (data.length < PAGE) break;
    offset += PAGE;
  }

  return result;
}

// ── Row transformer ───────────────────────────────────────────────────────
function transformRow(row: SupabaseRow, event: EventMeta): ConvertResult {
  const warnings: string[] = [];
  const participants: MigratedParticipant[] = [];

  const extractParticipant = (suffix: string, label: string): void => {
    const col      = suffix ? `-${suffix}` : "";
    const fullName = String(row[`Full Name${col}`] ?? "").trim();
    const usn      = String(row[`USN${col}`]       ?? "").trim();
    const email    = String(row[`Email ID${col}`]  ?? "").trim();

    // Empty slot — member was not registered (e.g. optional 5th in a 4-person team)
    if (!fullName && !usn && !email) return;

    if (!fullName) warnings.push(`${label}: missing Full Name`);
    if (!usn)      warnings.push(`${label}: missing USN`);
    if (!email)    warnings.push(`${label}: missing Email ID`);

    participants.push({
      fullName,
      usn:   usn.toUpperCase(),
      email: email.toLowerCase(),
    });
  };

  // Leader / solo participant is stored in un-suffixed columns
  extractParticipant("", "Participant 1");
  // Additional members in suffixed columns (-2 through -5)
  for (const n of [2, 3, 4, 5] as const) {
    extractParticipant(String(n), `Participant ${n}`);
  }

  if (participants.length === 0) {
    return { doc: null, warnings: ["No usable participant data — row skipped"] };
  }

  // ── Phone: strip non-digits and normalise Indian prefix ──────────────
  let phone = String(row["Phone Number"] ?? "").replace(/[\s\-()]/g, "");
  if (phone.startsWith("+91"))                        phone = phone.slice(3);
  if (phone.startsWith("91") && phone.length === 12)  phone = phone.slice(2);
  if (!/^\d{10}$/.test(phone)) {
    warnings.push(`Phone "${row["Phone Number"]}" is not a valid 10-digit number — stored as-is`);
  }

  // ── Year of study: normalise to integer ──────────────────────────────
  let yearOfStudy = parseInt(String(row["Year of Study"] ?? "1"), 10);
  if (isNaN(yearOfStudy) || yearOfStudy < 1 || yearOfStudy > 4) {
    warnings.push(`"Year of Study" value "${row["Year of Study"]}" is invalid — defaulting to 1`);
    yearOfStudy = 1;
  }

  const participantCount =
    event.type === "SOLO_OR_PAIR"
      ? participants.length
      : (event.teamSize ?? participants.length);

  const doc: MigratedDocument = {
    eventId:          event.mongoEventId,
    eventName:        event.name,
    eventType:        event.type,
    participants,
    phoneNumber:      phone,
    department:       String(row["Department"] ?? "Unknown").trim(),
    yearOfStudy,
    teamName:         String(row["Team Name"] ?? "").trim(),
    participantCount,
    registeredAt:     new Date(),
    _migratedFrom:    "supabase",
  };

  return { doc, warnings };
}

// ── Main ──────────────────────────────────────────────────────────────────
async function migrate(): Promise<void> {
  console.log("╔══════════════════════════════════════════════╗");
  console.log("║  Glitchcraft: Supabase → MongoDB Migration   ║");
  console.log("╚══════════════════════════════════════════════╝\n");

  // Init Supabase
  console.log(`📡 Supabase URL : ${SUPABASE_URL}`);
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_KEY!, {
    auth: { persistSession: false },
  });
  console.log("✅ Supabase client ready\n");

  // Init MongoDB
  console.log(`📡 MongoDB URI  : ${MONGODB_URI}`);
  await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
  console.log("✅ MongoDB connected\n");

  const report: MigrationReport = {
    startedAt: new Date().toISOString(),
    events:    {},
    totals:    { fetched: 0, inserted: 0, skipped: 0, errors: 0, warnings: 0 },
  };

  // Process each event table
  for (const event of EVENTS) {
    console.log(`\n── ${event.name} ──`);
    console.log(`   Supabase : "${event.supabaseTable}"`);
    console.log(`   MongoDB  : "${event.mongoEventId}"`);

    const eventReport: EventReport = {
      supabaseTable: event.supabaseTable,
      mongoEventId:  event.mongoEventId,
      fetched:  0,
      inserted: 0,
      skipped:  0,
      errors:   0,
      rowWarnings: [],
      rowErrors:   [],
    };
    report.events[event.mongoEventId] = eventReport;

    // ── 1. Fetch from Supabase ──────────────────────────────────────────
    let rows: SupabaseRow[];
    try {
      rows = await fetchAllFromTable(supabase, event.supabaseTable);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`   ✗  Supabase fetch failed: ${msg}`);
      eventReport.rowErrors.push({ rowIndex: 0, error: msg });
      eventReport.errors++;
      report.totals.errors++;
      continue; // move to next event
    }

    eventReport.fetched = rows.length;
    report.totals.fetched += rows.length;
    console.log(`   Fetched ${rows.length} row(s) from Supabase`);

    // ── 2. Transform & insert each row ──────────────────────────────────
    for (let i = 0; i < rows.length; i++) {
      const { doc, warnings } = transformRow(rows[i]!, event);

      // Log row-level warnings but continue
      if (warnings.length > 0) {
        eventReport.rowWarnings.push({ rowIndex: i + 1, warnings });
        report.totals.warnings += warnings.length;
      }

      // Row was untransformable (no participants)
      if (!doc) {
        eventReport.skipped++;
        report.totals.skipped++;
        continue;
      }

      try {
        // Idempotency check: skip if this leader USN is already in MongoDB
        const leaderUsn = doc.participants[0]!.usn;
        const exists    = await Registration.exists({
          eventId:            event.mongoEventId,
          "participants.usn": leaderUsn,
        });

        if (exists) {
          eventReport.skipped++;
          report.totals.skipped++;
          continue;
        }

        await Registration.create(doc);
        eventReport.inserted++;
        report.totals.inserted++;
      } catch (err: unknown) {
        const e      = err as { code?: number; message?: string; keyValue?: unknown };
        const errMsg = e.code === 11000
          ? `Duplicate key – ${JSON.stringify(e.keyValue)}`
          : (e.message ?? "Unknown error");

        console.error(`   ✗  Row ${i + 1}: ${errMsg}`);
        eventReport.rowErrors.push({ rowIndex: i + 1, error: errMsg });
        eventReport.errors++;
        report.totals.errors++;
      }
    }

    const { inserted, skipped, errors } = eventReport;
    console.log(`   ✅  inserted=${inserted}  skipped=${skipped}  errors=${errors}`);
  }

  // ── Summary ───────────────────────────────────────────────────────────
  report.finishedAt = new Date().toISOString();

  console.log("\n╔═══════════════════════════════╗");
  console.log("║       Migration Summary        ║");
  console.log("╚═══════════════════════════════╝");
  console.log(`  Fetched from Supabase : ${report.totals.fetched}`);
  console.log(`  Inserted into MongoDB : ${report.totals.inserted}`);
  console.log(`  Skipped (duplicates)  : ${report.totals.skipped}`);
  console.log(`  Errors                : ${report.totals.errors}`);
  console.log(`  Warnings              : ${report.totals.warnings}`);

  if (report.totals.errors > 0) {
    console.warn("\n⚠️   Some rows had errors — inspect migration_report.json for details.");
  }

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`\n📄 Full report → ${REPORT_PATH}`);

  await mongoose.disconnect();
  console.log("🔌 MongoDB disconnected\n");
}

migrate().catch((err: unknown) => {
  console.error("❌ Fatal migration error:", err);
  process.exit(1);
});