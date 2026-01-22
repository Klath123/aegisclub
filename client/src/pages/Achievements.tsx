import { useEffect, useState } from "react";
import AegisRobot from "../components/robot/AegisRobot";

/* ---------------- DATA ---------------- */

const missions = [
  {
    name: "Rohan K",
    image: "", // Make sure this is a valid file path like "/Achievmembers/rohan.jpg"
    achievements: ["GSoC 2025", "SIH Finalist", "National Level CTF Winner"],
  },
  {
    name: "Ananya S",
    image: "/achivmembers/tiger.png",
    achievements: ["Hackathon Winner", "Core Security Team", "Bug Bounty Hunter"],
  },
  {
    name: "Adithya B Shetty",
    image: "/members/vikram.jpg", // Placeholder
    achievements: ["Kernel Dev", "Exploit Researcher", "Hardware Hacking"],
  },
  {
    name: "Sita A S",
    image: "/members/vikram.jpg", // Placeholder
    achievements: ["Kernel Dev", "Exploit Researcher", "Hardware Hacking"],
  },
  {
    name: "Vikram R",
    image: "/members/vikram.jpg", // Placeholder
    achievements: ["Kernel Dev", "Exploit Researcher", "Hardware Hacking"],
  },
    {
    name: "Yash",
    image: "/achivmembers/yash.png", // Make sure this is a valid file path like "/Achievmembers/rohan.jpg"
    achievements: ["GSoC 2025", "SIH Finalist", "National Level CTF Winner"],
  },
  
];

/* ---------------- PAGE COMPONENT ---------------- */

