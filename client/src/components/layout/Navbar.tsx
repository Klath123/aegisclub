import { Link, useLocation } from "react-router-dom";
import { Calendar, Users, Trophy, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Events", to: "/events", icon: Calendar },
    { label: "Members", to: "/members", icon: Users },
    { label: "Achievements", to: "/achievements", icon: Trophy },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-4 py-4 fade-in-blur" style={{ animationDelay: '2s', opacity: 0, animationFillMode: 'forwards' }}>
      <div
        className="max-w-7xl mx-auto rounded-2xl px-6 py-3 shadow-xl border"
        style={{
          background: 'rgba(9, 9, 11, 0.75)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderColor: 'rgba(255, 255, 255, 0.5)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
        }}
      >

        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="group relative">
            <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/aegis-navbar.png"
              alt="Aegis"
              className="relative h-12 w-24 object-contain rounded-x1"
            />
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-2 text-sm" style={{ fontFamily: '"Proza Libre3", sans-serif' }}>
            {navItems.map(item => (
              <Link
                key={item.label}
                to={item.to}
                className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${location.pathname === item.to
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-white-300 hover:text-white hover:bg-blue-500/5"
                  }`}
              >
                <item.icon className={`w-4 h-4 transition-colors ${location.pathname === item.to
                  ? "text-cyan-400"
                  : "text-cyan-400/60 group-hover:text-cyan-400"
                  }`} />
                {item.label}
                <div className="absolute bottom-0 left-3 right-3 h-[1px] scale-x-0 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-400 text-white font-mono text-sm font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
            style={{ fontFamily: '"Proza Libre3", sans-serif' }}
          >
            Contact Aegis
          </Link>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/10 transition-all duration-300"
          >
            {open ? (
              <X className="w-5 h-5 text-cyan-400" />
            ) : (
              <Menu className="w-5 h-5 text-cyan-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
