'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// All gallery images - in production, this would come from a CMS or API
const allImages = [
  { 
    url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Traditional Loom Craft',
    category: 'Vocational'
  },
  { 
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Community Support Circle',
    category: 'Unity'
  },
  { 
    url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Relief Distribution',
    category: 'Impact'
  },
  { 
    url: 'https://images.unsplash.com/photo-1528358531023-e29881177695?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Artisanal Textile Study',
    category: 'Heritage'
  },
  { 
    url: 'https://images.unsplash.com/photo-1605000797439-75a150088f44?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Agricultural Empowerment',
    category: 'Growth'
  },
  { 
    url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Generational Skill Transfer',
    category: 'Education'
  },
  { 
    url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Handloom Weaving Workshop',
    category: 'Vocational'
  },
  { 
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Legal Rights Awareness Camp',
    category: 'Advocacy'
  },
  { 
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Community Learning Session',
    category: 'Education'
  },
  { 
    url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Traditional Craft Preservation',
    category: 'Heritage'
  },
  { 
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Women Empowerment Initiative',
    category: 'Growth'
  },
  { 
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Sustainable Livelihood Training',
    category: 'Vocational'
  },
  { 
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Youth Development Program',
    category: 'Education'
  },
  { 
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Community Health Initiative',
    category: 'Impact'
  },
  { 
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Cultural Heritage Celebration',
    category: 'Heritage'
  },
  // Additional images for full gallery
  { 
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Artisan Market Day',
    category: 'Vocational'
  },
  { 
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Community Gathering',
    category: 'Unity'
  },
  { 
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Field Training Session',
    category: 'Education'
  },
  { 
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Heritage Preservation Workshop',
    category: 'Heritage'
  },
  { 
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop', 
    caption: 'Sustainable Agriculture Program',
    category: 'Growth'
  },
];

const categories = ['All', ...Array.from(new Set(allImages.map(img => img.category)))];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    const actualIndex = allImages.findIndex(img => img === filteredImages[index]);
    setSelectedIndex(actualIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allImages.length);
    }
  }, [selectedIndex]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + allImages.length) % allImages.length);
    }
  }, [selectedIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(deltaX) < threshold) return;
    if (deltaX > 0) nextImage();
    else prevImage();
  };

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
    <div className="min-h-screen bg-[#F5F5F0] dark:bg-stone-900">
      <Header />
      {/* Page Header */}
      <div className="sticky top-24 md:top-20 z-30 bg-[#F5F5F0]/95 dark:bg-stone-900/95 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-terracotta dark:hover:text-terracotta text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Visual Chronicles</span>
            <h1 className="serif text-4xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 mb-4">
              Full Gallery
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg font-light italic">
              {allImages.length} moments capturing our mission in action
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Filter className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-terracotta via-gold to-earthy-green text-white shadow-lg'
                    : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:border-terracotta dark:hover:border-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-12 md:py-16 max-w-7xl">
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={`${img.url}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                onClick={() => openLightbox(i)}
                className="relative aspect-square overflow-hidden group rounded-xl md:rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image 
                  src={img.url} 
                  alt={img.caption}
                  fill
                  className="object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-gold text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold mb-1 block">{img.category}</span>
                  <p className="serif text-white text-sm md:text-base font-medium leading-tight">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 dark:text-stone-400 text-lg">No images found in this category.</p>
          </div>
        )}
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
              className="absolute left-3 md:left-12 p-3 md:p-4 rounded-full bg-white/10 dark:bg-stone-800/50 border border-white/20 hover:bg-white/20 transition-colors z-[110] flex items-center justify-center"
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
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative w-full h-full max-h-[70vh] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl mb-4">
                <Image 
                  src={allImages[selectedIndex].url} 
                  alt={allImages[selectedIndex].caption}
                  width={1400}
                  height={900}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  unoptimized
                />
              </div>
              
              <div className="text-center space-y-2">
                <span className="text-gold font-bold tracking-[0.5em] uppercase text-[9px] block">
                  {allImages[selectedIndex].category} — {selectedIndex + 1} / {allImages.length}
                </span>
                <h3 className="serif text-white text-xl md:text-3xl font-medium px-4">
                  {allImages[selectedIndex].caption}
                </h3>
              </div>
            </motion.div>

            <button 
              onClick={nextImage}
              className="absolute right-3 md:right-12 p-3 md:p-4 rounded-full bg-white/10 dark:bg-stone-800/50 border border-white/20 hover:bg-white/20 transition-colors z-[110] flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
