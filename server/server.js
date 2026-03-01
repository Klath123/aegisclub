require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(cors({ origin: ["https://www.aegisclub.site/", "https://aegisclub.netlify.app/", "http://localhost:5173"] }));
app.use(express.json());

// ── Events config ──────────────────────────────────────────────────────────
const EVENTS = [
  { id: "pitch-pe-paisa",      name: "Pitch Pe Paisa",             type: "GROUP",        teamSize: 4, closed: true  },
  { id: "decipher-blitz",      name: "Decipher Blitz",             type: "SOLO",                      closed: false },
  { id: "lens-and-lore",       name: "Lens & Lore",                type: "SOLO_OR_PAIR",              closed: false },
  { id: "popcorn-panic",       name: "Popcorn Panic",              type: "GROUP",        teamSize: 3, closed: false },
  { id: "escape-enigma",       name: "Escape the Enigma",          type: "GROUP",        teamSize: 4, closed: false },
  { id: "valorant-tournament", name: "Valorant Battle",            type: "GROUP",        teamSize: 5, closed: false },
  { id: "bgmi-lss",            name: "BGMI - Last Squad Standing", type: "GROUP",        teamSize: 4, closed: false },
];

const EVENT_MAP = Object.fromEntries(EVENTS.map((e) => [e.id, e]));

// ── Mongoose schema ────────────────────────────────────────────────────────
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
    ipAddress:        { type: String },
  },
  { timestamps: true }
);

// Prevent duplicate USN or email per event
registrationSchema.index(
  { eventId: 1, "participants.usn": 1 },
  { unique: true, name: "unique_usn_per_event" }
);
registrationSchema.index(
  { eventId: 1, "participants.email": 1 },
  { unique: true, name: "unique_email_per_event" }
);

const Registration = mongoose.model("Registration1", registrationSchema);

// ── Routes ─────────────────────────────────────────────────────────────────

// GET /api/events — list all events
app.get("/api/events", (req, res) => {
  res.json({ success: true, data: EVENTS });
});

// POST /api/register — submit a registration
app.post("/api/register", async (req, res) => {
  try {
    const { eventId, participants, phoneNumber, department, yearOfStudy, teamName, participantCount } = req.body;

    // Basic validation
    if (!eventId || !participants || !phoneNumber || !department || !yearOfStudy) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const event = EVENT_MAP[eventId];
    if (!event) return res.status(400).json({ success: false, message: "Invalid event ID" });
    if (event.closed) return res.status(400).json({ success: false, message: "Registration for this event is closed" });
    if (!Array.isArray(participants) || participants.length === 0) {
      return res.status(400).json({ success: false, message: "Participants must be a non-empty array" });
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      return res.status(400).json({ success: false, message: "Phone number must be exactly 10 digits" });
    }

    // Duplicate checks
    for (const p of participants) {
      const usnTaken = await Registration.exists({ eventId, "participants.usn": p.usn.toUpperCase() });
      if (usnTaken) return res.status(409).json({ success: false, message: `USN ${p.usn} is already registered for ${event.name}` });

      const emailTaken = await Registration.exists({ eventId, "participants.email": p.email.toLowerCase() });
      if (emailTaken) return res.status(409).json({ success: false, message: `Email ${p.email} is already registered for ${event.name}` });
    }

    const reg = await Registration.create({
      eventId,
      eventName:        event.name,
      eventType:        event.type,
      participants:     participants.map((p) => ({
        fullName: p.fullName,
        usn:      p.usn.toUpperCase(),
        email:    p.email.toLowerCase(),
      })),
      phoneNumber,
      department,
      yearOfStudy:      Number(yearOfStudy),
      teamName:         teamName || "",
      participantCount: participantCount || participants.length,
      ipAddress:        req.ip,
    });

    res.status(201).json({
      success: true,
      message: `Successfully registered for ${event.name}!`,
      data: {
        registrationId: reg._id,
        eventName:      event.name,
        teamLeader:     reg.participants[0].fullName,
      },
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ success: false, message: "A participant with this USN or email is already registered." });
    }
    console.error("Registration error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// GET /api/registrations/:eventId — get all registrations for an event
app.get("/api/registrations/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const page  = Math.max(1, Number(req.query.page  || 1));
    const limit = Math.min(200, Number(req.query.limit || 200));

    const [data, total] = await Promise.all([
      Registration.find({ eventId }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).select("-ipAddress -__v").lean(),
      Registration.countDocuments({ eventId }),
    ]);

    res.json({ success: true, data, pagination: { total, page, limit } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/stats — registration counts per event
app.get("/api/stats", async (req, res) => {
  try {
    const stats = await Registration.aggregate([
      { $group: { _id: "$eventId", eventName: { $first: "$eventName" }, totalRegistrations: { $sum: 1 }, totalParticipants: { $sum: { $size: "$participants" } } } },
      { $sort: { totalRegistrations: -1 } },
    ]);
    res.json({ success: true, data: stats });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /health
app.get("/health", (req, res) => res.json({ status: "ok" }));

// ── Start ──────────────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/glitchcraft")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });