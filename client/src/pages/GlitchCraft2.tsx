import { useState, useEffect } from 'react';
import {
  Trophy,
  Gift,
  ArrowLeft,
  ArrowUpRight,
  Terminal,
  Gamepad2,
  Key,
  Film,
  Video,
  UserPlus,
  DollarSign, 
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
  }, [images.length]);

  const eventsList = [
    {
      title: "Decipher Blitz",
      category: "Cybersecurity",
      icon: <Terminal size={18} className="text-blue-400" />,
      desc: "Are you ready to test your cybersecurity skills? Think fast, solve puzzles, and capture flags in a high-stakes battle. Compete in Standard CTF and Rapid-Fire Challenge, racing against time and rivals to claim victory!",
      prize: "₹1,500 Pool"
    },
    {
      title: "Valorant Battle",
      category: "Esports",
      icon: <Gamepad2 size={18} className="text-purple-400" />,
      desc: "VALORANT is a tactical 5v5 FPS where precision shooting meets strategic ability usage. Every round is a test of teamwork, map control, and clutch decision-making.The Aegis club is organizing a competitive VALORANT tournament open to teams ready to battle it out for glory.",
      prize: "₹1,500 Pool"
    },
    {
      title: "Last Squad Standing",
      category: "Esports",
      icon: <Gamepad2 size={18} className="text-orange-400" />,
      desc: "Drop into a brutal battleground where every second tests your instincts and every decision decides survival. Precision gunplay, aggressive rotations, and flawless team coordination are essential as the play zone tightens. Outsmart rival squads, dominate close-combat encounters, and maintain control under fire. Only the most disciplined and fearless team will endure the chaos and claim victory when the final shot is fired.",
      prize: "₹1,500 Pool"
    },
    {
      title: "Escape the Enigma",
      category: "Mystery",
      icon: <Key size={18} className="text-yellow-400" />,
      desc: "Think fast. Move faster. The door locks behind you, the timer starts, and it’s game on. This escape room throws you into an intense, immersive challenge packed with clever puzzles, hidden clues, and unexpected twists. Team up with your friends, test your logic, and see who keeps their cool under pressure. You’ll need sharp minds, bold moves, and strong teamwork to beat the clock. Bragging rights included — if you escape in time",
      prize: "₹1,500 Pool"
    },
    {
      title: "Lens & Lore",
      category: "Media",
      icon: <Film size={18} className="text-red-400" />,
      desc: "Every corner has a story waiting to be told. Lens & Lore challenges you to capture the spirit, emotions, and unseen narratives of our campus through your creative vision. In just two hours, you must imagine, shoot, and craft a compelling visual story, either through a powerful photo sequence or a short cinematic video. It’s not about fancy gear; it’s about perspective, storytelling, and the magic you create within the moment.",
      prize: "₹1,500 Pool"
    },
    {
      title: "Pitch Pe Paisa",
      category: "Auction",
      icon: <DollarSign size={18} className="text-pink-400" />,
      desc: "Step into the thrill of the IPL with our high-energy IPL-Style Player Auction! Each team gets a fixed virtual budget and battles it out in a live bidding war to build the ultimate cricket squad. Strategy, smart spending, and sharp decision-making will decide who creates the most powerful lineup. Outbid, outsmart, and outplay– Only the smart bidders will lead the leaderboard Paisa bhi, Planning nhi, Pressure bhi!",
      prize: "₹1,500 Pool"
    },
    {
      title: "Popcorn Panic",
      category: "Quiz",
      icon: <Video size={18} className="text-green-400" />,
      desc: "Get ready to put your binge-watching skills to the test! This exciting movie & series quiz will challenge your knowledge across genres, characters, dialogues, and iconic scenes. Team up with your friends and compete against fellow cinephiles.",
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
            A four-day festival unique convergence of technology and creativity, featuring carefully curated events that challenge both technical prowess and artistic expression. 
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
              <h3 className="text-lg font-semibold text-white">FLAGSHIP MISSIONS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {eventsList.map((event, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col justify-between p-5 rounded-xl bg-zinc-800/30 border border-zinc-700/50 transition duration-300 min-h-[220px]"
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
                    
                    <h4 className="text-base font-bold text-white mb-2 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
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

          {/* 5. Registation  (3 cols, 2 rows) */}
          <a
            href="/register"
          className="group sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-500/40 hover:border-blue-400 transition-all duration-500 rounded-2xl p-8 flex flex-col justify-center items-center gap-5 min-h-[240px] cursor-pointer relative overflow-hidden hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
        >
          {/* Animated background pulse */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
          
          {/* Icon with scale and glow - NO ROTATION */}
          <div className="relative p-4 rounded-full bg-blue-500/20 border border-blue-400/30 group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
            <UserPlus size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          </div>
          
          {/* Text with slide up */}
          <div className="text-center relative z-10">
            <p className="text-3xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Register Now
            </p>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              Secure your spot for GlitchCraft 2.0
            </p>
          </div>
          
          {/* CTA with arrow animation */}
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium relative z-10">
            <span className="group-hover:tracking-wider transition-all duration-300">Join the mission</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
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