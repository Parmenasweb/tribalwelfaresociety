'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { galleryImages } from '../constants/galleryImages';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [images, setImages] = useState(galleryImages);
  const [page, setPage] = useState(1);
  const imagesPerPage = 15;

  useEffect(() => {
    // Shuffle images on client side only to avoid hydration mismatch
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
    setImages(shuffled);
  }, []);

  const displayedImages = images.slice(0, page * imagesPerPage);
  const hasMore = displayedImages.length < images.length;

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

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
      setSelectedIndex((selectedIndex + 1) % displayedImages.length);
    }
  }, [selectedIndex, displayedImages.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + displayedImages.length) % displayedImages.length);
    }
  }, [selectedIndex, displayedImages.length]);

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
    <section id="gallery" className="py-24 md:py-32 bg-[#F5F5F0] dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {displayedImages.map((img, i) => (
            <motion.div
              key={`${img.url}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '50px' }}
              transition={{ delay: (i % imagesPerPage) * 0.05, duration: 0.5 }}
              onClick={() => openLightbox(i)}
              className="relative aspect-square overflow-hidden group rounded-xl md:rounded-2xl bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={img.url}
                alt={img.caption}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-all duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold mb-1 block">{img.category}</span>
                <p className="serif text-white text-lg md:text-xl font-medium leading-tight">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 flex flex-col items-center gap-6"
        >
          {hasMore && (
            <button
              onClick={loadMore}
              className="group inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:scale-105 shadow-md bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700"
            >
              <span>Load More</span>
              <Loader2 className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:animate-spin transition-transform" />
            </button>
          )}

          <a
            href="/gallery"
            className="group inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl text-white relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-terracotta via-gold to-earthy-green opacity-95" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
            <span className="relative z-10">View Full Organized Gallery</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
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
              className="relative max-w-[95vw] md:max-w-[85vw] max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative w-full h-[65vh] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl mb-4 flex items-center justify-center">
                <Image
                  src={displayedImages[selectedIndex].url}
                  alt={displayedImages[selectedIndex].caption}
                  width={1200}
                  height={800}
                  className="w-auto h-full max-h-[65vh] object-contain"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
              </div>

              <div className="text-center space-y-2 mt-2">
                <span className="text-gold font-bold tracking-[0.5em] uppercase text-[9px] block">
                  {displayedImages[selectedIndex].category} — {selectedIndex + 1} / {displayedImages.length}
                </span>
                <h3 className="serif text-white text-xl md:text-3xl font-medium px-4">
                  {displayedImages[selectedIndex].caption}
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
    </section>
  );
};

export default Gallery;
