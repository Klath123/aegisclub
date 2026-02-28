import React, { useState, type FormEvent, type ChangeEvent } from "react";
import { EVENTS, type EventConfig } from "../config/events";
import { api } from "../lib/api";
import type { Participant, RegistrationPayload } from "../types/api";

// ── Helpers ───────────────────────────────────────────────────────────────
const emptyParticipant = (): Participant => ({ fullName: "", usn: "", email: "" });

interface FormState {
  participants:     Participant[];
  phoneNumber:      string;
  department:       string;
  yearOfStudy:      string;
  teamName:         string;
  participantCount: number;
}

const emptyForm = (): FormState => ({
  participants:     [emptyParticipant()],
  phoneNumber:      "",
  department:       "",
  yearOfStudy:      "",
  teamName:         "",
  participantCount: 1,
});

// ── ParticipantCard component ─────────────────────────────────────────────
interface ParticipantCardProps {
  label:         string;
  index:         number;
  data:          Participant;
  onChange:      (index: number, field: keyof Participant, value: string) => void;
  borderColor?:  string;
  textColor?:    string;
  bgColor?:      string;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({
  label, index, data, onChange,
  borderColor = "border-blue-500/30",
  textColor   = "text-blue-300",
  bgColor     = "bg-blue-500/5",
}) => (
  <div className={`border ${borderColor} rounded-xl p-6 ${bgColor}`}>
    <h3
      className={`text-xl font-semibold mb-4 ${textColor}`}
      style={{ fontFamily: '"Ikaros2", sans-serif' }}
    >
      {label}
    </h3>
    <div className="space-y-4">
      <div className="form-group">
        <label className="form-label">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(index, "fullName", e.target.value)}
          className="form-input"
          required
          placeholder="Enter full name"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="form-label">
            USN <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={data.usn}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(index, "usn", e.target.value)}
            className="form-input"
            required
            placeholder="1DS24CYXXX"
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            Email ID <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(index, "email", e.target.value)}
            className="form-input"
            required
            placeholder="email@example.com"
          />
        </div>
      </div>
    </div>
  </div>
);

