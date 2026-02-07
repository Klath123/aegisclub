import { useEffect, useRef, useState } from "react";

/* ---------------- DATA ---------------- */

const achievementsData = [
  {
    id: "01",
    title: "Smart India Hackathon 2025",
    subtitle: "Hackathon",
    rank: "Winner",
    date: "2025",
    description: "Won the Smart India Hackathon 2025 as a part of team Dedsec",
    members: [
      "R Aswin",
      "Ritisha Bhattacharjee",
      "Shreyas Reddy B",
      "H Sanjay",
    ],
    image:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1770023326/uploads/kmavqiu1ltbbu1yzzzxz.jpg",
    theme: "amber",
  },
  {
    id: "02",
    title: "HackSky: Pan India Hackathon",
    subtitle: "Hackathon",
    rank: "3rd Place",
    date: "2025",
    description:
      "Won 3rd place at HackSky: Pan India Hackathon (48hr) by Kaspersky at MIT Bangaluru.",
    members: ["Karan Jain", "Samarth B C", "Saqlain Ahmed"],
    image:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1770023403/uploads/jeb1imjdykardwtwikeu.jpg",
    theme: "amber",
  },
  {
    id: "03",
    title: "Udaya 1.0 Hackathon",
    subtitle: "Hackathon",
    rank: "1st Position",
    date: "Sep 27, 2025",
    description:
      "Secured 1st position in track Ai first campus digitization in Udaya 1.0 Hackathon held on 27th September 2025 by Computer Science And Design Department of DSCE, Bangalore.",
    members: [
      "Devansh Pateriya",
      "Keshav Lath",
      "Shubham Verma",
      "Tanmay Srivastava",
    ],
    image:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1770023483/uploads/d5k2swdbkvgsgpm2o7lx.jpg",
    theme: "amber",
  },
  {
    id: "04",
    title: "Code of Honour 2.0",
    subtitle: "Hackathon",
    rank: "1st Place",
    date: "Oct 12, 2025",
    description:
      "Secured 1st Place at the Code of Honour 2.0 30hr Hackathon, hosted at PES University We began as one of several teams in a highly competitive CTF round, advanced to the Top 37, and were finally selected among the Top 10 to present our final solution.",
    members: [
      "Devansh Pateriya",
      "Keshav Lath",
      "Shubham Verma",
      "Tanmay Srivastava",
    ],
    image:
      " https://res.cloudinary.com/dyiohvauq/image/upload/v1769366839/aegis/events/achieveent.jpg",
    theme: "amber",
  },
  {
    id: "05",
    title: "Annual Sports Meet",
    subtitle: "Athletics",
    rank: "3rd Place (100m)",
    date: "2025",
    description:
      "Secured 3rd place in the 100-meter Athletics Event during the Annual Sports Day organized by DSCE.",
    members: ["Dhanya A R"],
    image:
      "  https://res.cloudinary.com/dyiohvauq/image/upload/v1769367075/aegis/events/achievement.jpg",
    theme: "amber",
  },
  {
    id: "06",
    title: "Sports",
    subtitle: "National Level and State Level",
    rank: "Silver & Bronze",
    date: "2024-2025",
    description:
      "Won bronze medal in the senior women's foil individual category, Represented VTU in the All India Inter University Fencing Championship at Amritsar, Punjab and ranked top 10, Awarded for representing VTU at the national level in fencing during the years 2024 and 2025, Won Silver medal in the senior women's foil individual category, Represented Karnataka in the 31st Junior National Fencing Championship in the foil women's category and ranked top 16",
    members: ["Letitia Gilbert"],
    image:
      " https://res.cloudinary.com/dyiohvauq/image/upload/v1769367165/aegis/events/achiev.jpg",
    theme: "amber",
  },
  {
    id: "07",
    title: "IEEE Hyderabad Cybersecurity",
    subtitle: "Hackathon",
    rank: "Winner",
    date: "2024",
    description:
      "Winner of AIRS (Automated Incidence Response System) track in IEEE Hyderabad Cybersecurity hackathon 2024.",
    members: ["Samarth BC", "Nikita K", "Dhruti GP", "Nikhita T"],
    image:
      "https://res.cloudinary.com/dyiohvauq/image/upload/v1770023577/uploads/rzybdg95hv7ildtqqwhg.jpg",
    theme: "amber",
  },
];

