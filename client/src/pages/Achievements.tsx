import { useEffect, useRef, useState } from "react";

/* ---------------- DATA ---------------- */

const achievementsData = [
  {
    id: "01",
    title: "SIH 2025 WINNERS",
    subtitle: "NATIONAL CHAMPIONS",
    description: "Developed 'Aegis', an AI-driven intrusion detection system that secured the 1st rank nationwide. Predicting vulnerabilities before they happen.",
    members: ["Rohan K", "Ananya S", "Vikram R", "Sarah L"],
    image: "/achivmembers/hack.png",
    theme: "amber",
  },
  {
    id: "02",
    title: "LINUX KERNEL DEV",
    subtitle: "G.S.O.C 2025",
    description: "Contributed 5,000+ lines of code to the Linux Kernel. Optimized memory management for embedded devices, recognized as top contributor.",
    members: ["Adithya B Shetty"],
    image: "/achivmembers/hack.png",
    theme: "amber",
  },
  {
    id: "03",
    title: "ETH-INDIA FINALIST",
    subtitle: "WEB3 PIONEERS",
    description: "Built a decentralized identity protocol using Zero Knowledge Proofs. Selected among top 10 projects out of 2,000+ submissions.",
    members: ["Sita A S", "Arjun M"],
    image: "/achivmembers/hack.png",
    theme: "amber",
  },
  {
    id: "04",
    title: "AWS DEEP RACER",
    subtitle: "GLOBAL LEAGUE",
    description: "Trained a reinforcement learning model to drive an autonomous car. Placed top 5% in the global league.",
    members: ["Vikram R"],
    image: "/achivmembers/hack.png",
    theme: "amber",
  },
];

/* ---------------- THEME CONFIG ---------------- */
const THEMES: any = {
  default: {
    text: "text-white",
    bg: "from-black via-black to-black",
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "from-cyan-950/30 via-black to-black",
    bar: "bg-cyan-500",
  },
  amber: {
    text: "text-amber-400",
    border: "border-amber-500/30",
    bg: "from-amber-950/30 via-black to-black",
    bar: "bg-amber-500",
  },
  emerald: {
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "from-emerald-950/30 via-black to-black",
    bar: "bg-emerald-500",
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-500/30",
    bg: "from-purple-950/30 via-black to-black",
    bar: "bg-purple-500",
  },
};

/* ---------------- PAGE COMPONENT ---------------- */

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTheme, setActiveTheme] = useState("default");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. SCROLL HANDLER (Progress Bar Calculation)
    const handleScroll = () => {
      const totalScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    // 2. MOUSE WHEEL HANDLER (Desktop Only)
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth > 768) {
        if (e.deltaY !== 0) {
          container.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      }
    };

    // 3. KEYBOARD HANDLER
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollAmount = window.innerWidth;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    };

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Get current theme details
  const theme = THEMES[activeTheme] || THEMES.default;

  return (
    <div className="bg-black h-[100dvh] w-screen overflow-hidden text-white font-sans relative transition-colors duration-1000">
      
      {/* 1. AMBIENT ATMOSPHERE */}
      <div 
        className={`fixed inset-0 z-0 bg-gradient-to-br ${theme.bg} transition-all duration-1000 ease-in-out`} 
      />
      
      {/* 2. NOISE OVERLAY */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

      {/* 3. PROGRESS BAR (NEW) */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/10 z-50">
        <div 
          className={`h-full transition-all duration-300 ease-out ${theme.bar || "bg-white"}`} 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 4. SCROLL HINT (Removed bottom-6 to make room for bar) */}
      <div className="fixed bottom-8 right-6 md:bottom-10 md:right-8 z-40 flex flex-col items-end gap-2 mix-blend-difference pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-white/50 hidden md:block">Scroll / Keys</span>
        <div className="w-1 md:w-16 h-16 md:h-[2px] bg-white/20 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-white animate-pulse md:w-1/3 md:h-full w-full h-1/3" />
        </div>
      </div>

      {/* --- MAIN SCROLL CONTAINER --- */}
      <div 
        ref={containerRef}
        className="relative z-10 flex flex-col md:flex-row h-full w-full overflow-y-auto md:overflow-y-hidden md:overflow-x-auto snap-y md:snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none' }} 
      >
        
        {/* INTRO SCREEN */}
        <IntroSection onVisible={() => setActiveTheme("default")} />

        {/* ACHIEVEMENT CARDS */}
        {achievementsData.map((item, index) => (
          <CinematicSection 
            key={index} 
            data={item} 
            index={index} 
            onVisible={() => setActiveTheme(item.theme)}
          />
        ))}

        {/* END PADDING (Desktop Only) */}
        <div className="hidden md:block min-w-[20vw] h-full flex-shrink-0" />
      </div>
    </div>
  );
}

