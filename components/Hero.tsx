'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Heart, Shield, Users } from 'lucide-react';

// Uses local hero sample image placed at /public/images/hero-sample.png
const HERO_IMAGE_PATH = '/images/hero-sample.png';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const impactStats = [
    { value: '30+', label: 'Years of Service', iconColor: 'text-terracotta', icon: <Shield className="w-5 h-5" /> },
    { value: '50K+', label: 'Lives Impacted', iconColor: 'text-earthy-green', icon: <Users className="w-5 h-5" /> },
    { value: '200+', label: 'Artisan Families', iconColor: 'text-gold', icon: <Heart className="w-5 h-5" /> },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85svh] max-h-[130svh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F0] via-white/60 to-[#F5F5F0] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HERO_IMAGE_PATH}
          alt="Artisanal weave and community silhouette"
          fill
          priority
          className="object-cover opacity-85 dark:opacity-55 saturate-[1.15] contrast-[1.1]"
          sizes="100vw"
        />
        {/* Light mode overlay: slightly darker (not white-wash) to keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/10 via-stone-900/0 to-stone-900/12 dark:from-stone-950/70 dark:via-stone-900/55 dark:to-stone-950" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-terracotta/5 dark:bg-terracotta/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-earthy-green/5 dark:bg-earthy-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 dark:bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 md:py-24 text-center max-w-7xl">
        {/* Logo */}
        <br />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16 md:mb-20"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-terracotta/20 via-gold/20 to-earthy-green/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-tr from-terracotta via-gold to-earthy-green rounded-full p-[2px] shadow-lg">
              {/* <div className="w-20 h-20 md:w-24 md:h-24  flex items-center justify-center">

              </div> */}
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
          <h1 className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-stone-900 dark:text-stone-100 mb-6 drop-shadow-md dark:drop-shadow-none">
            Transforming{' '}
            <span className="block mt-2 text-stone-900 dark:text-stone-100">
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
          <p className="text-stone-800 dark:text-stone-200 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-8 md:mb-12 px-4 drop-shadow-sm dark:drop-shadow-none">
            Empowering tribal communities across North East India since 1993. We restore human dignity through vocational empowerment, legal advocacy, and sustainable development.
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
                <div className={`${stat.iconColor} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className={`serif text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-stone-900 dark:text-stone-100`}>
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