// ── EventCard component ───────────────────────────────────────────────────
interface EventCardProps {
  event:    EventConfig;
  index:    number;
  onSelect: (event: EventConfig) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, index, onSelect }) => (
  <button
    type="button"
    onClick={() => !event.closed && onSelect(event)}
    disabled={event.closed}
    className={`event-card glass-card rounded-xl p-6 text-left group relative overflow-hidden flex flex-col justify-between ${
      event.closed ? "opacity-60 cursor-not-allowed" : ""
    }`}
    style={{ animationDelay: `${index * 0.1}s`, minHeight: "170px" }}
  >
    {!event.closed && (
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-blue-400/20" />
    )}
    <div className="flex items-center justify-between mb-4">
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          event.type === "SOLO"
            ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
            : event.type === "SOLO_OR_PAIR"
            ? "bg-pink-500/20 text-pink-300 border border-pink-400/30"
            : "bg-blue-600/20 text-blue-200 border border-blue-500/30"
        }`}
        style={{ fontFamily: '"Proza Libre", sans-serif' }}
      >
        {event.type === "SOLO_OR_PAIR" ? "SOLO/PAIR" : event.type}
        {event.type === "GROUP" && event.teamSize != null && ` (${event.teamSize})`}
      </span>
      {event.closed && (
        <span
          className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-400/40"
          style={{ fontFamily: '"Proza Libre", sans-serif' }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          Closed
        </span>
      )}
    </div>
    <h3
      className="text-xl font-bold text-white mb-2"
      style={{ fontFamily: '"Ikaros", sans-serif' }}
    >
      {event.name}
    </h3>
    <div
      className="flex items-center transition-colors duration-300"
      style={{
        fontFamily: '"Proza Libre", sans-serif',
        color: event.closed ? "rgba(239,68,68,0.7)" : "rgba(255,255,255,0.6)",
      }}
    >
      {event.closed ? (
        <span className="text-sm">Registration Full!!</span>
      ) : (
        <>
          <span className="text-sm mr-2">Register Now</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </>
      )}
    </div>
  </button>
);

// ── Main RegisterForm ─────────────────────────────────────────────────────
const TEAM_LABELS = ["Team Leader", "Teammate 2", "Teammate 3", "Teammate 4", "Teammate 5"] as const;

export const RegisterForm: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventConfig | null>(null);
  const [form, setForm]                   = useState<FormState>(emptyForm());
  const [isSubmitting, setIsSubmitting]   = useState<boolean>(false);
  const [submitError, setSubmitError]     = useState<string>("");

  // ── Participant helpers ──────────────────────────────────────────────
  const updateParticipant = (index: number, field: keyof Participant, value: string): void => {
    setForm((prev) => {
      const updated = [...prev.participants];
      updated[index] = { ...updated[index]!, [field]: value };
      return { ...prev, participants: updated };
    });
  };

  const resizeParticipants = (count: number): void => {
    setForm((prev) => {
      const arr = [...prev.participants];
      while (arr.length < count) arr.push(emptyParticipant());
      return { ...prev, participants: arr.slice(0, count) };
    });
  };

  // ── Event selection ──────────────────────────────────────────────────
  const handleEventSelect = (event: EventConfig): void => {
    setSelectedEvent(event);
    setSubmitError("");
    const count =
      event.type === "GROUP" ? (event.teamSize ?? 2) :
      event.type === "SOLO"  ? 1 : 1;

    setForm({
      ...emptyForm(),
      participants: Array.from<Participant>({ length: count }).fill(null as unknown as Participant).map(emptyParticipant),
    });
  };

  const handleBack = (): void => {
    setSelectedEvent(null);
    setForm(emptyForm());
    setSubmitError("");
  };

  // ── SOLO_OR_PAIR count ───────────────────────────────────────────────
  const handleParticipantCountChange = (count: number): void => {
    setForm((prev) => ({ ...prev, participantCount: count }));
    resizeParticipants(count);
  };

  // ── Form field change ────────────────────────────────────────────────
  const handleFieldChange =
    (field: keyof Omit<FormState, "participants" | "participantCount">) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  // ── Submit ───────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!selectedEvent) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const participantCount =
        selectedEvent.type === "SOLO_OR_PAIR" ? form.participantCount : form.participants.length;

      const payload: RegistrationPayload = {
        eventId:          selectedEvent.id,
        eventType:        selectedEvent.type,
        participants:     form.participants.slice(0, participantCount),
        phoneNumber:      form.phoneNumber,
        department:       form.department,
        yearOfStudy:      Number(form.yearOfStudy),
        teamName:         form.teamName || undefined,
        participantCount,
      };

      const result = await api.register(payload);

      if (result.success) {
        alert(`☑️ Registration successful for ${selectedEvent.name}!!!`);
        handleBack();
      } else {
        setSubmitError(
          result.errors?.map((err) => err.message).join("\n") ??
          result.message ??
          "Registration failed. Please try again."
        );
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamSize = selectedEvent?.teamSize ?? 2;

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative pt-32 pb-20 px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {!selectedEvent ? (
          /* ── Event selection grid ── */
          <div className="animate-fade-in">
            <h1
              className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-pink-400 bg-clip-text text-transparent"
              style={{ fontFamily: '"Ikaros1", sans-serif' }}
            >
              Select Your Event
            </h1>
            <p
              className="text-white/80 text-center mb-12"
              style={{ fontFamily: '"Proza Libre1", sans-serif' }}
            >
              Choose an event to register for Glitchcraft
            </p>

            {/* Row 1 – first 4 events */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {EVENTS.slice(0, 4).map((event, i) => (
                <EventCard key={event.id} event={event} index={i} onSelect={handleEventSelect} />
              ))}
            </div>

            {/* Row 2 – last 3, centred */}
            <div className="w-full lg:w-3/4 lg:mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {EVENTS.slice(4).map((event, i) => (
                  <EventCard key={event.id} event={event} index={i + 4} onSelect={handleEventSelect} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ── Registration form ── */
          <div className="animate-slide-up">
            <button
              type="button"
              onClick={handleBack}
              className="mb-6 flex items-center text-white/70 hover:text-pink-400 transition-colors duration-300"
              style={{ fontFamily: '"Proza Libre", sans-serif' }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Events
            </button>

            <div className="glass-card rounded-2xl p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-pink-500 to-blue-300 bg-clip-text text-transparent"
                  style={{ fontFamily: '"Ikaros", sans-serif' }}
                >
                  {selectedEvent.name}
                </h2>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedEvent.type === "SOLO"
                      ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                      : selectedEvent.type === "SOLO_OR_PAIR"
                      ? "bg-pink-500/20 text-pink-300 border border-pink-400/30"
                      : "bg-blue-600/20 text-blue-200 border border-blue-500/30"
                  }`}
                >
                  {selectedEvent.type === "SOLO_OR_PAIR" ? "SOLO/PAIR" : selectedEvent.type} Event
                  {selectedEvent.type === "GROUP" && selectedEvent.teamSize != null && ` (Team of ${selectedEvent.teamSize})`}
                </span>
              </div>

              {/* Error banner */}
              {submitError.length > 0 && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-300 text-sm whitespace-pre-line">
                  {submitError}
                </div>
              )}

              <form onSubmit={(e) => void handleSubmit(e)} className="space-y-6">

                {/* SOLO */}
                {selectedEvent.type === "SOLO" && (
                  <ParticipantCard
                    label="Participant"
                    index={0}
                    data={form.participants[0] ?? emptyParticipant()}
                    onChange={updateParticipant}
                  />
                )}

                {/* SOLO_OR_PAIR */}
                {selectedEvent.type === "SOLO_OR_PAIR" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="form-group">
                      <label className="form-label">
                        Number of Participants <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={form.participantCount}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          handleParticipantCountChange(Number(e.target.value))
                        }
                        className="form-input"
                        required
                      >
                        <option value={1}>1 (Solo)</option>
                        <option value={2}>2 (Pair)</option>
                      </select>
                    </div>

                    <ParticipantCard
                      label={form.participantCount === 2 ? "Participant 1" : "Participant"}
                      index={0}
                      data={form.participants[0] ?? emptyParticipant()}
                      onChange={updateParticipant}
                    />

                    {form.participantCount === 2 && (
                      <>
                        <ParticipantCard
                          label="Participant 2"
                          index={1}
                          data={form.participants[1] ?? emptyParticipant()}
                          onChange={updateParticipant}
                          borderColor="border-pink-500/30"
                          textColor="text-pink-300"
                          bgColor="bg-pink-500/5"
                        />
                        <div className="form-group">
                          <label className="form-label">Team Name (Optional)</label>
                          <input
                            type="text"
                            value={form.teamName}
                            onChange={handleFieldChange("teamName")}
                            className="form-input"
                            placeholder="Optional team name"
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* GROUP */}
                {selectedEvent.type === "GROUP" && (
                  <div className="space-y-6 animate-fade-in">
                    {Array.from({ length: teamSize }, (_, i) => (
                      <ParticipantCard
                        key={i}
                        label={TEAM_LABELS[i] ?? `Teammate ${i + 1}`}
                        index={i}
                        data={form.participants[i] ?? emptyParticipant()}
                        onChange={updateParticipant}
                        borderColor={i === 0 ? "border-blue-500/30" : "border-blue-400/20"}
                        textColor={i === 0 ? "text-blue-300" : "text-blue-200"}
                        bgColor={i === 0 ? "bg-blue-500/5" : "bg-blue-400/5"}
                      />
                    ))}
                    <div className="form-group">
                      <label className="form-label">
                        Team Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.teamName}
                        onChange={handleFieldChange("teamName")}
                        className="form-input"
                        required
                        placeholder="Enter team name"
                      />
                    </div>
                  </div>
                )}

                {/* Common fields */}
                <div className="space-y-6 border-t border-zinc-700 pt-6">
                  <h3
                    className="text-xl font-semibold text-zinc-300"
                    style={{ fontFamily: '"Ikaros2", sans-serif' }}
                  >
                    Additional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={form.phoneNumber}
                        onChange={handleFieldChange("phoneNumber")}
                        className="form-input"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="9876543210"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Department <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.department}
                        onChange={handleFieldChange("department")}
                        className="form-input"
                        required
                        placeholder="Enter department name"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Year of Study <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={form.yearOfStudy}
                        onChange={handleFieldChange("yearOfStudy")}
                        className="form-input"
                        required
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                    </div>

                    {selectedEvent.type === "SOLO" && (
                      <div className="form-group">
                        <label className="form-label">Team Name (Optional)</label>
                        <input
                          type="text"
                          value={form.teamName}
                          onChange={handleFieldChange("teamName")}
                          className="form-input"
                          placeholder="Optional team name"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50 text-lg ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  style={{ fontFamily: '"Proza Libre1", sans-serif' }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;