/* ---------------- THEME CONFIG ---------------- */
interface Theme {
  text: string;
  border?: string;
  bg: string;
  bar?: string;
}

const THEMES: { [key: string]: Theme } = {
  default: {
    text: "text-white",
    bg: "from-black via-black to-black",
  },
  amber: {
    text: "text-amber-400",
    border: "border-amber-500/30",
    bg: "from-amber-950/30 via-black to-black",
    bar: "bg-amber-500",
  },
};

/* ---------------- PAGE COMPONENT ---------------- */

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTheme, setActiveTheme] = useState("default");
  const [, setActiveIndex] = useState(-1);

  // --- STANDARD SCROLL HANDLERS ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: { deltaY: number; preventDefault: () => void }) => {
      if (window.innerWidth > 768) {
        if (e.deltaY !== 0) {
          container.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      }
    };

    const handleKeyDown = (e: { key: string }) => {
      const scrollAmount = window.innerWidth;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // --- JUMP TO CARD LOGIC ---
  // const scrollToCard = (index: number) => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const width = window.innerWidth;
  //   container.scrollTo({
  //       left: width * (index + 1),
  //       behavior: 'smooth'
  //   });
  // };

  // const scrollToStart = () => {
  //   const container = containerRef.current;
  //   if (container) container.scrollTo({ left: 0, behavior: 'smooth' });
  // };

  const theme = THEMES[activeTheme] || THEMES.default;

  return (
    <div className="bg-black h-screen w-screen overflow-hidden text-white font-sans relative transition-colors duration-1000">
      {/* 1. AMBIENT ATMOSPHERE */}
      <div
        className={`fixed inset-0 z-0 bg-gradient-to-br ${theme.bg} transition-all duration-1000 ease-in-out`}
      />

      {/* 2. NOISE OVERLAY */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
        }}
      />

      {/* 3. NAVIGATION DOCK (Hidden on Mobile, Visible on Desktop) */}
      {/* <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center gap-2 px-4 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 hover:bg-black/60 shadow-2xl">
         
         <button 
           onClick={scrollToStart}
           className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${activeIndex === -1 ? 'text-white scale-110' : 'text-neutral-500 hover:text-white'}`}
         >
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L4 9v12h5v-7h6v7h5V9z"/></svg>
         </button>

         <div className="w-px h-4 bg-white/20 mx-1" />

         {achievementsData.map((_, i) => (
           <button
             key={i}
             onClick={() => scrollToCard(i)}
             className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-white/80
                ${activeIndex === i ? `${theme.bar || 'bg-white'} w-12 shadow-[0_0_10px_currentColor]` : 'bg-white/20 w-6'}
             `}
           />
         ))}
      </div> */}

      {/* 4. SCROLL HINT */}
      <div className="fixed bottom-8 right-6 md:bottom-10 md:right-8 z-40 flex flex-col items-end gap-2 mix-blend-difference pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-white/50 hidden md:block">
          Scroll
        </span>
        <div className="w-1 md:w-16 h-16 md:h-[2px] bg-white/20 relative overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-white animate-pulse md:w-1/3 md:h-full w-full h-1/3" />
        </div>
      </div>

      {/* --- MAIN SCROLL CONTAINER --- */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col md:flex-row h-full w-full overflow-y-auto md:overflow-y-hidden md:overflow-x-auto snap-y md:snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {/* INTRO SCREEN */}
        <IntroSection
          onVisible={() => {
            setActiveTheme("default");
            setActiveIndex(-1);
          }}
        />

        {/* ACHIEVEMENT CARDS */}
        {achievementsData.map((item, index) => (
          <CinematicSection
            key={index}
            data={item}
            onVisible={() => {
              setActiveTheme(item.theme);
              setActiveIndex(index);
            }}
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
      ([entry]) => {
        if (entry.isIntersecting) onVisible();
      },
      { threshold: 0.6 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div
      ref={ref}
      className="h-screen md:min-w-screen md:w-screen flex-shrink-0 snap-start flex items-center justify-center relative"
    >
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

/* ---------------- CARD COMPONENT ---------------- */

function CinematicSection({
  data,
  onVisible,
}: {
  data: (typeof achievementsData)[0];
  onVisible: () => void;
}) {
  const styles = THEMES[data.theme] || THEMES.amber;
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
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible]);

  const getAnimClass = (delay: string) =>
    `transition-all duration-1000 ease-out transform ${isVisible ? `opacity-100 translate-y-0 ${delay}` : "opacity-0 translate-y-8"}`;

  return (
    <div
      ref={ref}
      className="h-screen md:min-w-screen w-full md:w-screen flex-shrink-0 snap-start relative flex flex-col md:flex-row border-b md:border-b-0 md:border-r border-white/5 bg-transparent"
    >
      {/* --- INFO SECTION (SCROLLABLE TEXT) --- */}
      <div className="flex-1 w-full md:w-[40%] h-full relative z-20 flex flex-col backdrop-blur-sm border-b md:border-b-0 md:border-r border-white/5 order-2 md:order-1 overflow-hidden">
        {/* Background Number */}
        <div
          className={`absolute top-2 left-4 md:top-12 md:left-12 opacity-10 pointer-events-none transition-opacity duration-1000 ${isVisible ? "opacity-20" : "opacity-0"}`}
        >
          <span
            className={`text-6xl md:text-[10rem] font-black tracking-tighter text-white font-mono`}
          >
            {data.id}
          </span>
        </div>

        {/* Scrollable Container for Text Content */}
        <div
          className="w-full h-full overflow-y-auto relative z-10 p-6 md:p-16 flex flex-col md:justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className={`space-y-3 md:space-y-5 mb-4 ${getAnimClass("delay-100")}`}
          >
            <span
              className={`inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase border rounded-full ${styles.text} ${styles.border}`}
            >
              {data.subtitle}
            </span>

            <h2 className="text-2xl md:text-5xl font-black text-white leading-[0.95] tracking-tight uppercase">
              {data.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* Description - Scrollable */}
          <div className={`py-4 ${getAnimClass("delay-300")}`}>
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-md border-l-2 border-white/10 pl-4 md:pl-6">
              {data.description}
            </p>
          </div>

          {/* --- STATS & ACHIEVED BY SECTION --- */}
          <div className={`mt-4 ${getAnimClass("delay-500")}`}>
            {/* Rank & Date Row */}
            <div className="flex items-center gap-4 mb-6 text-xs md:text-sm font-mono border-b border-white/10 pb-4 w-full max-w-md">
              <div className={`flex items-center gap-2 ${styles.text}`}>
                <span className="text-lg">🏆</span>
                <span className="font-bold uppercase tracking-wide">
                  {data.rank}
                </span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2 text-neutral-400">
                <span>📅</span>
                <span>{data.date}</span>
              </div>
            </div>

            {/* Names List */}
            <p className="text-[10px] uppercase text-neutral-600 tracking-widest mb-3 md:mb-4">
              Achieved By
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 pb-12 md:pb-0">
              {data.members.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 md:gap-3 cursor-default transition-all duration-300 hover:opacity-100`}
                >
                  <div
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current ${styles.text.split(" ")[0]}`}
                  />
                  <span className="text-xs md:text-sm font-mono text-neutral-300 hover:text-white transition-colors">
                    {m}
                  </span>
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

        <img
          src={data.image}
          alt={data.title}
          className={`
             relative z-20 max-h-[85%] max-w-[85%] w-auto h-auto object-contain shadow-2xl 
             transition-all duration-[200ms] ease-linear 
             ${isVisible ? "scale-110 opacity-100 blur-0" : "scale-100 opacity-0 blur-sm"}
           `}
        />
      </div>
    </div>
  );
}
