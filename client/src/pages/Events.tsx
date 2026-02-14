import { useState } from 'react';
import { Terminal, Lock, Shield, Flag } from 'lucide-react';
import EventCard from '@/components/EventCard';
import type { Event } from '@/components/EventCard';

const EventsPage = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const eventsData: Event[] = [
    {
      id: 1,
      title: 'Glitchcraft 2.0',
      type: 'TECH FEST',
      duration: '12 hours',
      mode: 'INPERSON',
      date: '5th & 6th March, 2026',
      location: 'Dayananda Sagar College of Engineering, Bangalore',
      eligibility: 'Students from all over the world',
      thumbnail:
        'https://res.cloudinary.com/dbe8rhiyq/image/upload/v1771049745/Gc26_vcl7db.jpg',
      description: 'Glitchcraft — Decode the glitch. Defend the future.',
      missionId: 'GLITCHCRAFT-002',
      icon: Lock,
      color: {
        primary: 'text-purple-400',
        secondary: 'text-purple-300',
        gradient:
          'bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30',
        glow: 'shadow-purple-500/20',
        border: 'border-purple-500/20',
        bg: 'bg-slate-900/40'
      },
      metadata: {
        focusAreas: ['Cryptography', 'Pattern Analysis', 'Logic Puzzles', 'Reverse Thinking']
      }
    },
    {
      id: 2,
      title: 'SANDBOX V2.0',
      type: 'CYBER SECURITY HACKATHON',
      duration: '24 hours',
      mode: 'INPERSON',
      date: '7th & 8th March 2026',
      location: 'Dayananda Sagar College of Engineering, Bangalore',
      eligibility: 'Students from all over the world',
      thumbnail:
        'https://res.cloudinary.com/dbe8rhiyq/image/upload/v1771050995/Sandboxv2.0_f9wigw.jpg',
      description:
        'The ultimate 24-hour international hackathon returns! Join brilliant minds from around the globe to build innovative solutions, compete for amazing prizes, and push the boundaries of technology.',
      missionId: 'RECURZIVE-V3',
      showCTA: true,
      icon: Terminal,
      color: {
        primary: 'text-cyan-400',
        secondary: 'text-cyan-300',
        gradient:
          'bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30',
        glow: 'shadow-cyan-500/20',
        border: 'border-cyan-500/20',
        bg: 'bg-slate-900/40'
      },
      metadata: {
        focusAreas: ['Web Security', 'Networking', 'System Hardening', 'Hackathon']
      }
    },
    {
      id: 3,
      title: 'SANDBOX V1.0 ',
      type: 'CYBER SECURITY HACKATHON',
      duration: '24 hours',
      mode: 'INPERSON',
      date: '1st March 2025',
      location: 'Dayananda Sagar College of Engineering, Bangalore',
      eligibility: 'Students from all over the world',
      thumbnail:
        'https://res.cloudinary.com/dyiohvauq/image/upload/v1769298651/aegis/events/sandbox.jpg',
      description:
        'The ultimate 24-hour international hackathon returns! Join brilliant minds from around the globe to build innovative solutions, compete for amazing prizes, and push the boundaries of technology.',
      missionId: 'RECURZIVE-V2',
      showCTA: true,
      icon: Terminal,
      color: {
        primary: 'text-cyan-400',
        secondary: 'text-cyan-300',
        gradient:
          'bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30',
        glow: 'shadow-cyan-500/20',
        border: 'border-cyan-500/20',
        bg: 'bg-slate-900/40'
      },
      metadata: {
        focusAreas: ['Web Security', 'Networking', 'System Hardening', 'Hackathon']
      }
    },
    {
      id: 4,
      title: 'Glitchcraft',
      type: 'TECH FEST',
      duration: '12 hours',
      mode: 'INPERSON',
      date: '27 February, 2025',
      location: 'Dayananda Sagar College of Engineering, Bangalore',
      eligibility: 'Students from all over the world',
      thumbnail:
        'https://res.cloudinary.com/dyiohvauq/image/upload/v1769299403/aegis/events/glitchcraft.jpg',
      description: 'Glitchcraft — Decode the glitch. Defend the future.',
      missionId: 'GLITCHCRAFT-001',
      icon: Lock,
      color: {
        primary: 'text-purple-400',
        secondary: 'text-purple-300',
        gradient:
          'bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30',
        glow: 'shadow-purple-500/20',
        border: 'border-purple-500/20',
        bg: 'bg-slate-900/40'
      },
      metadata: {
        focusAreas: ['Cryptography', 'Pattern Analysis', 'Logic Puzzles', 'Reverse Thinking']
      }
    },
     {
      id: 5,
      title: 'AEGIS Internal CTF',
      type: 'CAPTURE THE FLAG',
      duration: '6 hours',
      mode: 'INPERSON',
      date: '18th September 2024',
      showCTA: false,
      location: 'Dayananda Sagar College of Engineering, Bangalore',
      eligibility: '2nd and 3rd year engineering students',
      thumbnail:
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350431/internal/part_1/7687d504-2a05-4545-ad4b-6445536680f7.webp",
      description:
        'An internal CTF competition challenging students to think critically and apply real-world cybersecurity skills. Participants tackled challenges in cryptography, web exploitation, forensics, and reverse engineering, fostering problem-solving, teamwork, and practical security awareness.',
      missionId: 'AEGIS-CTF-2024',
      icon: Shield,
      color: {
        primary: 'text-emerald-400',
        secondary: 'text-emerald-300',
        gradient:
          'bg-gradient-to-r from-emerald-600/20 to-teal-600/20 hover:from-emerald-600/30 hover:to-teal-600/30',
        glow: 'shadow-emerald-500/20',
        border: 'border-emerald-500/20',
        bg: 'bg-slate-900/40'
      },
      metadata: {
        focusAreas: ['Cryptography', 'Web Exploitation', 'Forensics', 'Reverse Engineering']
      }
    },
    {
      id: 6,
      title: 'Decipher',
      type: 'CAPTURE THE FLAG',
      duration: '8 hours',
      mode: 'INPERSON',
      date: '10th July 2024',
      showCTA: false,
      location: 'Dayananda sagar college of engineering, Bangalore',
      eligibility: 'Open to all students',
      // Using a placeholder thumbnail since one wasn't provided for this specific event card context
      thumbnail: ' https://res.cloudinary.com/dyiohvauq/image/upload/v1769352096/aegis/events/decipher.jpg', 
      description:
        'Get ready for an electrifying hour of brain-teasing fun at Decipher! Hosted by the Department of CSE (Cyber Security), this Capture The Flag (CTF) event promises to challenge your wits and keep you on the edge of your seat. In the world of cyber, the Flag is the prize!',
      missionId: 'DECIPHER-CTF-2024',
      icon: Flag,
      color: {
        primary: 'text-indigo-400',
        secondary: 'text-indigo-300',
        gradient:
          'bg-gradient-to-r from-indigo-600/20 to-violet-600/20 hover:from-indigo-600/30 hover:to-violet-600/30',
        glow: 'shadow-indigo-500/20',
        border: 'border-indigo-500/20',
        bg: 'bg-slate-900/40'
      },
      metadata: {
        focusAreas: ['CTF Challenges', 'Brain Teasers', 'Problem Solving', 'Cyber Security']
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* GRID BACKGROUND (BOTTOM LAYER) */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

      {/* GLOWING ORBS (MIDDLE LAYER) */}
      <div className="fixed z-[1] top-20 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse" />
      <div className="fixed z-[1] bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
      <div className="fixed z-[1] top-1/2 left-1/3 w-72 h-72 bg-blue-600/15 rounded-full blur-[100px] animate-pulse" />

      {/* CONTENT (TOP LAYER) */}
      <div className="relative z-10">
        {/* Header */}
        <section className="min-h-[30vh] flex flex-col items-center justify-center px-4 pt-32 pb-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              EVENTS
            </h1>
          </div>
        </section>

        {/* Events Grid */}
        <section className="px-4 pb-12 max-w-7xl mx-auto">
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

        {/* Footer */}
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
