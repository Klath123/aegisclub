// ── Shared event types ────────────────────────────────────────────────────
export type EventType = "SOLO" | "GROUP" | "SOLO_OR_PAIR";

export type EventId =
  | "pitch-pe-paisa"
  | "decipher-blitz"
  | "lens-and-lore"
  | "popcorn-panic"
  | "escape-enigma"
  | "valorant-tournament"
  | "bgmi-lss";

export interface EventConfig {
  id: EventId;
  name: string;
  type: EventType;
  teamSize?: number;
  closed: boolean;
}

// Mirrors backend/src/config/events.ts — keep in sync
export const EVENTS: EventConfig[] = [
  { id: "pitch-pe-paisa", name: "Pitch Pe Paisa", type: "GROUP", teamSize: 4, closed: true },
  { id: "decipher-blitz", name: "Decipher Blitz", type: "SOLO", closed: false },
  { id: "lens-and-lore", name: "Lens & Lore", type: "SOLO_OR_PAIR", closed: false },
  { id: "popcorn-panic", name: "Popcorn Panic", type: "GROUP", teamSize: 3, closed: false },
  { id: "escape-enigma", name: "Escape the Enigma", type: "GROUP", teamSize: 4, closed: false },
  { id: "valorant-tournament", name: "Valorant Battle", type: "GROUP", teamSize: 5, closed: false },
  { id: "bgmi-lss", name: "BGMI - Last Squad Standing", type: "GROUP", teamSize: 4, closed: true },
];