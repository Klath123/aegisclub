// import React, { useState, useEffect } from 'react';
import { Terminal, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


// interface GlitchTextProps {
//   text: string;
//   className?: string;
// }

// const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
//   const [displayText, setDisplayText] = useState<string>(text);
  
//   useEffect(() => {
//     const glitchInterval = setInterval(() => {
//       const chars = '!<>-_\\/[]{}—=+*^?#________';
//       let iterations = 0;
      
//       const glitchTimer = setInterval(() => {
//         setDisplayText(
//           text.split('').map((_char, index) => {
//             if (index < iterations) return text[index];
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join('')
//         );
        
//         iterations += 1/2;
        
//         if (iterations >= text.length) {
//           clearInterval(glitchTimer);
//           setDisplayText(text);
//         }
//       }, 30);
//     }, 5000);
    
//     return () => clearInterval(glitchInterval);
//   }, [text]);
  
//   return <span className={className}>{displayText}</span>;
// };

const Events: React.FC = () => {
  const navigate = useNavigate();
  // const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-24">
      
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,150,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,150,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-400">
            EVENTS
          </h1>
          <p className="mt-4 text-sm md:text-base text-cyan-300/70 font-mono">
            Offensive • Defensive • Cryptographic
          </p>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* SANDBOX */}
          <div
            // onMouseEnter={() => setActiveCard('sandbox')}
            // onMouseLeave={() => setActiveCard(null)}
            className="relative border border-cyan-500/20 rounded-xl bg-black/70 backdrop-blur-sm
                       transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1"
          >
            <div className="p-6 flex flex-col h-full">

              <div className="flex items-center gap-3 mb-3">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-cyan-400">
                  SANDBOX
                </h2>
              </div>

              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                24-hour national-level cybersecurity hackathon focused on real-world
                attack and defense scenarios.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Web', 'Networking', 'Hardening'].map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono
                               border border-cyan-500/20 text-cyan-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate('/events/sandbox')}
                className="mt-auto w-full py-3 rounded-lg
                           bg-cyan-600/90 hover:bg-cyan-500
                           transition-colors font-semibold text-black"
              >
                ENTER SANDBOX
              </button>
            </div>
          </div>

          {/* GLITCHCRAFT */}
          <div
            // onMouseEnter={() => setActiveCard('glitchcraft')}
            // onMouseLeave={() => setActiveCard(null)}
            className="relative border border-purple-500/20 rounded-xl bg-black/70 backdrop-blur-sm
                       transition-all duration-300 hover:border-purple-400/50 hover:-translate-y-1"
          >
            <div className="p-6 flex flex-col h-full">

              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-purple-400">
                  GLITCHCRAFT
                </h2>
              </div>

              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Decode patterns, break ciphers, and solve logic-driven security challenges.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Crypto', 'Logic', 'Reverse'].map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono
                               border border-purple-500/20 text-purple-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate('/events/glitchcraft')}
                className="mt-auto w-full py-3 rounded-lg
                           bg-purple-600/90 hover:bg-purple-500
                           transition-colors font-semibold text-black"
              >
                BEGIN DECIPHER
              </button>
            </div>
          </div>

        </section>

        <div className="h-24" />
      </div>
    </div>
  );
};
export default Events;