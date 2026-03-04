'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const BentoGrid: React.FC = () => {
  const cards = [
    {
      title: 'Relief & Rehabilitation',
      desc: 'When disaster strikes, TWS mobilizes within 48 hours. We deliver emergency food kits, temporary shelter, medical support, and psychosocial aid to displaced tribal families across Northeast India — ensuring the most vulnerable are never left behind.',
      accent: 'border-terracotta',
      bg: 'hover:bg-terracotta/5',
      slug: 'relief-rehabilitation',
      image: '/images/gallery/impact/impact-1.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D2691E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
      )
    },
    {
      title: 'Vocational Empowerment',
      desc: 'Our Weaving & Production Centers transform generations of tribal craft knowledge into sustainable livelihoods. We train artisan families in handloom techniques, business acumen, and digital commerce — turning heritage into income.',
      accent: 'border-earthy-green',
      bg: 'hover:bg-earthy-green/5',
      slug: 'vocational-empowerment',
      image: '/images/gallery/vocation/vocation-1.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#556B2F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
      )
    },
    {
      title: 'Social & Legal Justice',
      desc: 'Tribal communities deserve to know and exercise their constitutional rights. We conduct legal literacy camps, provide pro-bono legal representation, and have helped hundreds of families reclaim their land, citizenship, and government entitlements.',
      accent: 'border-gold',
      bg: 'hover:bg-gold/5',
      slug: 'legal-advocacy',
      image: '/images/gallery/advocacy/advocacy-1.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /></svg>
      )
    },
    {
      title: 'Holistic Development',
      desc: 'Education is the most powerful equalizer. Through scholarships, primary schooling support, digital literacy initiatives, and mentorship networks, we ensure every tribal child has an unobstructed path to a brighter future.',
      accent: 'border-stone-300 dark:border-stone-600',
      bg: 'hover:bg-stone-50 dark:hover:bg-stone-800/50',
      slug: 'holistic-development',
      image: '/images/gallery/education/education-0.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" /></svg>
      )
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
    >
      {cards.map((card, i) => (
        <Link key={i} href={`/programs/${card.slug}`}>
          <motion.div
            variants={itemVariants}
            className={`flex flex-col bg-white/50 dark:bg-stone-800/40 border-[1.5px] ${card.accent} rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 relative ${card.bg} h-full`}
          >
            {/* Card Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-stone-900/80 to-transparent" />
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="w-12 h-12 bg-white dark:bg-stone-700 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-500">
                {card.icon}
              </div>
              <h3 className="serif text-2xl md:text-3xl mb-3 text-stone-900 dark:text-stone-100 leading-tight group-hover:translate-x-1 transition-transform duration-500">
                {card.title}
              </h3>
              <p className="text-stone-500 dark:text-stone-300 text-sm font-light leading-relaxed flex-1">
                {card.desc}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-bold uppercase tracking-wider">
                Learn More <span>→</span>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default BentoGrid;