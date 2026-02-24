import React from "react";
import { Link } from "react-router-dom";
import { DashboardNav } from "../components/dashboard/DashboardNav";

const EVENTS = [
    { name: "Pitch Pe Paisa", href: "/dashboard/pitch-pe-paisa", color: "from-yellow-500/20 to-orange-500/20", badge: "GROUP (4)", emoji: "💰" },
    { name: "Decipher Blitz", href: "/dashboard/decipher-blitz", color: "from-blue-500/20 to-cyan-500/20", badge: "SOLO", emoji: "🔐" },
    { name: "Lens & Lore", href: "/dashboard/lens-and-lore", color: "from-pink-500/20 to-rose-500/20", badge: "SOLO/PAIR", emoji: "📸" },
    { name: "Popcorn Panic", href: "/dashboard/popcorn-panic", color: "from-red-500/20 to-pink-500/20", badge: "GROUP (3)", emoji: "🍿" },
    { name: "Escape Enigma", href: "/dashboard/escape-enigma", color: "from-purple-500/20 to-indigo-500/20", badge: "GROUP (4)", emoji: "🚪" },
    { name: "Valorant Battle", href: "/dashboard/valorant-battle", color: "from-red-600/20 to-orange-500/20", badge: "GROUP (5)", emoji: "🎮" },
    { name: "BGMI Last Squad Standing", href: "/dashboard/bgmi-lss", color: "from-green-500/20 to-teal-500/20", badge: "GROUP (4)", emoji: "🪖" },
];

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <DashboardNav />
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1
                        className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-300 via-white to-pink-400 bg-clip-text text-transparent"
                        style={{ fontFamily: '"Ikaros", sans-serif' }}
                    >
                        Glitchcraft Dashboard
                    </h1>
                    <p className="text-white/50" style={{ fontFamily: '"Proza Libre", sans-serif' }}>
                        View and manage registrations for all events
                    </p>
                </div>

                {/* Event Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {EVENTS.map((event) => (
                        <Link key={event.href} to={event.href}>
                            <div
                                className={`glass-card rounded-xl p-6 border border-white/10 bg-gradient-to-br ${event.color} hover:border-white/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl">{event.emoji}</span>
                                    <div>
                                        <h2
                                            className="text-white font-bold text-lg"
                                            style={{ fontFamily: '"Ikaros", sans-serif' }}
                                        >
                                            {event.name}
                                        </h2>
                                        <span className="text-white/40 text-xs" style={{ fontFamily: '"Proza Libre", sans-serif' }}>
                                            {event.badge}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center text-white/40 text-sm" style={{ fontFamily: '"Proza Libre", sans-serif' }}>
                                    <span>View registrations</span>
                                    <span className="ml-2">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
