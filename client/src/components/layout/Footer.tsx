import { Github, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="
      relative z-20
      bg-black/70 backdrop-blur-xl
      border-t border-blue-500/20
      px-6 py-8
    ">
      {/* subtle glow line */}
      <div className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[70%] h-[1px]
        bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent
      " />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/aegis-club"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                p-2.5 rounded-xl
                bg-white/5 border border-white/10
                text-slate-300
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-blue-500/10
                hover:-translate-y-0.5
                hover:shadow-lg hover:shadow-cyan-500/20
              "
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com/aegis_club"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="
                group
                p-2.5 rounded-xl
                bg-white/5 border border-white/10
                text-slate-300
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-blue-500/10
                hover:-translate-y-0.5
                hover:shadow-lg hover:shadow-cyan-500/20
              "
            >
              <FaXTwitter className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/aegis_club"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                group
                p-2.5 rounded-xl
                bg-white/5 border border-white/10
                text-slate-300
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-blue-500/10
                hover:-translate-y-0.5
                hover:shadow-lg hover:shadow-cyan-500/20
              "
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/company/aegis-club"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                p-2.5 rounded-xl
                bg-white/5 border border-white/10
                text-slate-300
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-blue-500/10
                hover:-translate-y-0.5
                hover:shadow-lg hover:shadow-cyan-500/20
              "
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Text */}
          <div className="text-center space-y-1">
            <p className="text-sm text-slate-300 font-mono">
              Made with <span className="text-red-500">❤</span> by Aegis Club
            </p>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
