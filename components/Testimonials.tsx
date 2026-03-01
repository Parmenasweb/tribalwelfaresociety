'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  program: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sanjeev Marak',
    role: 'Local Artisan & Entrepreneur',
    location: 'Meghalaya',
    image: '',
    quote: 'The vocational training center provided by TWS gave me the modern machinery and business skills I needed to scale my handloom work. Today, I employ five other artisans from my village, turning our traditional craft into a sustainable business.',
    program: 'Vocational Empowerment',
  },
  {
    id: 2,
    name: 'Dr. Rebecca Singsit',
    role: 'Medical Volunteer',
    location: 'Dimapur, Nagaland',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop&facepad=3',
    quote: 'Working alongside Tribal Welfare Society during the recent flood relief camps was eye-opening. Their response time, organization, and genuine care for the displaced families is unmatched. They don\'t just deliver supplies; they deliver hope.',
    program: 'Relief & Rehabilitation',
  },
  {
    id: 3,
    name: 'Lily Chongloi',
    role: 'Community Advocate',
    location: 'Churachandpur, Manipur',
    image: '',
    quote: 'Before the legal literacy camps, our community had no idea how to access government schemes or protect our land rights. TWS provided us with the exact legal knowledge and representation we desperately needed to stand our ground.',
    program: 'Legal Advocacy',
  },
  {
    id: 4,
    name: 'Daniel Kipgen',
    role: 'Youth Program Graduate',
    location: 'New Delhi',
    image: 'https://images.unsplash.com/photo-1614283233556-f35b0c801efb?q=80&w=1200&auto=format&fit=crop&facepad=3',
    quote: 'I grew up in an underprivileged neighborhood with limited access to quality education. The TWS scholarship and mentorship programs completely changed my trajectory. I am now pursuing my Master\'s degree and plan to return to help my community.',
    program: 'Holistic Development',
  },
];

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

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
    if (deltaX > 0) nextTestimonial();
    else prevTestimonial();
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 lg:py-40 bg-white/70 dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-earthy-green font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Voices of Impact</span>
          <h2 className="serif text-5xl md:text-8xl text-stone-900 dark:text-stone-100 mb-6">
            Stories That Inspire Change
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-300 text-lg md:text-xl font-light">
            Real stories from real people whose lives have been transformed through our programs.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative touch-pan-y">
            {/* Mobile quick navigation (keeps next/prev visible without scrolling) */}
            <div className="md:hidden absolute inset-y-0 left-0 right-0 z-20 pointer-events-none flex items-center justify-between px-2">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto p-3 rounded-full bg-white/70 dark:bg-stone-800/70 backdrop-blur border border-stone-200/60 dark:border-stone-700/60 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-stone-900 dark:text-stone-100" />
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto p-3 rounded-full bg-white/70 dark:bg-stone-800/70 backdrop-blur border border-stone-200/60 dark:border-stone-700/60 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-stone-900 dark:text-stone-100" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-stone-200 dark:border-stone-700"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-terracotta/20 shadow-xl">
                      {testimonials[currentIndex].image ? (
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          width={160}
                          height={160}
                          sizes="(max-width: 768px) 128px, 160px"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                          <span className="serif text-5xl font-bold text-terracotta/50">
                            {getInitials(testimonials[currentIndex].name)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gold p-3 rounded-full shadow-lg">
                      <Quote className="w-6 h-6 text-stone-900" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-6">
                      <p className="serif text-xl md:text-3xl text-stone-900 dark:text-stone-100 italic leading-relaxed mb-6">
                        &ldquo;{testimonials[currentIndex].quote}&rdquo;
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 pt-6 border-t border-stone-200 dark:border-stone-700">
                      <div>
                        <h4 className="serif text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-stone-600 dark:text-stone-300 text-sm md:text-base">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-stone-500 dark:text-stone-400 text-xs md:text-sm mt-1">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                      <div className="px-4 py-2 bg-terracotta/10 dark:bg-terracotta/20 rounded-full">
                        <span className="text-terracotta dark:text-terracotta text-xs md:text-sm font-bold uppercase tracking-wider">
                          {testimonials[currentIndex].program}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors border border-stone-200 dark:border-stone-700"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-stone-900 dark:text-stone-100" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'w-8 bg-terracotta'
                      : 'w-2 bg-stone-300 dark:bg-stone-600'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors border border-stone-200 dark:border-stone-700"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-stone-900 dark:text-stone-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
