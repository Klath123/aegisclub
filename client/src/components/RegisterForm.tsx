import React, { useState, type FormEvent } from "react";
import { supabase } from "../lib/supabaseClient";

// Event configuration
interface Event {
    id: string;
    name: string;
    type: "SOLO" | "GROUP" | "SOLO_OR_PAIR";
    teamSize?: number; // For GROUP events: 3, 4, or 5 members
    closed?: boolean;  // If true, registration is disabled
}

const EVENTS: Event[] = [
    { id: "pitch-pe-paisa", name: "Pitch Pe Paisa", type: "GROUP", teamSize: 4, closed: true },
    { id: "decipher-blitz", name: "Decipher Blitz", type: "SOLO" },
    { id: "lens-and-lore", name: "Lens & Lore", type: "SOLO_OR_PAIR" },
    { id: "popcorn-panic", name: "Popcorn Panic", type: "GROUP", teamSize: 3 },
    { id: "escape-enigma", name: "Escape the Enigma", type: "GROUP", teamSize: 4 },
    { id: "valorant-tournament", name: "Valorant Battle", type: "GROUP", teamSize: 5 },
    { id: "bgmi-lss", name: "BGMI - Last Squad Standing", type: "GROUP", teamSize: 4 },
];

// Table name mapping
const TABLE_NAMES: Record<string, string> = {
    "pitch-pe-paisa": "Pitch_Pe_Paisa",
    "decipher-blitz": "Decipher_Blitz",
    "lens-and-lore": "Lens_& _Lore",
    "popcorn-panic": "Popcorn_Panic",
    "escape-enigma": "Escape_the_Enigma",
    "valorant-tournament": "VALORANT_Tournament",
    "bgmi-lss": "BGMI_Last_Squad_Standing",
};

// Form data interface
interface FormData {
    eventName: string;
    eventType: "SOLO" | "GROUP" | "SOLO_OR_PAIR";
    participantCount?: number; // For SOLO_OR_PAIR: 1 or 2

    // Solo fields
    participantName?: string;
    participantUsn?: string;
    participantEmail?: string;

    // Group fields
    teamLeaderName?: string;
    teamLeaderUsn?: string;
    teamLeaderEmail?: string;
    teammate2Name?: string;
    teammate2Usn?: string;
    teammate2Email?: string;
    teammate3Name?: string;
    teammate3Usn?: string;
    teammate3Email?: string;
    teammate4Name?: string;
    teammate4Usn?: string;
    teammate4Email?: string;
    teammate5Name?: string;
    teammate5Usn?: string;
    teammate5Email?: string;

    // Common fields
    phoneNumber: string;
    department: string;
    yearOfStudy: string;
    teamName?: string;
}

