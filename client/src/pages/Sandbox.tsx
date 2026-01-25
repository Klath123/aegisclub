import React, { useState, useEffect } from "react";
import { Trophy, Users, Code, Coffee, ExternalLink, PlayCircle, Camera, MessageSquare, Quote, Cpu, MapPin, ChevronRight, Gift } from "lucide-react";

const SandboxHighlights = () => {
  const [currentImg, setCurrentImg] = useState(0);
  
  // Slideshow images
  const images = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 pt-28">
      {/* Background Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] -z-10"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Area */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              ARCHIVE_RELEASE // 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              THE <span className="text-cyan-500">SANDBOX</span> RECAP
            </h1>
          </div>
          <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-cyan-500/30 px-4">
            <p className="text-white font-bold italic">"Hack the Future"</p>
            <p className="text-slate-500 text-sm font-mono">DSCE BENGALURU // MARCH 07-08</p>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(140px,auto)]">
          
          {/* 1. Image Slideshow (Span 8x4) */}
          <div className="md:col-span-8 md:row-span-4 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden relative group">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImg ? 'opacity-60 scale-105' : 'opacity-0'}`}
                alt="Hackathon event moment"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <div className="flex gap-2 mb-4">
                {images.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentImg ? 'w-8 bg-cyan-500' : 'w-2 bg-slate-600'}`}></div>
                ))}
              </div>
              <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-cyan-400 transition-all">
                <PlayCircle size={20} /> Watch Aftermovie
              </button>
            </div>
          </div>

          {/* 2. Prize Pool (Span 4x2) */}
          <div className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group">
            <Gift className="absolute -top-4 -right-4 text-yellow-500/10 group-hover:scale-110 transition-transform" size={120} />
            <div className="text-yellow-500 font-mono text-xs tracking-widest">TOTAL_REWARDS</div>
            <div>
              <p className="text-5xl font-black text-white">₹ XX,XXX<span className="text-yellow-500">+</span></p>
              <p className="text-slate-400 text-sm mt-1">Distributed across 8 categories</p>
            </div>
          </div>

          {/* 3. Quick Stats (Span 4x2) */}
          <div className="md:col-span-4 md:row-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <p className="text-slate-500 text-[10px] font-mono">HACKERS</p>
              <p className="text-2xl font-bold text-white tracking-tighter">500+</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-slate-500 text-[10px] font-mono">PROJECTS</p>
              <p className="text-2xl font-bold text-white tracking-tighter">84</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-slate-500 text-[10px] font-mono">COFFEE</p>
              <p className="text-2xl font-bold text-white tracking-tighter">1.2k</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-slate-500 text-[10px] font-mono">REWARDS</p>
              <p className="text-2xl font-bold text-white tracking-tighter">15+</p>
            </div>
          </div>

          {/* 4. Grand Winner Spotlight (Span 7x4) */}
          <div className="md:col-span-7 md:row-span-4 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                    <Trophy size={24} />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-400">GRAND_PRIZE_WINNER</span>
                </div>
                <h3 className="text-5xl font-black text-white">PROJECT AEGIS</h3>
                <p className="text-slate-400 text-lg max-w-md">
                  A decentralized autonomous security protocol that self-heals smart contracts using zero-knowledge proofs.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#020617] flex items-center justify-center text-[10px] font-bold">U{i}</div>)}
                </div>
                <button className="text-cyan-400 font-bold flex items-center gap-1 hover:gap-3 transition-all">
                  Case Study <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* 5. Location/Venue (Span 5x4) */}
          <div className="md:col-span-5 md:row-span-4 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group relative">
            <div className="p-8 relative z-10 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent h-full">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500 w-fit mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">VenueDSCE</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Shavige Malleshwara Hills, <br />
                Kumaraswamy Layout, Bengaluru.
              </p>
              <button className="px-4 py-2 border border-slate-700 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
                Open Maps <ExternalLink size={14} />
              </button>
            </div>
            {/* Subtle Map Background Decal */}
            <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity">
               <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [bg-size:16px_16px]"></div>
            </div>
          </div>

          {/* 6. Runner Ups (Span 6x2) */}
          <div className="md:col-span-6 md:row-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Silver & Bronze Tiers</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                <span className="font-bold text-slate-300">02. TEAM SENTINEL</span>
                <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">₹ XX,XXX</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                <span className="font-bold text-slate-300">03. CYBER KNIGHTS</span>
                <span className="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-1 rounded">₹ XX,XXX</span>
              </div>
            </div>
          </div>

          {/* 7. Gallery Link (Span 3x2) */}
          <div className="md:col-span-3 md:row-span-2 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-6 flex flex-col justify-between group cursor-pointer hover:bg-indigo-600/20 transition-all">
            <Camera className="text-indigo-400" size={32} />
            <div>
              <h4 className="font-bold text-white">200+ Shots</h4>
              <p className="text-indigo-400 text-xs">View Full Gallery</p>
            </div>
          </div>

          {/* 8. Quote (Span 3x2) */}
          <div className="md:col-span-3 md:row-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-center italic text-slate-400 text-sm">
            <Quote className="text-slate-700 mb-2" size={20} />
            "The energy was unmatched. The future of security is in good hands."
          </div>

        </div>

        {/* Footer */}
        <footer className="pt-20 pb-10 text-center border-t border-slate-800/50">
          <p className="text-slate-500 text-sm font-mono tracking-tighter uppercase">
            Designed for Sandbox 2026 // DSCE Bengaluru
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SandboxHighlights;