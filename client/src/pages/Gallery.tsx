import { useState, type SetStateAction } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

const EventsGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const events = [
    {
      id: 'sandbox',
      name: 'Sandbox 2025',
      color: 'cyan',
      photos: [
         "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334565/13/part_2/img_4999.webp",
  "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334576/13/part_2/img_5036.webp",
  "https://res.cloudinary.com/dyiohvauq/image/upload/v1769334584/13/part_2/img_5041.webp",
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
      color: 'purple',
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

  const allPhotos = events.flatMap(event => 
    event.photos.map(photo => ({ ...event, photo }))
  );

  const filteredPhotos = selectedEvent === 'all' 
    ? allPhotos 
    : allPhotos.filter(item => item.id === selectedEvent);

  const openLightbox = (index: number) => {
    setLightboxImg(filteredPhotos[index].photo);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filteredPhotos.length;
    setLightboxIndex(newIndex);
    setLightboxImg(filteredPhotos[newIndex].photo);
  };

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxIndex(newIndex);
    setLightboxImg(filteredPhotos[newIndex].photo);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_0.5px,transparent_0.5px),linear-gradient(to_bottom,#ffffff08_0.5px,transparent_0.5px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            EVENT <span className="text-cyan-400">GALLERY</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Relive the moments from our incredible tech events
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedEvent('all')}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
              selectedEvent === 'all'
                ? 'bg-white text-black'
                : 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-slate-600'
            }`}
          >
            All Events
          </button>
          {events.map(event => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event.id)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                selectedEvent === event.id
                  ? `bg-${event.color}-500 text-white`
                  : 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-slate-600'
              }`}
            >
              {event.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPhotos.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all"
            >
              <img
                src={item.photo}
                alt={`${item.name} photo ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <span className={`text-xs font-mono px-2 py-1 rounded bg-${item.color}-500/20 border border-${item.color}-500/30 text-${item.color}-400`}>
                    {item.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No photos found for this event</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-all z-10"
          >
            <X size={24} />
          </button>

          {/* Action Buttons */}
          <div className="absolute top-6 left-6 flex gap-3 z-10">
            <button className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-all">
              <Download size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-all">
              <Share2 size={20} />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[85vh] flex items-center justify-center">
            <img
              src={lightboxImg}
              alt="Full size"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700">
            <span className="text-sm font-mono">
              {lightboxIndex + 1} / {filteredPhotos.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsGallery;