export default function AegisRobot({ small }: { small?: boolean }) {
  // If small, use a smaller fixed width, else standard size
  const sizeClass = small ? "w-10 h-10" : "w-[70px] h-[70px]";
  const textSize = small ? "text-[0.6rem] px-2 py-0.5 mb-0.5" : "text-xs px-3 py-1 mb-1";

  return (
    <div className="relative flex flex-col items-center z-20">
      
      {/* SPEECH BUBBLE */}
      <div
        className={`font-mono tracking-widest
                    bg-black/90 border border-cyan-400/40
                    text-cyan-300 rounded-full whitespace-nowrap
                    shadow-[0_0_10px_rgba(34,211,238,0.2)]
                    ${textSize}`}
      >
        {small ? "^_^" : "HI!"}
      </div>

      {/* ROBOT SVG */}
      <svg
        viewBox="0 0 120 120"
        className={`animate-bounce-soft drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] ${sizeClass}`}
      >
        {/* Antenna */}
        <line x1="60" y1="14" x2="60" y2="32" stroke="#22d3ee" strokeWidth="3" />
        <circle cx="60" cy="12" r="5" fill="#22d3ee" className="animate-pulse" />

        {/* Head/Body */}
        <rect
          x="28"
          y="32"
          rx="18"
          ry="18"
          width="64"
          height="52"
          fill="#020617"
          stroke="#22d3ee"
          strokeWidth="3"
        />

        {/* Eyes */}
        <circle cx="48" cy="58" r="6" fill="#67e8f9">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="72" cy="58" r="6" fill="#67e8f9">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Smile */}
        <path
          d="M48 72 Q60 82 72 72"
          stroke="#67e8f9"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}