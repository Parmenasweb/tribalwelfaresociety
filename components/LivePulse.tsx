
import React from 'react';

const LivePulse: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1528358531023-e29881177695?q=80&w=2000&auto=format&fit=crop', caption: 'Handloom Training, 2024' },
    { url: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop', caption: 'Relief Camp Dispatch' },
    { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', caption: 'Community Support' },
    { url: 'https://images.unsplash.com/photo-1605000797439-75a150088f44?q=80&w=2070&auto=format&fit=crop', caption: 'Artisanal Weaving' },
    { url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop', caption: 'Legacy Education' },
    { url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=2070&auto=format&fit=crop', caption: 'Future Initiatives' },
  ];

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="serif text-5xl md:text-7xl mb-4">Groundwater Impact.</h2>
          <p className="text-stone-400 uppercase tracking-widest text-xs font-bold">Real-time pulses from our field stations</p>
        </div>
        <button className="hidden md:block text-stone-100 border-b border-stone-500 pb-1 text-sm font-bold tracking-widest hover:border-white transition-colors">
          Follow @tws_legacy
        </button>
      </div>

      <div className="columns-1 md:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="relative overflow-hidden group rounded-sm grayscale hover:grayscale-0 transition-all duration-700 bg-stone-900 border border-stone-800"
          >
            <img 
              src={img.url} 
              alt={img.caption}
              loading="lazy"
              className="w-full h-auto object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="bg-white px-3 py-1 shadow-2xl">
                <span className="serif text-black text-sm font-bold italic tracking-tight">{img.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePulse;
