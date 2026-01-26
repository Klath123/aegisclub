import { MapPin, Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-zinc-800 text-gray-300">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">AEGIS</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            AEGIS is the official Cyber Security Club of the Department of Cyber Security,
            Dayananda Sagar College of Engineering. We build, break, defend, and repeat.
          </p>
        </div>
        {/* Column 2: Navigation + Map */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Navigate</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-blue-400 transition">About</a>
            </li>
            <li>
              <a href="/events" className="hover:text-blue-400 transition">Events</a>
            </li>
            <li>
              <a href="/members" className="hover:text-blue-400 transition">Members</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/gaDFj5JwREW7jxNL7"
                target="_blank"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
              >
                <MapPin size={16} className="text-blue-400" />
                Cyber Security Department, College Campus
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3: Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400" />
              <a
                href="mailto:aegis-cscyber@dayanandsagar.edu"
                className="hover:text-blue-400 transition"
              >
                aegis-cscyber@dayanandsagar.edu
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" />
              +91 99804 70040
            </p>

            <div className="flex gap-4 pt-3">
              <a
                href="https://www.linkedin.com/company/aegis-cs-cyber-dsce/"
                target="_blank"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-blue-500 hover:text-blue-400 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/dsce_cscy"
                target="_blank"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-pink-500 hover:text-pink-400 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} AEGIS Cyber Security Club · DSCE
      </div>
    </footer>
  );
};
export default Footer;