'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  color: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    value: 50000,
    suffix: '+',
    label: 'Lives Impacted',
    color: 'text-terracotta',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: 200,
    suffix: '+',
    label: 'Artisan Families',
    color: 'text-earthy-green',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    value: 150,
    suffix: '+',
    label: 'Vocational Programs',
    color: 'text-gold',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: '+',
    label: 'Legal Cases Won',
    color: 'text-stone-600 dark:text-stone-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    value: 25,
    suffix: '+',
    label: 'Communities Reached',
    color: 'text-terracotta',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Artisan Products Sold',
    color: 'text-earthy-green',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  // Use generous margin on mobile so counter triggers when section is visible
  const isInView = useInView(ref, { once: true, margin: '0px 0px -30px 0px', amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

const ImpactStats: React.FC = () => {
  return (
    <section id="impact" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#F5F5F0] to-white dark:from-stone-900 dark:to-stone-800 border-t border-stone-200/50 dark:border-stone-700/50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Impact</span>
          <h2 className="serif text-5xl md:text-8xl text-[#121212] dark:text-stone-100 mb-6">
            Transforming Lives, One Story at a Time
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-300 text-lg md:text-xl font-light">
            Three decades of dedicated service, measurable impact, and unwavering commitment to tribal communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-stone-800 rounded-3xl p-8 md:p-10 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${stat.color} mb-6 flex items-center justify-center rounded-2xl bg-stone-100 dark:bg-stone-700/50 group-hover:scale-110 transition-transform duration-500`}>
                {stat.icon}
              </div>
              
              <div className="mb-4">
                <div className={`serif text-5xl md:text-6xl font-bold ${stat.color} mb-2`}>
                  <AnimatedNumber value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-stone-900 dark:text-stone-100 font-bold text-base md:text-lg lg:text-xl">
                  {stat.label}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-700 to-transparent group-hover:via-terracotta transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
