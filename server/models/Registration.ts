import mongoose, { type Document, type Model, Schema } from "mongoose";
import type { EventId, EventType, Participant } from "../types/index.js";

// ── Participant sub-document interface ────────────────────────────────────
export interface IParticipant extends Participant {}

// ── Registration document interface ──────────────────────────────────────
export interface IRegistration extends Document {
  eventId: EventId;
  eventName: string;
  eventType: EventType;
  participants: IParticipant[];
  phoneNumber: string;
  department: string;
  yearOfStudy: number;
  teamName: string;
  participantCount: number;
  registeredAt: Date;
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
  // Virtual
  readonly teamLeader: IParticipant;
}

// ── Static methods interface ──────────────────────────────────────────────
export interface IRegistrationModel extends Model<IRegistration> {
  isUsnRegistered(eventId: EventId, usn: string): Promise<boolean>;
  isEmailRegistered(eventId: EventId, email: string): Promise<boolean>;
}

// ── Participant sub-schema ─────────────────────────────────────────────────
const participantSchema = new Schema<IParticipant>(
  {
    fullName: { type: String, required: true, trim: true },
    usn: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      match: [/^[A-Z0-9]+$/i, "Invalid USN format"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
  },
  { _id: false }
);

// ── Registration schema ────────────────────────────────────────────────────
const registrationSchema = new Schema<IRegistration, IRegistrationModel>(
  {
    eventId: {
      type: String,
      required: true,
      enum: [
        "pitch-pe-paisa",
        "decipher-blitz",
        "lens-and-lore",
        "popcorn-panic",
        "escape-enigma",
        "valorant-tournament",
        "bgmi-lss",
      ] satisfies EventId[],
      index: true,
    },
    eventName:  { type: String, required: true },
    eventType:  { type: String, required: true, enum: ["SOLO", "GROUP", "SOLO_OR_PAIR"] satisfies EventType[] },
    participants: {
      type: [participantSchema],
      required: true,
      validate: {
        validator: (arr: IParticipant[]) => arr.length >= 1 && arr.length <= 5,
        message: "Participants must be between 1 and 5",
      },
    },
    phoneNumber:      { type: String, required: true, match: [/^\d{10}$/, "Phone must be 10 digits"] },
    department:       { type: String, required: true, trim: true },
    yearOfStudy:      { type: Number, required: true, min: 1, max: 4 },
    teamName:         { type: String, trim: true, default: "" },
    participantCount: { type: Number, default: 1, min: 1, max: 5 },
    registeredAt:     { type: Date, default: Date.now },
    ipAddress:        { type: String },
  },
  {
    timestamps: true,
    toJSON:   { virtuals: true },
    toObject: { virtuals: true },
  }
);

// ── Indexes ────────────────────────────────────────────────────────────────
registrationSchema.index(
  { eventId: 1, "participants.usn": 1 },
  { unique: true, partialFilterExpression: { "participants.usn": { $exists: true } }, name: "unique_usn_per_event" }
);

registrationSchema.index(
  { eventId: 1, "participants.email": 1 },
  { unique: true, partialFilterExpression: { "participants.email": { $exists: true } }, name: "unique_email_per_event" }
);

registrationSchema.index({ eventId: 1, createdAt: -1 });

// ── Virtual ────────────────────────────────────────────────────────────────
registrationSchema.virtual("teamLeader").get(function (this: IRegistration) {
  return this.participants[0];
});

// ── Static methods ─────────────────────────────────────────────────────────
registrationSchema.static(
  "isUsnRegistered",
  async function (eventId: EventId, usn: string): Promise<boolean> {
    const count = await this.countDocuments({ eventId, "participants.usn": usn.toUpperCase() });
    return count > 0;
  }
);

registrationSchema.static(
  "isEmailRegistered",
  async function (eventId: EventId, email: string): Promise<boolean> {
    const count = await this.countDocuments({ eventId, "participants.email": email.toLowerCase() });
    return count > 0;
  }
);

export const Registration = mongoose.model<IRegistration, IRegistrationModel>(
  "Registration",
  registrationSchema
);