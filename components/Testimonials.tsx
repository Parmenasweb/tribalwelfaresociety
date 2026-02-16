'use client';

import React, { useState } from 'react';
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
    name: 'Priya Meena',
    role: 'Artisan & Weaver',
    location: 'Assam',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop',
    quote: 'Tribal Welfare Society gave me the skills to support my family. Today, I run my own weaving business and train other women. This organization didn\'t just help me—it transformed my entire community.',
    program: 'Vocational Empowerment',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Community Leader',
    location: 'Manipur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    quote: 'Through their legal advocacy programs, we reclaimed our ancestral lands. The legal literacy camps empowered our community to understand and fight for our constitutional rights.',
    program: 'Legal Advocacy',
  },
  {
    id: 3,
    name: 'Sunita Devi',
    role: 'Beneficiary & Volunteer',
    location: 'Nagaland',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    quote: 'When floods displaced our village, Tribal Welfare Society was the first to arrive. They provided immediate relief and then helped us rebuild sustainably. Their commitment goes beyond temporary aid.',
    program: 'Relief & Rehabilitation',
  },
  {
    id: 4,
    name: 'Amit Singh',
    role: 'Youth Coordinator',
    location: 'Mizoram',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    quote: 'The education programs opened doors I never knew existed. Now I help coordinate youth programs, ensuring the next generation has even better opportunities than I did.',
    program: 'Holistic Development',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-earthy-green font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Voices of Impact</span>
          <h2 className="serif text-5xl md:text-8xl text-[#121212] dark:text-stone-100 mb-6">
            Stories That Inspire Change
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400 text-lg md:text-xl font-light">
            Real stories from real people whose lives have been transformed through our programs.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-stone-200 dark:border-stone-700"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-terracotta/20 shadow-xl">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gold p-3 rounded-full shadow-lg">
                      <Quote className="w-6 h-6 text-stone-900" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-6">
                      <p className="serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 italic leading-relaxed mb-6">
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
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
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
