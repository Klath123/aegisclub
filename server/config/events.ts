import type { EventConfig, EventId } from "../types/index.ts";

// Single source of truth — keep in sync with frontend/src/config/events.ts
export const EVENTS: EventConfig[] = [
  { id: "pitch-pe-paisa",      name: "Pitch Pe Paisa",             type: "GROUP",        teamSize: 4, closed: true  },
  { id: "decipher-blitz",      name: "Decipher Blitz",             type: "SOLO",                      closed: false },
  { id: "lens-and-lore",       name: "Lens & Lore",                type: "SOLO_OR_PAIR",              closed: false },
  { id: "popcorn-panic",       name: "Popcorn Panic",              type: "GROUP",        teamSize: 3, closed: false },
  { id: "escape-enigma",       name: "Escape the Enigma",          type: "GROUP",        teamSize: 4, closed: false },
  { id: "valorant-tournament", name: "Valorant Battle",            type: "GROUP",        teamSize: 5, closed: false },
  { id: "bgmi-lss",            name: "BGMI - Last Squad Standing", type: "GROUP",        teamSize: 4, closed: false },
];

export const EVENT_MAP: Readonly<Record<EventId, EventConfig>> = Object.fromEntries(
  EVENTS.map((e) => [e.id, e])
) as Record<EventId, EventConfig>;