export default function Achievements() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen px-4 pt-32 pb-24 max-w-7xl mx-auto font-mono text-white overflow-x-hidden">
      
      {/* INTRO OVERLAY */}
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}

      {/* TITLE */}
      <AchievementTitle />

      {/* GRID */}
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
        {missions.map((agent, index) => (
          <MissionCard key={index} agent={agent} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- TITLE WITH ROBOT (Mobile Optimized) ---------------- */
function AchievementTitle() {
  const [index, setIndex] = useState(0);
  const TITLE = "ACHIEVEMENT LOG";
  
  // OPTIMIZATION: Smaller width for mobile (w-7), larger for desktop (w-14)
  const CHAR_WIDTH_CLASS = "w-7 sm:w-10 md:w-14"; 
  const TEXT_SIZE = "text-xl sm:text-3xl md:text-5xl";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLE.length);
    }, 800);

    return () => clearInterval(interval);
  }, [TITLE.length]);

  return (
    <div className="flex flex-col items-center mb-28 relative z-10 scale-90 sm:scale-100 transition-transform">
      
      {/* CONTAINER */}
      <div className="relative inline-flex">
        
        {/* ROBOT WRAPPER */}
        <div
          className={`absolute -top-12 sm:-top-16 left-0 h-16 flex flex-col justify-end items-center transition-transform duration-300 ease-in-out ${CHAR_WIDTH_CLASS}`}
          style={{ transform: `translateX(${index * 100}%)` }}
        >
          {/* Robot */}
          <AegisRobot small />
          
          {/* Scanner Beam */}
          <div 
            className="absolute top-full left-1/2 -translate-x-1/2 w-full h-16 sm:h-24 bg-gradient-to-b from-cyan-400/30 to-transparent blur-sm -z-10 animate-pulse" 
            style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
          />
        </div>

        {/* TEXT ROW */}
        <h1 className={`flex font-bold tracking-widest text-cyan-400 font-mono select-none ${TEXT_SIZE}`}>
          {TITLE.split("").map((char, i) => (
            <span
              key={i}
              className={`
                ${CHAR_WIDTH_CLASS} 
                flex justify-center 
                transition-all duration-300
                ${i === index 
                  ? "text-cyan-200 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-110 -translate-y-1" 
                  : "opacity-30 text-cyan-900"
                }
              `}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

/* ---------------- 3D ID CARD (Side-by-Side Layout) ---------------- */

function MissionCard({ agent }: { agent: any }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      className="perspective-container relative z-0 hover:z-50 transition-all duration-0" 
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={resetRotation}
    >
      <div
        className={`
          relative group rounded-2xl p-6
          border border-white/10
          bg-black/90 backdrop-blur-xl
          overflow-visible
          transition-all duration-200 ease-out
        `}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovering 
            ? "0 0 50px -10px rgba(34,211,238,0.15)" 
            : "0 0 0 0 rgba(0,0,0,0)"
        }}
      >
        {/* --- BACKGROUND EFFECTS --- */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)"
          }}
        />
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

        {/* --- ROBOT (Top Right Corner) --- */}
        <div
          className="absolute -top-10 -right-4 w-16 h-16
                     opacity-0 group-hover:opacity-100
                     transition-all duration-500 delay-75
                     group-hover:-translate-y-2
                     pointer-events-none"
          style={{ transform: "translateZ(60px) rotate(10deg)" }} 
        >
          <AegisRobot small />
        </div>

        {/* --- MAIN CONTENT ROW --- */}
        <div className="flex items-center gap-6" style={{ transform: "translateZ(20px)" }}>
          
          {/* 1. IMAGE (Left Side) with Target Lock */}
          <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-300">
             {/* Glow */}
             <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             {/* Spinning Rings */}
             <div className="absolute -inset-3 border border-dashed border-cyan-500/60 rounded-full opacity-0 group-hover:opacity-100 animate-[spin_4s_linear_infinite] pointer-events-none" />
             <div className="absolute -inset-3 border-2 border-transparent border-t-cyan-400/80 border-b-cyan-400/80 rounded-full opacity-0 group-hover:opacity-100 animate-[spin_2s_linear_infinite_reverse] pointer-events-none" />
             
             {/* Photo */}
             <img
              src={agent.image}
              alt={agent.name}
              className="relative w-20 h-20 rounded-full object-cover border-2 border-white/10 group-hover:border-transparent transition-colors bg-neutral-900 z-10"
            />
          </div>

          {/* 2. NAME & INFO (Right Side) */}
          <div className="flex flex-col items-start w-full">
            
            {/* Unique Font Style: Gradient Text + Heavy Weight */}
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-1
                           bg-gradient-to-r from-white via-cyan-100 to-cyan-400 
                           bg-clip-text text-transparent
                           group-hover:to-white transition-all">
              {agent.name}
            </h2>

            <p className="text-[10px] font-mono text-emerald-400 mb-3 tracking-widest opacity-80 flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/> 
               MISSION ACCOMPLISHED
            </p>
          </div>
        </div>

        {/* --- BADGES (Bottom Row) --- */}
        <div 
          className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2" 
          style={{ transform: "translateZ(10px)" }}
        >
          {agent.achievements.map((badge: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-sm 
                         bg-cyan-950/30 text-cyan-400/80 border border-cyan-900/50 
                         group-hover:border-cyan-400/50 group-hover:text-cyan-100 
                         group-hover:bg-cyan-900/40 transition-all"
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ---------------- INTRO OVERLAY COMPONENT ---------------- */
function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timeline of events (in milliseconds)
    const timers = [
      setTimeout(() => setStep(1), 500),  // Show Line 1
      setTimeout(() => setStep(2), 1500), // Show Line 2
      setTimeout(() => setStep(3), 2500), // Fade Out
      setTimeout(onComplete, 3000),       // Remove from DOM
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (step === 4) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono transition-opacity duration-700 ${
        step === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="space-y-4 text-center">
        {/* Line 1 */}
        <div className={`text-cyan-500 tracking-[0.3em] text-sm sm:text-base transition-all duration-700 transform ${
            step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
          // SYSTEM INITIALIZED
        </div>

        {/* Line 2 (The Honor Line) */}
        <h1 className={`text-white font-bold text-2xl sm:text-4xl tracking-widest transition-all duration-700 delay-100 transform ${
            step >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          HONORING THE <span className="text-cyan-400">VANGUARD</span>
        </h1>
        
        {/* Loading Bar */}
         <div className={`w-48 h-1 bg-gray-800 mx-auto mt-8 rounded-full overflow-hidden transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-full bg-cyan-500 animate-[width_2s_ease-in-out_forwards]" style={{ width: step >= 1 ? '100%' : '0%' }} />
         </div>
      </div>
    </div>
  );
}