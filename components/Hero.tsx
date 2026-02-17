'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Heart, Shield, Users } from 'lucide-react';

// Add hero-sample.jpg (or .png) to /public to display as hero background
const HERO_IMAGE_PATH = '/hero-sample.svg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroImageLoaded, setHeroImageLoaded] = useState<boolean | null>(null);

  const impactStats = [
    { value: '30+', label: 'Years of Service', color: 'text-terracotta', icon: <Shield className="w-5 h-5" /> },
    { value: '50K+', label: 'Lives Impacted', color: 'text-earthy-green', icon: <Users className="w-5 h-5" /> },
    { value: '200+', label: 'Artisan Families', color: 'text-gold', icon: <Heart className="w-5 h-5" /> },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F0] via-white/60 to-[#F5F5F0] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950"
    >
      {/* Hero Background Image - add hero-sample.jpg to /public to use */}
      {heroImageLoaded !== false && (
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE_PATH}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-15"
            onLoad={() => setHeroImageLoaded(true)}
            onError={() => setHeroImageLoaded(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F0]/92 via-white/70 to-[#F5F5F0]/92 dark:from-stone-950/90 dark:via-stone-900/80 dark:to-stone-950" />
        </div>
      )}

      {/* Decorative Background Elements (when no hero image) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-terracotta/5 dark:bg-terracotta/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-earthy-green/5 dark:bg-earthy-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 dark:bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-20 md:py-32 text-center max-w-7xl">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-terracotta/20 via-gold/20 to-earthy-green/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-tr from-terracotta via-gold to-earthy-green rounded-full p-[2px] shadow-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-stone-900 rounded-full flex items-center justify-center">
                <span className="serif text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-terracotta via-gold to-earthy-green">
                  TWS
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-block px-4 py-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold text-terracotta shadow-sm">
            Our Mission Since 1993
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.1] tracking-tight text-stone-900 dark:text-stone-100 mb-6">
            Transforming{' '}
            <span className="block mt-2 bg-gradient-to-r from-terracotta via-gold to-earthy-green bg-clip-text text-transparent">
              Displacement into Dignity
            </span>
          </h1>
        </motion.div>
        
        {/* Vision Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-stone-600 dark:text-stone-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 md:mb-12 px-4">
            Empowering tribal communities across North East India since 1993. We restore human dignity through{' '}
            <span className="text-earthy-green dark:text-earthy-green font-medium">vocational empowerment</span>,{' '}
            <span className="text-terracotta dark:text-terracotta font-medium">legal advocacy</span>, and{' '}
            <span className="text-gold dark:text-gold font-medium">sustainable development</span>.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 max-w-3xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className={`serif text-2xl md:text-3xl lg:text-4xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 font-bold text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a 
              href="#roots"
              className="group relative overflow-hidden px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-terracotta via-gold to-earthy-green opacity-95" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
              <span className="relative z-10">Explore Our Impact</span>
            </a>
            
            <a 
              href="#support"
              className="group px-8 md:px-12 py-4 md:py-5 bg-transparent border-2 border-terracotta/50 dark:border-gold/60 text-stone-900 dark:text-stone-100 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:border-terracotta dark:hover:border-gold"
            >
              Donate
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-500 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
