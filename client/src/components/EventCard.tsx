import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
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
  showCTA?: boolean;   // controls visibility
disableCTA?: boolean; // controls disabled state (optional)
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

const EventCard = ({ event, onHover, onLeave }: EventCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative h-[420px]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="
          relative bg-zinc-900 border border-zinc-800 rounded-xl
          transition-all duration-300
          h-full flex flex-col overflow-hidden
          group-hover:border-zinc-600
          group-hover:shadow-lg group-hover:shadow-black/30
        "
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden h-[180px] flex-shrink-0">
          <img
            src={event.thumbnail}
            alt={event.title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Event Type Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-semibold bg-black text-white rounded-md border border-white/30">
              {event.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-white mb-1.5 line-clamp-1">
              {event.title}
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
              {event.description}
            </p>
          </div>

          {/* Details */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-xs">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-300">{event.date}</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-300">{event.location}</span>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              navigate(`/${event.title.toLowerCase().replace(' ', '-')}`)
            }
            className="
              mt-auto w-full py-2.5
              bg-blue-600/90 text-white
              rounded-lg font-medium text-sm
              transition-all duration-200
              flex items-center justify-center gap-2
              hover:bg-blue-600
              focus:outline-none focus:ring-2 focus:ring-blue-500/40
            "
          >
            <span>Want to know more</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
export type { Event, EventCardProps };
