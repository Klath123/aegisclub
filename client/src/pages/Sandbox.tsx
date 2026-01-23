import { MapPin, Calendar, Trophy, MessageCircle } from "lucide-react";

const Sandbox = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/3 w-72 h-72 bg-blue-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white">
            SANDBOX
          </h1>
          <p className="text-cyan-400 text-lg font-medium">
            March 7th - 8th, 2026
          </p>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            The ultimate 24-hour cybersecurity hackathon returns. Join brilliant minds from around the globe to build innovative solutions, compete for amazing prizes, and push the boundaries of technology.
          </p>
        </section>

        {/* Terminal Info Block */}
        <section className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-8 shadow-lg shadow-cyan-500/10">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm space-y-2">
            <div className="text-gray-500">root@aegis:~$</div>
            <div className="text-green-400">+ DATE</div>
            <div className="text-white ml-4">March 7th - 8th, 2026</div>
            <div className="text-green-400">+ LOCATION</div>
            <div className="text-white ml-4">Dayananda Sagar College of Engineering, Bengaluru</div>
            <div className="text-green-400">+ DURATION</div>
            <div className="text-white ml-4">24 hours</div>
            <div className="text-green-400">+ PRIZE POOL</div>
            <div className="text-cyan-400 ml-4 text-2xl font-bold">₹ XX,XXX+</div>
          </div>
        </section>

        {/* Prize Pool Highlight */}
        <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="text-cyan-400 w-8 h-8" />
            <h2 className="text-3xl font-bold">Prize Pool</h2>
          </div>
          <p className="text-5xl font-bold text-cyan-400 mb-2">
            ₹ XX,XXX+
          </p>
          <p className="text-gray-400">
            Exciting prizes, goodies, and recognition for top performers.
          </p>
        </section>

        {/* Focus Areas */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-6">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Web Security",
              "Networking",
              "System Hardening",
              "Cryptography",
              "Pattern Analysis",
              "Logic Puzzles",
              "Reverse Thinking",
              "Hackathon"
            ].map((area) => (
              <div
                key={area}
                className="bg-gray-900/50 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:border-cyan-500/50 hover:bg-cyan-500/5 transition"
              >
                <span className="text-cyan-400 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks Grid */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Competition Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Threat Detection & Incident Response",
                desc: "Master the art of identifying threats and responding swiftly to cyber attacks."
              },
              {
                title: "Software Supply Chain Security",
                desc: "Secure development lifecycles and safeguard software supply chains."
              },
              {
                title: "Data Privacy & Protection",
                desc: "Design systems that protect sensitive data and comply with privacy laws."
              },
              {
                title: "Gamification in Cybersecurity",
                desc: "Build games or simulations that teach cybersecurity skills."
              },
              {
                title: "Application Security",
                desc: "Fortify web and mobile applications against modern exploits."
              },
              {
                title: "Web3 Security",
                desc: "Secure blockchain technologies, smart contracts, and dApps."
              },
              {
                title: "Dark Web Monitoring",
                desc: "Analyze dark web activity for threat intelligence and early warnings."
              },
              {
                title: "Open Innovation",
                desc: "Bring bold, creative cybersecurity ideas to life."
              }
            ].map((track) => (
              <div
                key={track.title}
                className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition group"
              >
                <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition">
                  {track.title}
                </h3>
                <p className="text-gray-400 text-sm">{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Discord Community */}
        <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="text-blue-400 w-8 h-8" />
            <h2 className="text-3xl font-bold">Join the Community</h2>
          </div>
          <p className="text-gray-300 mb-6">
            All announcements, updates, and discussions happen on Discord. Connect with fellow participants, mentors, and organizers.
          </p>
          <a
            href="https://discord.com/invite/y5Ej8t63ny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            Join Discord Server
          </a>
        </section>

        {/* Schedule */}
        <section className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-cyan-400 w-8 h-8" />
            <h2 className="text-3xl font-bold">Event Schedule</h2>
          </div>
          <p className="text-gray-400">
            Detailed schedule will be announced soon. Stay tuned on Discord for updates!
          </p>
        </section>

        {/* Venue */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className="text-cyan-400 w-8 h-8" />
            <h2 className="text-3xl font-bold">Venue</h2>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden">
            <img
              src="/sandbox-venue.png"
              alt="Dayananda Sagar College of Engineering"
              className="w-full h-auto"
            />
            <div className="p-6">
              <p className="font-bold text-xl text-white mb-2">
                Dayananda Sagar College of Engineering
              </p>
              <p className="text-gray-400 mb-4">
                Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru, Karnataka
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition inline-flex items-center gap-2"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition">
              <p className="font-bold text-lg text-cyan-400 mb-1">Shreyas Reddy B</p>
              <p className="text-gray-300">+91 70195 19888</p>
            </div>

            <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition">
              <p className="font-bold text-lg text-cyan-400 mb-1">Sahil Raj</p>
              <p className="text-gray-300">+91 80517 85892</p>
            </div>

            <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition">
              <p className="font-bold text-lg text-cyan-400 mb-1">R Aswin</p>
              <p className="text-gray-300">+91 99888 84477</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Sandbox;