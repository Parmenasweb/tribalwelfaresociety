'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Filter, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryImages } from '@/constants/galleryImages';

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Pagination State
  const [page, setPage] = useState(1);
  const imagesPerPage = 24;

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, page * imagesPerPage);
  const hasMore = displayedImages.length < filteredImages.length;

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  // Reset pagination when category changes
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    // We pass the index relative to displayedImages
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
              {filteredImages.length} moments capturing our mission in action
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            <Filter className="w-4 h-4 text-stone-500 dark:text-stone-400 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${selectedCategory === cat
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
            {displayedImages.map((img, i) => (
              <motion.div
                key={`${img.url}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: (i % imagesPerPage) * 0.02 }}
                onClick={() => openLightbox(i)}
                className="relative aspect-square overflow-hidden group rounded-xl md:rounded-2xl bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  loading="lazy"
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

        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <button
              onClick={loadMore}
              className="group inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:scale-105 shadow-md bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700 hover:border-terracotta"
            >
              <span>Load More Images</span>
              <Loader2 className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:animate-spin transition-transform" />
            </button>
          </motion.div>
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
                  width={1400}
                  height={900}
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
      <Footer />
    </div>
  );
}
