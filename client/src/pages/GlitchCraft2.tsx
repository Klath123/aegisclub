import { useState, useEffect } from 'react';
import {
  Trophy,
  ExternalLink,
  Camera,
  MapPin,
  Gift,
  ArrowLeft,
  ArrowUpRight,
  Terminal,
  Gamepad2,
  Key,
  Film,
  Music,
  Video
} from 'lucide-react';

const GlitchCraft2 = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334195/13/part_1/b6f701fe-c302-48ac-a0d5-2f3b68ab3e33.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334517/13/part_1/img_4940.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334294/13/part_1/img_1242.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334325/13/part_1/img_4841.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const eventsList = [
    {
      title: "Decipher Blitz",
      category: "Cybersecurity",
      icon: <Terminal size={18} className="text-blue-400" />,
      desc: "Standard CTF & Rapid-Fire battles. Test your hacking skills.",
      prize: "₹1,500 Pool"
    },
    {
      title: "Valorant Battle",
      category: "Esports",
      icon: <Gamepad2 size={18} className="text-purple-400" />,
      desc: "Squad Mode survival. Compete for the Chicken Dinner.",
      prize: "₹1,500 Pool"
    },
    {
      title: "Escape the Enigma",
      category: "Mystery",
      icon: <Key size={18} className="text-yellow-400" />,
      desc: "Solve intricate puzzles and race against the clock.",
      prize: "₹1,500 Pool"
    },
    {
      title: "CineMania",
      category: "Quiz",
      icon: <Film size={18} className="text-red-400" />,
      desc: "Ultimate movie & series quiz for binge-watchers.",
      prize: "₹1,500 Pool"
    },
    {
      title: "Hack-A-Note",
      category: "Music",
      icon: <Music size={18} className="text-pink-400" />,
      desc: "Solo or instrumental performances on the main stage.",
      prize: "₹1,500 Pool"
    },
    {
      title: "Reelity Show",
      category: "Creativity",
      icon: <Video size={18} className="text-green-400" />,
      desc: "Create a captivating 30s reel. Show your editing skills.",
      prize: "₹1,500 Pool"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-blue-500/30">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa14_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Ambient Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[160px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-10">

        {/* Back Link */}
        <a
          href="/events"
          className="group inline-flex items-center gap-2 text-slate-400 text-sm hover:text-blue-400 transition-colors"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          <span className="relative">
            Back to events
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </span>
        </a>

        {/* Header */}
        <header className="space-y-4 max-w-4xl">
          <div className="group inline-flex items-center gap-4 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            <span className="relative leading-none">
              GLITCHCRAFT 2.0
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-400 group-hover:w-full" />
            </span>
            <span className="hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg border border-blue-500/30 text-blue-400 group-hover:border-blue-400 transition">
              <ArrowUpRight size={22} />
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A dynamic, multi-disciplinary festival designed to celebrate innovation, technical prowess, and creative expression. From CTFs to Art, we bridge the gap between academic excellence and industry needs.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">

          {/* 1. Hero Image (8 cols, 3 rows) */}
          <div className="sm:col-span-2 lg:col-span-8 lg:row-span-3 h-[300px] sm:h-[400px] lg:h-auto bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl overflow-hidden relative group">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="GlitchCraft"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === currentImg ? 'opacity-60' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === currentImg ? 'w-8 bg-blue-400' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 2. Prize Pool (4 cols, 1 row) */}
          <div className="sm:col-span-2 lg:col-span-4 lg:row-span-1 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl p-5 flex flex-col justify-between min-h-[140px]">
            <div className="flex items-center gap-2">
              <Gift size={18} className="text-blue-400" />
              <p className="text-xs uppercase tracking-wide text-slate-400">Total Prize Pool</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                ₹10,000<span className="text-blue-400">+</span>
              </p>
              <p className="text-xs text-slate-500">Cash prizes & Goodies</p>
            </div>
          </div>

          {/* 3. Stats (4 cols, 2 rows) */}
          <div className="sm:col-span-2 lg:col-span-4 lg:row-span-2 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl p-5 grid grid-cols-2 gap-4 min-h-[240px]">
            {[
              { label: 'Events', value: '06' },
              { label: 'Days', value: '02' },
              { label: 'Teams', value: '50+' },
              { label: 'Energy', value: '100%' }
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col justify-center rounded-lg bg-zinc-800/40 px-4 py-3 border border-white/5">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
                <p className="text-xl sm:text-2xl font-semibold tracking-tight text-white">{value}</p>
              </div>
            ))}
          </div>

          {/* 4. Featured Events - Detailed Grid (9 cols, 3 rows) */}
          <div className="sm:col-span-2 lg:col-span-9 lg:row-span-3 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="text-blue-400" size={18} />
              <h3 className="text-lg font-semibold text-white">Event Highlights</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eventsList.map((event, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col justify-between p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50 transition duration-300"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-700 transition">
                        {event.icon}
                      </div>
                      <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {event.category}
                      </span>
                    </div>
                    
                    <h4 className="text-sm font-bold text-white mb-1 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {event.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-slate-500">Prize</span>
                    <span className="text-xs font-bold text-white  transition-colors">
                      {event.prize}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Venue (3 cols, 2 rows) */}
          <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl p-6 flex flex-col justify-between min-h-[240px]">
            <div>
              <MapPin className="text-blue-400 mb-4" size={22} />
              <h4 className="text-lg font-semibold mb-2">DSCE</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Shavige Malleshwara Hills,<br />
                Kumaraswamy Layout, Bengaluru
              </p>
            </div>
            <button className="group inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 rounded-lg text-sm text-blue-400 hover:bg-blue-500/10 transition w-fit">
              Open Maps
              <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* 6. Gallery Link (3 cols, 1 row) */}
          <a
            href="/gallery"
            className="group sm:col-span-2 lg:col-span-3 lg:row-span-1 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl p-6 flex flex-col justify-between min-h-[140px] cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <Camera size={24} className="text-blue-400" />
              <ArrowUpRight size={16} className="text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <p className="text-xl font-semibold text-white">Gallery</p>
              <p className="text-xs text-slate-500">View event photos</p>
            </div>
          </a>

        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-blue-500/20 text-center text-slate-600 text-sm">
          GlitchCraft 2.0 · 2026 · DSCE Bengaluru
        </footer>
      </div>
    </div>
  );
};

export default GlitchCraft2;