/* ---------------- INTRO SECTION ---------------- */
function IntroSection({ onVisible }: { onVisible: () => void }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(); },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div ref={ref} className="h-[100dvh] md:min-w-screen md:w-screen flex-shrink-0 snap-start flex items-center justify-center relative">
       <div className="text-center space-y-2 md:space-y-4 relative z-10 px-4">
          <h1 className="text-4xl md:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 animate-in fade-in slide-in-from-bottom-4 duration-1000">
             LEGACY
          </h1>
          <h1 className="text-4xl md:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white/60 to-white/20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            HALL OF FAME
          </h1>
       </div>
    </div>
  );
}

/* ---------------- CARD COMPONENT (With Slow Zoom) ---------------- */

function CinematicSection({ data, index, onVisible }: { data: any; index: number; onVisible: () => void }) {
  const styles = THEMES[data.theme] || THEMES.cyan;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onVisible(); 
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible]);

  const getAnimClass = (delay: string) => 
    `transition-all duration-1000 ease-out transform ${isVisible ? `opacity-100 translate-y-0 ${delay}` : "opacity-0 translate-y-8"}`;

  return (
    <div ref={ref} className="h-[100dvh] md:min-w-screen w-full md:w-screen flex-shrink-0 snap-start relative flex flex-col md:flex-row border-b md:border-b-0 md:border-r border-white/5 bg-transparent">
      
      {/* --- INFO SECTION --- */}
      <div className="flex-1 w-full md:w-[40%] md:h-full relative z-20 flex flex-col justify-center p-6 md:p-20 backdrop-blur-sm border-b md:border-b-0 md:border-r border-white/5 order-2 md:order-1 min-h-[60%] md:min-h-auto">
         
         <div className={`absolute top-2 left-4 md:top-12 md:left-12 opacity-10 pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}>
            <span className={`text-6xl md:text-[12rem] font-black tracking-tighter text-white font-mono`}>
              {data.id}
            </span>
         </div>

         <div className="relative flex flex-col justify-between h-full py-4 md:py-0">
           
           <div className={`space-y-2 md:space-y-6 ${getAnimClass('delay-100')}`}>
              <span className={`inline-block px-2 py-1 text-[10px] font-bold tracking-[0.2em] uppercase border rounded-full ${styles.text} ${styles.border}`}>
                {data.subtitle}
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-white leading-[0.9] tracking-tight uppercase">
                {data.title.split(" ").map((word: string, i: number) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
           </div>

           <div className={`my-auto py-4 ${getAnimClass('delay-300')}`}>
             <p className="text-neutral-400 text-xs md:text-base leading-relaxed max-w-md border-l-2 border-white/10 pl-4 md:pl-6 line-clamp-4 md:line-clamp-none">
               {data.description}
             </p>
           </div>

           {/* MEMBERS (Now with Focus Effect) */}
           <div className={getAnimClass('delay-500')}>
              <p className="text-[10px] uppercase text-neutral-600 tracking-widest mb-3 md:mb-4">Achieved By</p>
              
              {/* Added group/list to handle sibling hovering */}
              <div className="flex flex-wrap gap-2 md:gap-4 group/list">
                 {data.members.map((m: string, i: number) => (
                   <div 
                      key={i} 
                      className={`flex items-center gap-2 md:gap-3 cursor-default transition-all duration-300
                        ${/* Dim this item if another item in the list is being hovered */ ""}
                        group-hover/list:opacity-30 hover:!opacity-100
                      `}
                   >
                      <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current ${styles.text.split(' ')[0]}`} />
                      <span className="text-xs md:text-sm font-mono text-neutral-300 hover:text-white transition-colors">{m}</span>
                   </div>
                 ))}
              </div>
           </div>
         </div>
      </div>

      {/* --- IMAGE SECTION --- */}
      <div className="h-[35vh] md:h-full w-full md:w-[60%] relative overflow-hidden group flex items-center justify-center order-1 md:order-2 shrink-0">
         
         <div 
            className="absolute inset-0 bg-center bg-cover blur-3xl opacity-40 scale-110"
            style={{ backgroundImage: `url(${data.image})` }}
         />
         <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-transparent to-transparent z-10" />

         {/* Image with 'Cinematic Drift' (duration-200s) */}
         <img 
           src={data.image} 
           alt={data.title}
           className={`
             relative z-20 max-h-[85%] max-w-[85%] w-auto h-auto object-contain shadow-2xl 
             transition-all duration-[200ms] ease-linear 
             ${isVisible ? 'scale-110 opacity-100 blur-0' : 'scale-100 opacity-0 blur-sm'}
           `}
         />
      </div>

    </div>
  );
}