'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { 
      url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop', 
      caption: 'Traditional Loom Craft',
      category: 'Vocational'
    },
    { 
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop', 
      caption: 'Community Support Circle',
      category: 'Unity'
    },
    { 
      url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop', 
      caption: 'Relief Distribution',
      category: 'Impact'
    },
    { 
      url: 'https://images.unsplash.com/photo-1528358531023-e29881177695?q=80&w=800&auto=format&fit=crop', 
      caption: 'Artisanal Textile Study',
      category: 'Heritage'
    },
    { 
      url: 'https://images.unsplash.com/photo-1605000797439-75a150088f44?q=80&w=800&auto=format&fit=crop', 
      caption: 'Agricultural Empowerment',
      category: 'Growth'
    },
    { 
      url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop', 
      caption: 'Generational Skill Transfer',
      category: 'Education'
    },
    { 
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop', 
      caption: 'Handloom Weaving Workshop',
      category: 'Vocational'
    },
    { 
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', 
      caption: 'Legal Rights Awareness Camp',
      category: 'Advocacy'
    },
    { 
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop', 
      caption: 'Community Learning Session',
      category: 'Education'
    },
    { 
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop', 
      caption: 'Traditional Craft Preservation',
      category: 'Heritage'
    },
    { 
      url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop', 
      caption: 'Women Empowerment Initiative',
      category: 'Growth'
    },
    { 
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop', 
      caption: 'Sustainable Livelihood Training',
      category: 'Vocational'
    },
    { 
      url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop', 
      caption: 'Youth Development Program',
      category: 'Education'
    },
    { 
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop', 
      caption: 'Community Health Initiative',
      category: 'Impact'
    },
    { 
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop', 
      caption: 'Cultural Heritage Celebration',
      category: 'Heritage'
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
    <section id="gallery" className="py-24 md:py-32 bg-[#F5F5F0] dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Visual Chronicles</span>
          <h2 className="serif text-4xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 mb-4">Gallery of Impact</h2>
          <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg font-light italic">Visualizing Our Mission in Action</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              onClick={() => openLightbox(i)}
              className="relative aspect-[4/5] overflow-hidden group rounded-xl md:rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image 
                src={img.url} 
                alt={img.caption}
                fill
                className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold mb-1 block">{img.category}</span>
                <p className="serif text-white text-lg md:text-xl font-medium leading-tight">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/95 dark:bg-stone-950/95 backdrop-blur-xl px-4"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] p-3 rounded-full bg-white/10 dark:bg-stone-800/50 border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-12 p-3 md:p-4 rounded-full bg-white/10 dark:bg-stone-800/50 border border-white/20 hover:bg-white/20 transition-colors z-[110] hidden sm:flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[95vw] md:max-w-[85vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[70vh] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl mb-4">
                <Image 
                  src={images[selectedIndex].url} 
                  alt={images[selectedIndex].caption}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  unoptimized
                />
              </div>
              
              <div className="text-center space-y-2">
                <span className="text-gold font-bold tracking-[0.5em] uppercase text-[9px] block">
                  {images[selectedIndex].category} — {selectedIndex + 1} / {images.length}
                </span>
                <h3 className="serif text-white text-xl md:text-3xl font-medium px-4">
                  {images[selectedIndex].caption}
                </h3>
              </div>
            </motion.div>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-12 p-3 md:p-4 rounded-full bg-white/10 dark:bg-stone-800/50 border border-white/20 hover:bg-white/20 transition-colors z-[110] hidden sm:flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