export const RegisterForm: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [formData, setFormData] = useState<FormData>({
        eventName: "",
        eventType: "SOLO",
        phoneNumber: "",
        department: "",
        yearOfStudy: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleEventSelect = (event: Event) => {
        setSelectedEvent(event);
        setFormData({
            eventName: event.name,
            eventType: event.type,
            phoneNumber: "",
            department: "",
            yearOfStudy: "",
        });
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Get the table name for this event
            const tableName = TABLE_NAMES[selectedEvent!.id];

            // Map form data to database columns
            const dbData: Record<string, string> = {
                "Phone Number": formData.phoneNumber,
                "Department": formData.department,
                "Year of Study": formData.yearOfStudy,
                "Team Name": formData.teamName || "",
            };

            // Add participant data based on event type
            if (selectedEvent!.type === "SOLO") {
                dbData["Full Name"] = formData.participantName || "";
                dbData["USN"] = formData.participantUsn || "";
                dbData["Email ID"] = formData.participantEmail || "";
            } else if (selectedEvent!.type === "SOLO_OR_PAIR") {
                // Participant 1 (always present)
                dbData["Full Name"] = formData.participantName || "";
                dbData["USN"] = formData.participantUsn || "";
                dbData["Email ID"] = formData.participantEmail || "";

                // Participant 2 (if pair)
                if (Number(formData.participantCount) === 2) {
                    dbData["Full Name-2"] = formData.teammate2Name || "";
                    dbData["USN-2"] = formData.teammate2Usn || "";
                    dbData["Email ID-2"] = formData.teammate2Email || "";
                }
            } else if (selectedEvent!.type === "GROUP") {
                // Team leader
                dbData["Full Name"] = formData.teamLeaderName || "";
                dbData["USN"] = formData.teamLeaderUsn || "";
                dbData["Email ID"] = formData.teamLeaderEmail || "";

                // Teammate 2 (always required for groups)
                dbData["Full Name-2"] = formData.teammate2Name || "";
                dbData["USN-2"] = formData.teammate2Usn || "";
                dbData["Email ID-2"] = formData.teammate2Email || "";

                // Teammate 3+ (conditional based on team size)
                if (selectedEvent!.teamSize && selectedEvent!.teamSize >= 3) {
                    dbData["Full Name-3"] = formData.teammate3Name || "";
                    dbData["USN-3"] = formData.teammate3Usn || "";
                    dbData["Email ID-3"] = formData.teammate3Email || "";
                }

                if (selectedEvent!.teamSize && selectedEvent!.teamSize >= 4) {
                    dbData["Full Name-4"] = formData.teammate4Name || "";
                    dbData["USN-4"] = formData.teammate4Usn || "";
                    dbData["Email ID-4"] = formData.teammate4Email || "";
                }

                if (selectedEvent!.teamSize && selectedEvent!.teamSize >= 5) {
                    dbData["Full Name-5"] = formData.teammate5Name || "";
                    dbData["USN-5"] = formData.teammate5Usn || "";
                    dbData["Email ID-5"] = formData.teammate5Email || "";
                }
            }

            // Insert into Supabase
            const { error } = await supabase!
                .from(tableName)
                .insert([dbData])
                .select();

            if (error) {
                console.error("Registration error:", error.message);
                alert(`Registration failed: ${error.message}\n\nPlease check your form and try again.`);
            } else {
                // Success - reset form
                alert(`☑️Registration successful for ${selectedEvent!.name}!!!`);

                // Reset form
                handleBackToEvents();
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            alert("An unexpected error occurred. Please try again or contact support.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackToEvents = () => {
        setSelectedEvent(null);
        setFormData({
            eventName: "",
            eventType: "SOLO",
            phoneNumber: "",
            department: "",
            yearOfStudy: "",
        });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] relative pt-32 pb-20 px-4">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                {!selectedEvent ? (
                    // Event Selection View
                    <div className="animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: '"Ikaros1", sans-serif' }}>
                            Select Your Event
                        </h1>
                        <p className="text-white/80 text-center mb-12" style={{ fontFamily: '"Proza Libre1", sans-serif' }}>
                            Choose an event to register for Glitchcraft
                        </p>

                        {/* Row 1: 4 events */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            {EVENTS.slice(0, 4).map((event, index) => (
                                <button
                                    key={event.id}
                                    onClick={() => !event.closed && handleEventSelect(event)}
                                    disabled={event.closed}
                                    className={`event-card glass-card rounded-xl p-6 text-left group relative overflow-hidden flex flex-col justify-between ${event.closed ? "opacity-60 cursor-not-allowed" : ""
                                        }`}
                                    style={{ animationDelay: `${index * 0.1}s`, minHeight: '170px' }}
                                >
                                    {!event.closed && (
                                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-blue-400/20"></div>
                                    )}
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${event.type === "SOLO"
                                                ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                                                : event.type === "SOLO_OR_PAIR"
                                                    ? "bg-pink-500/20 text-pink-300 border border-pink-400/30"
                                                    : "bg-blue-600/20 text-blue-200 border border-blue-500/30"
                                                }`}
                                            style={{ fontFamily: '"Proza Libre", sans-serif' }}
                                        >
                                            {event.type === "SOLO_OR_PAIR" ? "SOLO/PAIR" : event.type}
                                            {event.type === "GROUP" && event.teamSize && ` (${event.teamSize})`}
                                        </span>
                                        {event.closed && (
                                            <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-400/40" style={{ fontFamily: '"Proza Libre", sans-serif' }}>
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                                Closed
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: '"Ikaros", sans-serif' }}>
                                        {event.name}
                                    </h3>
                                    <div className="flex items-center transition-colors duration-300" style={{ fontFamily: '"Proza Libre", sans-serif', color: event.closed ? 'rgba(239,68,68,0.7)' : 'rgba(255,255,255,0.6)' }}>
                                        {event.closed ? (
                                            <span className="text-sm">Registration Full!!</span>
                                        ) : (
                                            <>
                                                <span className="text-sm mr-2">Register Now</span>
                                                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Row 2: 3 events — centred via w-3/4 mx-auto wrapper */}
                        <div className="w-full lg:w-3/4 lg:mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {EVENTS.slice(4).map((event, index) => (
                                    <button
                                        key={event.id}
                                        onClick={() => !event.closed && handleEventSelect(event)}
                                        disabled={event.closed}
                                        className={`event-card glass-card rounded-xl p-6 text-left group relative overflow-hidden flex flex-col justify-between ${event.closed ? "opacity-60 cursor-not-allowed" : ""
                                            }`}
                                        style={{ animationDelay: `${(index + 4) * 0.1}s`, minHeight: '170px' }}
                                    >
                                        {!event.closed && (
                                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-blue-400/20"></div>
                                        )}
                                        <div className="flex items-center justify-between mb-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${event.type === "SOLO"
                                                    ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                                                    : event.type === "SOLO_OR_PAIR"
                                                        ? "bg-pink-500/20 text-pink-300 border border-pink-400/30"
                                                        : "bg-blue-600/20 text-blue-200 border border-blue-500/30"
                                                    }`}
                                                style={{ fontFamily: '"Proza Libre", sans-serif' }}
                                            >
                                                {event.type === "SOLO_OR_PAIR" ? "SOLO/PAIR" : event.type}
                                                {event.type === "GROUP" && event.teamSize && ` (${event.teamSize})`}
                                            </span>
                                            {event.closed && (
                                                <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-400/40" style={{ fontFamily: '"Proza Libre", sans-serif' }}>
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                                    Closed
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: '"Ikaros", sans-serif' }}>
                                            {event.name}
                                        </h3>
                                        <div className="flex items-center transition-colors duration-300" style={{ fontFamily: '"Proza Libre", sans-serif', color: event.closed ? 'rgba(239,68,68,0.7)' : 'rgba(255,255,255,0.6)' }}>
                                            {event.closed ? (
                                                <span className="text-sm">Registration Closed</span>
                                            ) : (
                                                <>
                                                    <span className="text-sm mr-2">Register Now</span>
                                                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    // Registration Form View
                    <div className="animate-slide-up">
                        {/* Back button and header */}
                        <button
                            onClick={handleBackToEvents}
                            className="mb-6 flex items-center text-white/70 hover:text-pink-400 transition-colors duration-300"
                            style={{ fontFamily: '"Proza Libre", sans-serif' }}
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Back to Events
                        </button>

                        <div className="glass-card rounded-2xl p-8 md:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-pink-500 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: '"Ikaros", sans-serif' }}>
                                    {selectedEvent.name}
                                </h2>
                                <div className="flex items-center justify-center gap-2 text-zinc-400" style={{ fontFamily: '"Proza Libre", sans-serif' }}>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedEvent.type === "SOLO"
                                            ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                                            : selectedEvent.type === "SOLO_OR_PAIR"
                                                ? "bg-pink-500/20 text-pink-300 border border-pink-400/30"
                                                : "bg-blue-600/20 text-blue-200 border border-blue-500/30"
                                            }`}
                                    >
                                        {selectedEvent.type === "SOLO_OR_PAIR" ? "SOLO/PAIR" : selectedEvent.type} Event
                                        {selectedEvent.type === "GROUP" && selectedEvent.teamSize && ` (Team of ${selectedEvent.teamSize})`}
                                    </span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* SOLO Event Fields */}
                                {selectedEvent.type === "SOLO" && (
                                    <div className="space-y-6 animate-fade-in">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Full Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="participantName"
                                                value={formData.participantName || ""}
                                                onChange={handleInputChange}
                                                className="form-input"
                                                required
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    USN <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="participantUsn"
                                                    value={formData.participantUsn || ""}
                                                    onChange={handleInputChange}
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
                                                    name="participantEmail"
                                                    value={formData.participantEmail || ""}
                                                    onChange={handleInputChange}
                                                    className="form-input"
                                                    required
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* SOLO_OR_PAIR Event Fields (Lens & Lore) */}
                                {selectedEvent.type === "SOLO_OR_PAIR" && (
                                    <div className="space-y-6 animate-fade-in">
                                        {/* Participant Count Selection */}
                                        <div className="form-group">
                                            <label className="form-label">
                                                Number of Participants <span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                name="participantCount"
                                                value={formData.participantCount || "1"}
                                                onChange={handleInputChange}
                                                className="form-input"
                                                required
                                            >
                                                <option value="1">1 (Solo)</option>
                                                <option value="2">2 (Pair)</option>
                                            </select>
                                        </div>

                                        {/* Participant 1 */}
                                        <div className="border border-blue-500/30 rounded-xl p-6 bg-blue-500/5">
                                            <h3 className="text-xl font-semibold text-blue-300 mb-4" style={{ fontFamily: '"Ikaros2", sans-serif' }}>
                                                {Number(formData.participantCount) === 2 ? "Participant 1" : "Participant"}
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Full Name <span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="participantName"
                                                        value={formData.participantName || ""}
                                                        onChange={handleInputChange}
                                                        className="form-input"
                                                        required
                                                        placeholder="Enter your full name"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            USN <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="participantUsn"
                                                            value={formData.participantUsn || ""}
                                                            onChange={handleInputChange}
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
                                                            name="participantEmail"
                                                            value={formData.participantEmail || ""}
                                                            onChange={handleInputChange}
                                                            className="form-input"
                                                            required
                                                            placeholder="your.email@example.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Participant 2 (conditional) */}
                                        {Number(formData.participantCount) === 2 && (
                                            <div className="border border-pink-500/30 rounded-xl p-6 bg-pink-500/5">
                                                <h3 className="text-xl font-semibold text-pink-300 mb-4" style={{ fontFamily: '"Ikaros2", sans-serif' }}>
                                                    Participant 2
                                                </h3>
                                                <div className="space-y-4">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            Full Name <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="teammate2Name"
                                                            value={formData.teammate2Name || ""}
                                                            onChange={handleInputChange}
                                                            className="form-input"
                                                            required
                                                            placeholder="Participant 2 name"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                USN <span className="text-red-400">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="teammate2Usn"
                                                                value={formData.teammate2Usn || ""}
                                                                onChange={handleInputChange}
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
                                                                name="teammate2Email"
                                                                value={formData.teammate2Email || ""}
                                                                onChange={handleInputChange}
                                                                className="form-input"
                                                                required
                                                                placeholder="participant2@example.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Team Name (optional for pairs) */}
                                        {Number(formData.participantCount) === 2 && (
                                            <div className="form-group">
                                                <label className="form-label">Team Name (Optional)</label>
                                                <input
                                                    type="text"
                                                    name="teamName"
                                                    value={formData.teamName || ""}
                                                    onChange={handleInputChange}
                                                    className="form-input"
                                                    placeholder="Optional team name"
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* GROUP Event Fields */}
                                {selectedEvent.type === "GROUP" && (
                                    <div className="space-y-6 animate-fade-in">
                                        {/* Team Leader */}
                                        <div className="border border-blue-500/30 rounded-xl p-6 bg-blue-500/5">
                                            <h3 className="text-xl font-semibold text-blue-300 mb-4" style={{ fontFamily: '"Ikaros2", sans-serif' }}>
                                                Team Leader
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Full Name <span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="teamLeaderName"
                                                        value={formData.teamLeaderName || ""}
                                                        onChange={handleInputChange}
                                                        className="form-input"
                                                        required
                                                        placeholder="Team leader name"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            USN <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="teamLeaderUsn"
                                                            value={formData.teamLeaderUsn || ""}
                                                            onChange={handleInputChange}
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
                                                            name="teamLeaderEmail"
                                                            value={formData.teamLeaderEmail || ""}
                                                            onChange={handleInputChange}
                                                            className="form-input"
                                                            required
                                                            placeholder="leader@example.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Teammate 2 */}
                                        <div className="border border-blue-500/30 rounded-xl p-6 bg-blue-500/5">
                                            <h3 className="text-xl font-semibold text-blue-300 mb-4" style={{ fontFamily: '"Ikaros2", sans-serif' }}>
                                                Teammate 2
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Full Name <span className="text-red-400">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="teammate2Name"
                                                        value={formData.teammate2Name || ""}
                                                        onChange={handleInputChange}
                                                        className="form-input"
                                                        required
                                                        placeholder="Teammate 2 name"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            USN <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="teammate2Usn"
                                                            value={formData.teammate2Usn || ""}
                                                            onChange={handleInputChange}
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
                                                            name="teammate2Email"
                                                            value={formData.teammate2Email || ""}
                                                            onChange={handleInputChange}
                                                            className="form-input"
                                                            required
                                                            placeholder="teammate2@example.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Teammate 3 (conditional for teams of 3+) */}
                                        {selectedEvent.teamSize && selectedEvent.teamSize >= 3 && (
                                            <div className="border border-blue-500/30 rounded-xl p-6 bg-blue-500/5">
                                                <h3 className="text-xl font-semibold text-blue-300 mb-4" style={{ fontFamily: '"Ikaros2", sans-serif' }}>
                                                    Teammate 3
                                                </h3>
                                                <div className="space-y-4">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            Full Name <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="teammate3Name"
                                                            value={formData.teammate3Name || ""}
                                                            onChange={handleInputChange}
                                                            className="form-input"
                                                            required
                                                            placeholder="Teammate 3 name"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                USN <span className="text-red-400">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="teammate3Usn"
                                                                value={formData.teammate3Usn || ""}
                                                                onChange={handleInputChange}
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
                                                                name="teammate3Email"
                                                                value={formData.teammate3Email || ""}
                                                                onChange={handleInputChange}
                                                                className="form-input"
                                                                required
                                                                placeholder="teammate3@example.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Teammate 4 (conditional for teams of 4+) */}
                                        {selectedEvent.teamSize && selectedEvent.teamSize >= 4 && (
                                            <div className="border border-blue-500/30 rounded-xl p-6 bg-blue-500/5">
                                                <h3 className="text-xl font-semibold text-blue-300 mb-4" style={{ fontFamily: '"Ikaros2", sans-serif' }}>
                                                    Teammate 4
                                                </h3>
                                                <div className="space-y-4">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            Full Name <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="teammate4Name"
                                                            value={formData.teammate4Name || ""}
                                                            onChange={handleInputChange}
                                                            className="form-input"
                                                            required
                                                            placeholder="Teammate 4 name"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                USN <span className="text-red-400">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="teammate4Usn"
                                                                value={formData.teammate4Usn || ""}
                                                                onChange={handleInputChange}
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
                                                                name="teammate4Email"
                                                                value={formData.teammate4Email || ""}
                                                                onChange={handleInputChange}
                                                                className="form-input"
                                                                required
                                                                placeholder="teammate4@example.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Teammate 5 (conditional for teams of 5) */}
                                        {selectedEvent.teamSize && selectedEvent.teamSize >= 5 && (
                                            <div className="border border-blue-500/30 rounded-xl p-6 bg-blue-500/5">
                                                <h3 className="text-xl font-semibold text-blue-300 mb-4" style={{ fontFamily: '"Ikaros2", sans-serif' }}>
                                                    Teammate 5
                                                </h3>
                                                <div className="space-y-4">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            Full Name <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="teammate5Name"
                                                            value={formData.teammate5Name || ""}
                                                            onChange={handleInputChange}
                                                            className="form-input"
                                                            required
                                                            placeholder="Teammate 5 name"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                USN <span className="text-red-400">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="teammate5Usn"
                                                                value={formData.teammate5Usn || ""}
                                                                onChange={handleInputChange}
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
                                                                name="teammate5Email"
                                                                value={formData.teammate5Email || ""}
                                                                onChange={handleInputChange}
                                                                className="form-input"
                                                                required
                                                                placeholder="teammate5@example.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Team Name for Group Events */}
                                        <div className="form-group">
                                            <label className="form-label">
                                                Team Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="teamName"
                                                value={formData.teamName || ""}
                                                onChange={handleInputChange}
                                                className="form-input"
                                                required
                                                placeholder="Enter team name"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Common Fields */}
                                <div className="space-y-6 border-t border-zinc-700 pt-6">
                                    <h3 className="text-xl font-semibold text-zinc-300" style={{ fontFamily: '"Ikaros2", sans-serif' }}>
                                        Additional Information
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Phone Number <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange}
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
                                                name="department"
                                                value={formData.department}
                                                onChange={handleInputChange}
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
                                                name="yearOfStudy"
                                                value={formData.yearOfStudy}
                                                onChange={handleInputChange}
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

                                        {/* Team Name for Solo Events (optional) */}
                                        {selectedEvent.type === "SOLO" && (
                                            <div className="form-group">
                                                <label className="form-label">Team Name (Optional)</label>
                                                <input
                                                    type="text"
                                                    name="teamName"
                                                    value={formData.teamName || ""}
                                                    onChange={handleInputChange}
                                                    className="form-input"
                                                    placeholder="Optional team name"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50 text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
