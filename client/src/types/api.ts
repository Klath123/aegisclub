import type { EventId, EventType } from "../config/events";

export interface Participant {
  fullName: string;
  usn: string;
  email: string;
}

export interface RegistrationPayload {
  eventId:          EventId;
  eventType:        EventType;
  participants:     Participant[];
  phoneNumber:      string;
  department:       string;
  yearOfStudy:      number;
  teamName?:        string;
  participantCount?: number;
}

export interface RegistrationSuccess {
  registrationId: string;
  eventName:      string;
  teamLeader:     string;
  registeredAt:   string;
}

export interface ApiResponse<T = unknown> {
  success:  boolean;
  message?: string;
  data?:    T;
  errors?:  Array<{ field: string; message: string }>;
}