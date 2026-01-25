import { useState, useMemo } from 'react';

type EventId = 'sandbox' | 'glitchcraft' | 'internal_ctf' | 'decipher';
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
    },
    {
      id: 'internal_ctf',
      name: 'Internal CTF 2025',
      photos: [
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350363/internal/part_1/0be4b591-692c-4464-b19f-3b2a241cded6.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350426/internal/part_1/118b6fab-d76e-4a7c-ac32-7a062ade8315.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350429/internal/part_1/2fea7d9b-c01f-4e38-9796-33fa86adcbb9.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350431/internal/part_1/7687d504-2a05-4545-ad4b-6445536680f7.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350433/internal/part_1/85cf7454-55e7-44ba-9b92-bbb6e57dde33.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350435/internal/part_1/9970ed98-7daf-45b2-a511-e71f7059d53c.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350438/internal/part_1/9cf5635b-36fd-4580-b70d-923e5e2f0059.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350440/internal/part_1/aec6c96a-8a61-4ca9-a118-2793709f5d4a.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350443/internal/part_1/b099af83-ed4b-4851-a498-3e1859ee5e32.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769350446/internal/part_1/c8dbbd5f-b09a-4002-910b-e70ed3755b95.webp"
      ]
    },
     {
      id: 'decipher',
      name: 'Decipher 2024',
      photos: [
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351388/decipher/part_1/449861862_1423503301697475_962577956326255330_n.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351390/decipher/part_1/450350799_291026380762216_7144603823522665318_n.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351391/decipher/part_1/450354004_997840622038225_1691714042900748798_n.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351393/decipher/part_1/450354015_900440028790383_3667514531210248596_n.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351395/decipher/part_1/450480859_376491748417569_5738038878740339533_n.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351396/decipher/part_1/450483164_1703233770420030_5538688039029738938_n.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351399/decipher/part_1/450495945_2541304839413105_1824056543811141572_n.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351400/decipher/part_1/450498320_1616932015755097_6386575195115765050_n.webp",
        "https://res.cloudinary.com/dyiohvauq/image/upload/v1769351402/decipher/part_1/450507270_502833992314711_8852561992663941288_n.webp"
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
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${selectedEvent === 'all'
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
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${selectedEvent === event.id
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
