// ── Domain types shared across config, models, routes, and frontend ────────

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

export interface Participant {
  fullName: string;
  usn: string;
  email: string;
}

export interface RegistrationPayload {
  eventId: EventId;
  eventType: EventType;
  participants: Participant[];
  phoneNumber: string;
  department: string;
  yearOfStudy: number;
  teamName?: string;
  participantCount?: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Array<{ field: string; message: string }>;
}

export interface RegistrationSuccess {
  registrationId: string;
  eventName: string;
  teamLeader: string;
  registeredAt: string;
}

export interface EventStats {
  _id: EventId;
  eventName: string;
  totalRegistrations: number;
  totalParticipants: number;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
}