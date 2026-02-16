import React from 'react';

const LivePulse: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1528358531023-e29881177695?q=80&w=2000&auto=format&fit=crop', caption: 'Handloom Workshop, 2024' },
    { url: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop', caption: 'Relief Distribution Center' },
    { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', caption: 'Community Legal Camp' },
    { url: 'https://images.unsplash.com/photo-1605000797439-75a150088f44?q=80&w=2070&auto=format&fit=crop', caption: 'Traditional Textile Study' },
    { url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop', caption: 'Legacy Education Group' },
    { url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=2070&auto=format&fit=crop', caption: 'Future Center Blueprint' },
  ];

  return (
    <div className="space-y-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <span className="text-earthy-green font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Groundwater Impact</span>
          <h2 className="serif text-5xl md:text-8xl text-stone-900 leading-[0.9]">Live Records.</h2>
        </div>
        <button className="text-stone-900 border-b-2 border-stone-200 pb-2 text-xs font-bold tracking-[0.3em] uppercase hover:border-terracotta transition-colors">
          View Full Archive @tws_legacy
        </button>
      </div>

      <div className="columns-1 md:columns-3 gap-8 space-y-8">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="relative overflow-hidden group rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-700 reveal reveal-up"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={img.url} 
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              />
            </div>
            <div className="p-6">
              <p className="serif text-stone-900 italic text-lg">{img.caption}</p>
              <div className="mt-2 w-8 h-[1px] bg-stone-200 group-hover:w-full group-hover:bg-terracotta transition-all duration-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePulse;