import { useState, useMemo } from 'react';

type EventId = 'sandbox' | 'glitchcraft';
type Filter = 'all' | EventId;

type Event = {
  id: EventId;
  name: string;
  photos: string[];
};

const optimizeCloudinary = (url: string) => {
  // Inserts f_auto,q_auto,w_auto,dpr_auto after /upload/
  return url.replace(
    '/upload/',
    '/upload/f_auto,q_auto,w_auto,dpr_auto/'
  );
};

const EventsGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState<Filter>('all');

  const events: Event[] = [
    {
      id: 'sandbox',
      name: 'Sandbox 2025',
      photos: [
        
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334592/13/part_2/img_5045.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334595/13/part_2/img_5051.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334601/13/part_2/img_5071.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334607/13/part_2/img_5074.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334612/13/part_2/img_5078.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334618/13/part_2/img_5098%281%29.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334622/13/part_2/img_5098.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334648/13/part_2/img_5101.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334674/13/part_2/img_5127.webp"
      ]
    },
    {
      id: 'glitchcraft',
      name: 'Glitchcraft 2025',
      photos: [
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334195/13/part_1/b6f701fe-c302-48ac-a0d5-2f3b68ab3e33.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334231/13/part_1/img_1232.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334294/13/part_1/img_1242.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334325/13/part_1/img_4841.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334346/13/part_1/img_4853.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334455/13/part_1/img_4874.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334502/13/part_1/img_4894.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334517/13/part_1/img_4940.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334524/13/part_1/img_4975.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334530/13/part_1/img_4988.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334541/13/part_1/img_4992.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334556/13/part_1/img_4994.webp"
      ]
    }
  ];

  const photos = useMemo(() => {
    if (selectedEvent === 'all') {
      return events.flatMap(event =>
        event.photos.map(photo => ({
          event: event.name,
          src: optimizeCloudinary(photo)
        }))
      );
    }

    const event = events.find(e => e.id === selectedEvent);
    return event
      ? event.photos.map(photo => ({
          event: event.name,
          src: optimizeCloudinary(photo)
        }))
      : [];
  }, [selectedEvent]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_0.5px,transparent_0.5px),linear-gradient(to_bottom,#ffffff08_0.5px,transparent_0.5px)] bg-[size:40px_40px] pointer-events-none" /> */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            EVENT <span className="text-cyan-400">GALLERY</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Moments captured from our flagship tech events
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedEvent('all')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              selectedEvent === 'all'
                ? 'bg-white text-black'
                : 'bg-zinc-900 border border-zinc-700 text-slate-400 hover:border-zinc-600'
            }`}
          >
            All Events
          </button>

          {events.map(event => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                selectedEvent === event.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-zinc-900 border border-zinc-700 text-slate-400 hover:border-zinc-600'
              }`}
            >
              {event.name}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <img
                src={photo.src}
                alt={photo.event}
                loading="lazy"
                decoding="async"
                fetchPriority={index < 6 ? 'high' : 'auto'}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {photos.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-500 text-lg">No photos available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsGallery;
