'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { 
      url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop', 
      caption: 'Traditional Loom Craft',
      category: 'Vocational'
    },
    { 
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', 
      caption: 'Community Support Circle',
      category: 'Unity'
    },
    { 
      url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop', 
      caption: 'Relief Distribution',
      category: 'Impact'
    },
    { 
      url: 'https://images.unsplash.com/photo-1528358531023-e29881177695?q=80&w=2000&auto=format&fit=crop', 
      caption: 'Artisanal Textile Study',
      category: 'Heritage'
    },
    { 
      url: 'https://images.unsplash.com/photo-1605000797439-75a150088f44?q=80&w=2070&auto=format&fit=crop', 
      caption: 'Agricultural Empowerment',
      category: 'Growth'
    },
    { 
      url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop', 
      caption: 'Generational Skill Transfer',
      category: 'Education'
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F5F5F0] border-t border-stone-200/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Visual Chronicles</span>
          <h2 className="serif text-5xl md:text-8xl text-stone-900 mb-6">Gallery of Impact</h2>
          <p className="text-stone-500 text-lg md:text-xl font-light italic">Visualizing Our Mission in Action</p>
        </motion.div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-10 space-y-6 md:space-y-10"
        >
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden group rounded-[1.5rem] md:rounded-[2rem] bg-white border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-1000 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-auto">
                <Image 
                  src={img.url} 
                  alt={img.caption}
                  fill
                  className="object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-gold text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold mb-2 block">{img.category}</span>
                <p className="serif text-white text-xl md:text-2xl italic leading-tight">{img.caption}</p>
              </div>
              
              <div className="absolute top-6 right-6 w-8 h-8 md:w-10 md:h-10 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <button className="group relative px-10 md:px-12 py-5 border border-stone-200 rounded-full overflow-hidden transition-all duration-500">
            <span className="relative z-10 text-stone-900 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500">View Expanded Archive</span>
            <div className="absolute inset-0 bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]/95 backdrop-blur-2xl px-4"
            onClick={closeLightbox}
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[110]">
              <button 
                onClick={closeLightbox}
                className="p-3 md:p-4 rounded-full border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-12 p-3 md:p-6 rounded-full border border-white/5 hover:border-gold/30 text-white/20 hover:text-gold transition-all duration-500 z-[110] group hidden sm:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-[95vw] md:max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] w-full" style={{ maxHeight: '70vh' }}>
                 <Image 
                  src={images[selectedIndex].url} 
                  alt={images[selectedIndex].caption}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[65vh] md:max-h-[70vh] object-contain transition-transform duration-1000 ease-out md:group-hover:scale-[1.03] cursor-zoom-in"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  unoptimized
                />
              </div>
              
              <div className="mt-8 md:mt-10 text-center space-y-3 md:space-y-4">
                <span className="text-gold font-bold tracking-[0.5em] uppercase text-[8px] md:text-[9px] block">
                  {images[selectedIndex].category} — {selectedIndex + 1} / {images.length}
                </span>
                <h3 className="serif text-white text-2xl md:text-5xl italic opacity-90 px-4">
                  {images[selectedIndex].caption}
                </h3>
              </div>
            </motion.div>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-12 p-3 md:p-6 rounded-full border border-white/5 hover:border-gold/30 text-white/20 hover:text-gold transition-all duration-500 z-[110] group hidden sm:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;