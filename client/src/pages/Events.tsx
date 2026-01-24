import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Lock, Code, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Types
interface Event {
  id: number;
  title: string;
  type: string;
  duration: string;
  mode: string;
  thumbnail: string;
  description: string;
  missionId: string;
  date: string;
  location: string;
  eligibility: string;
  icon: any;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
    glow: string;
    border: string;
    bg: string;
  };
  metadata: {
    focusAreas: string[];
  };
}

interface EventCardProps {
  event: Event;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

// Event Card Component
const EventCard = ({ event, isActive, onHover, onLeave }: EventCardProps) => {
  const navigate = useNavigate();
  

  return (
    <div
      className={`group relative transition-all duration-500 ${
        isActive ? 'lg:scale-[1.02]' : ''
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Subtle neon glow on hover */}
      <div className={`absolute -inset-0.5 ${event.color.gradient} rounded-2xl opacity-0 group-hover:opacity-25 blur-xl transition-all duration-500`}></div>
      
      <div className={`relative ${event.color.bg} backdrop-blur-xl border ${event.color.border} rounded-2xl group-hover:${event.color.border.replace('/20', '/40')} transition-all duration-500 h-full flex flex-col overflow-hidden`}>
        
        {/* YouTube-Style Thumbnail */}
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="aspect-video w-full relative"
          >
            <img
              src={event.thumbnail}
              alt={event.title}
              className="w-full h-full object-cover opacity-90"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Badge Pills on Thumbnail */}
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <span className="px-3 py-1 text-xs font-medium bg-black/60 text-white rounded-full border border-white/20 backdrop-blur-sm">
                Hackathon
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-black/60 text-white rounded-full border border-white/20 backdrop-blur-sm">
                {event.duration}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-black/60 text-white rounded-full border border-white/20 backdrop-blur-sm">
                Featured
              </span>
            </div>

            {/* Attendance Badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-full border border-white/20 backdrop-blur-sm">
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">287 Attended</span>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          {/* Title */}
          <div className="mb-4">
            <h2 className={`text-3xl md:text-4xl font-bold ${event.color.primary} mb-2 font-heading`}>
              {event.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-body">
              {event.description}
            </p>
          </div>

          {/* Terminal Card with ALL Details */}
          <div className={`bg-black/60 border ${event.color.border} rounded-lg p-4 mb-4 font-mono text-xs shadow-lg ${event.color.glow}`}>
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-2">root@aegis:~$</span>
            </div>
            
            {/* Terminal Output */}
            <div className="space-y-1.5">
              {/* Date */}
              <div className="flex items-start gap-2">
                <span className={event.color.primary}>→</span>
                <div className="flex-1">
                  <span className="text-blue-400">DATE</span>
                  <br />
                  <span className="text-green-400">{event.date}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2">
                <span className={event.color.primary}>→</span>
                <div className="flex-1">
                  <span className="text-purple-400">LOCATION</span>
                  <br />
                  <span className="text-green-400">{event.location}</span>
                </div>
              </div>

              {/* Eligibility */}
              <div className="flex items-start gap-2">
                <span className={event.color.primary}>→</span>
                <div className="flex-1">
                  <span className="text-amber-400">ELIGIBILITY</span>
                  <br />
                  <span className="text-green-400">{event.eligibility}</span>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-start gap-2">
                <span className={event.color.primary}>→</span>
                <div className="flex-1">
                  <span className={event.color.secondary}>DURATION</span>
                  <br />
                  <span className="text-green-400">{event.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas - Card Style */}
          <div className={`bg-slate-900/60 border ${event.color.border} rounded-lg p-4 mb-4 ${event.color.glow}`}>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-mono">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {event.metadata.focusAreas.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 bg-black/40 border ${event.color.border} rounded text-xs ${event.color.primary} font-mono hover:bg-black/60 transition-colors`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button - Subtle Neon */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/${event.title.toLowerCase().replace(' ', '-')}`)}
            className={`mt-auto w-full py-3.5 ${event.color.gradient} border ${event.color.border} rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-white ${event.color.glow} hover:shadow-lg`}
          >
            <span>View Details</span>
            <Code className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// Main Events Component
const EventsPage = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const eventsData: Event[] = [
    {
      id: 1,
      title: 'SANDBOX',
      type: 'CYBER SECURITY HACKATHON',
      duration: '24 hours',
      mode: 'INPERSON',
      date: '8Th March 2026',
      location: 'CY',
      eligibility: 'Students from all over the world',
      thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      description: 'The ultimate 24-hour international hackathon returns! Join brilliant minds from around the globe to build innovative solutions, compete for amazing prizes, and push the boundaries of technology.',
      missionId: 'RECURZIVE-V2',
      icon: Terminal,
      color: {
        primary: 'text-cyan-400',
        secondary: 'text-cyan-300',
        gradient: 'bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30',
        glow: 'shadow-cyan-500/20',
        border: 'border-cyan-500/20',
        bg: 'bg-slate-900/40'
      },
      metadata: {
        focusAreas: ['Web Security', 'Networking', 'System Hardening', 'Hackathon']
      }
    },
    {
      id: 2,
      title: 'Glitchcraft',
      type: 'CTF',
      duration: '12 hours',
      mode: 'Online',
      date: 'Sep 03, 2025',
      location: 'CSE, DSCE',
      eligibility: 'Students from all over the world',
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      description: 'Glitchcraft — Decode the glitch. Defend the future.',
      missionId: 'GLITCHCRAFT-001',
      icon: Lock,
      color: {
        primary: 'text-purple-400',
        secondary: 'text-purple-300',
        gradient: 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30',
        glow: 'shadow-purple-500/20',
        border: 'border-purple-500/20',
        bg: 'bg-slate-900/40'
      },
      metadata: {
        focusAreas: ['Cryptography', 'Pattern Analysis', 'Logic Puzzles', 'Reverse Thinking']
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Animated Floating Gradient Orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/3 w-72 h-72 bg-blue-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <section className="min-h-[40vh] flex flex-col items-center justify-center px-4 pt-32 md:pt-28 pb-10 md:pb-14">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold mb-6 tracking-tight font-heading text-white">
  EVENTS
</h1>

            
      
          </div>
        </section>
        
        {/* Events Grid */}
        <section className="px-4 pt-4 md:pt-8 pb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {eventsData.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isActive={activeCard === event.title.toLowerCase()}
                onHover={() => setActiveCard(event.title.toLowerCase())}
                onLeave={() => setActiveCard(null)}
              />
            ))}
          </div>
        </section>
        
        {/* Bottom Space */}
        <div className="pb-12 text-center">
          <p className="text-slate-600 text-sm font-mono">
            More missions coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;