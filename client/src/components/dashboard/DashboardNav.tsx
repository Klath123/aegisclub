import React from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
    { label: "Overview", href: "/dashboard" },
    { label: "Pitch Pe Paisa", href: "/dashboard/pitch-pe-paisa" },
    { label: "Decipher Blitz", href: "/dashboard/decipher-blitz" },
    { label: "Lens & Lore", href: "/dashboard/lens-and-lore" },
    { label: "Popcorn Panic", href: "/dashboard/popcorn-panic" },
    { label: "Escape Enigma", href: "/dashboard/escape-enigma" },
    { label: "Valorant Battle", href: "/dashboard/valorant-battle" },
    { label: "BGMI LSS", href: "/dashboard/bgmi-lss" },
];

export const DashboardNav: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <nav className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-screen-2xl mx-auto px-4 flex items-center gap-6 h-14 overflow-x-auto">
                {/* Brand */}
                <Link
                    to="/"
                    className="text-white font-bold text-lg shrink-0 mr-2"
                    style={{ fontFamily: '"Ikaros", sans-serif' }}
                >
                    ← Aegis
                </Link>

                <span className="text-white/20 shrink-0">|</span>

                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={`text-sm shrink-0 px-3 py-1 rounded-full transition-all duration-200 ${pathname === link.href
                                ? "bg-blue-500/30 text-blue-300 border border-blue-400/40"
                                : "text-white/50 hover:text-white"
                            }`}
                        style={{ fontFamily: '"Proza Libre", sans-serif' }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
