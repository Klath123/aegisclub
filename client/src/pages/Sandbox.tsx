import { useState, useEffect } from 'react';
import {
  Trophy,
  ExternalLink,
  Camera,
  MapPin,
  Gift,
  ArrowLeft,
  ArrowUpRight 
} from 'lucide-react';

const SandboxRecap = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    ' https://res.cloudinary.com/dyiohvauq/image/upload/v1769344673/aegis/events/sandbox.jpg',
     "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334612/13/part_2/img_5078.webp",
        // "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334618/13/part_2/img_5098%281%29.webp",
                "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334601/13/part_2/img_5071.webp",
        // "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334622/13/part_2/img_5098.webp",
                "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334674/13/part_2/img_5127.webp"

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa14_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[160px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-10">

        {/* Back link */}
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

        {/* Heading */}
        <header className="space-y-4 max-w-4xl">
          <a
            href="https://aegis-sandbox.devfolio.co/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
          >
            {/* Title */}
            <span className="relative leading-none">
              SANDBOX
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-400 group-hover:w-full"
              />
            </span>
            {/* Icon */}
            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg border border-blue-500/30 text-blue-400 group-hover:border-blue-400 transition">
              <ArrowUpRight size={22} />
            </span>
          </a>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Sandbox was a 24-hour cybersecurity hackathon hosted at
            Dayananda Sagar College of Engineering, bringing together
            students from across the country to collaborate, innovate,
            and build security-focused solutions under real-world constraints.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">

          {/* Hero Image */}
          <div className="sm:col-span-2 lg:col-span-8 lg:row-span-3 h-[300px] sm:h-[400px] lg:h-auto bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl overflow-hidden relative">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Sandbox"
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

          {/* Prize */}
          <div className="sm:col-span-2 lg:col-span-4 lg:row-span-1 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl p-5 flex flex-col justify-between min-h-[140px]">
            {/* Header */}
            <div className="flex items-center gap-2">
              <Gift size={18} className="text-blue-400" />
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Total Prize Pool
              </p>
            </div>

            {/* Amount */}
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                ₹65,000<span className="text-blue-400">+</span>
              </p>
              <p className="text-xs text-slate-500">
                Cash prizes & goodies
              </p>
            </div>

            {/* Footer */}
            <div className="text-[11px] text-slate-500">
              Distributed across multiple categories
            </div>
          </div>

          {/* Stats */}
          <div className="sm:col-span-2 lg:col-span-4 lg:row-span-2 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl p-5 grid grid-cols-2 gap-4 min-h-[240px]">
            {[
              { label: 'Projects', value: '48+' },
              { label: 'Participants', value: '240+' },
              { label: 'Duration', value: '24+ hrs' },
              { label: 'Awards', value: '5+' }
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col justify-center rounded-lg bg-zinc-800/40 px-4 py-3"
              >
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  {label}
                </p>
                <p className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Projects Showcase */}
          <div className="sm:col-span-2 lg:col-span-9 lg:row-span-3 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-xl p-5 space-y-4">
            {/* Section Header */}
            <div className="flex items-center gap-2">
              <Trophy className="text-blue-400" size={16} />
              <h3 className="text-sm font-semibold text-white">
                Top Projects
              </h3>
            </div>

            {/* Winner */}
            <div className="rounded-lg bg-zinc-800/40 border border-blue-500/30 p-5">
              <p className="text-[10px] uppercase tracking-wide text-blue-400">
                Winner
              </p>
              <h4 className="text-base font-semibold text-white">
                MalBox
              </h4>
              <p className="text-[11px] text-slate-400">
                DedSec
              </p>
              <p className="text-xs sm:text-[12px] text-slate-500 leading-snug mt-1">
                AI-powered malware sandbox for safe execution, classification,
                and threat detection.
              </p>
            </div>

            {/* Second */}
            <div className="rounded-lg bg-zinc-800/30 border border-zinc-700/50 p-3">
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Second
              </p>
              <h4 className="text-sm font-medium text-white">
                Binary Betrayal
              </h4>
              <p className="text-[11px] text-slate-400">
                GrenckDevs
              </p>
              <p className="text-xs sm:text-[12px] text-slate-500 leading-snug mt-1">
                Interactive 3D game teaching ethical hacking through real-world scenarios.
              </p>
            </div>

            {/* Third */}
            <div className="rounded-lg bg-zinc-800/30 border border-zinc-700/50 p-3">
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Third
              </p>
              <h4 className="text-sm font-medium text-white">
                Sentinel
              </h4>
              <p className="text-[11px] text-slate-400">
                RecycleWin
              </p>
              <p className="text-xs sm:text-[12px] text-slate-500 leading-snug mt-1">
                Developer-first ecosystem for writing vulnerability-free,
                secure-by-default code.
              </p>
            </div>
          </div>

          {/* Venue */}
          <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-zinc-900 border border-blue-500/20 hover:border-blue-500/40 transition rounded-2xl p-6 flex flex-col justify-between min-h-[240px]">
            <div>
              <MapPin className="text-blue-400 mb-4" size={22} />
              <h4 className="text-lg font-semibold mb-2">
                DSCE
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Shavige Malleshwara Hills,<br />
                Kumaraswamy Layout, Bengaluru
              </p>
            </div>

            <button className="group inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 rounded-lg text-sm text-blue-400 hover:bg-blue-500/10 transition w-fit">
              Open Maps
              <ExternalLink
                size={14}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </div>

          {/* Gallery */}
         {/* Gallery */}
<a
  href="/gallery"
  className="group sm:col-span-2 lg:col-span-3 lg:row-span-1
             bg-zinc-900 border border-blue-500/20
             hover:border-blue-500/40
             transition rounded-2xl p-6
             flex flex-col justify-between
             min-h-[140px]
             cursor-pointer"
>
  <div className="flex items-center justify-between">
    <Camera size={24} className="text-blue-400" />

    <ArrowUpRight
      size={16}
      className="text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity"
    />
  </div>

  <div>
    <p className="text-xl font-semibold text-white">
      100+ Photos
    </p>
    <p className="text-xs text-slate-500">
      Event gallery
    </p>
  </div>
</a>


        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-blue-500/20 text-center text-slate-600 text-sm">
          Sandbox Hackathon · DSCE Bengaluru
        </footer>
      </div>
    </div>
  );
};

export default SandboxRecap;