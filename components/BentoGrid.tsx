'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BentoGrid: React.FC = () => {
  const cards = [
    {
      title: 'Relief & Rehabilitation',
      desc: 'Immediate response to displacement. We provide medical assistance, temporary camping, and essential relief for communities affected by natural and social calamities.',
      size: 'md:col-span-2 md:row-span-1',
      accent: 'border-terracotta',
      bg: 'group-hover:bg-terracotta/5',
      slug: 'relief-rehabilitation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D2691E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      )
    },
    {
      title: 'Vocational Empowerment',
      desc: 'Revitalizing heritage. Our production centers train tribal women in traditional weaving and handloom crafts, turning ancient skills into sustainable livelihoods.',
      size: 'md:col-span-1 md:row-span-2',
      accent: 'border-earthy-green',
      bg: 'group-hover:bg-earthy-green/5',
      slug: 'vocational-empowerment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#556B2F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
      )
    },
    {
      title: 'Social & Legal Justice',
      desc: 'Protecting the vulnerable. We provide comprehensive legal education and aid, ensuring that the underprivileged are aware of and empowered by their constitutional rights.',
      size: 'md:col-span-1 md:row-span-1',
      accent: 'border-gold',
      bg: 'group-hover:bg-gold/5',
      slug: 'legal-advocacy',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/></svg>
      )
    },
    {
      title: 'Holistic Development',
      desc: 'Unlimited growth. From primary education to specialized training, we operate without boundaries to ensure the socio-economic upliftment of every life we touch.',
      size: 'md:col-span-1 md:row-span-1',
      accent: 'border-stone-400',
      bg: 'group-hover:bg-stone-100',
      slug: 'holistic-development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 md:auto-rows-[340px]"
    >
      {cards.map((card, i) => (
        <Link key={i} href={`/programs/${card.slug}`}>
          <motion.div 
            variants={itemVariants}
            className={`${card.size} bg-white/40 dark:bg-stone-800/40 border-[1.5px] border-stone-200/60 dark:border-stone-700/60 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between group cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-700 relative overflow-hidden hover:scale-[1.01]`}
          >
          <div className={`absolute inset-0 ${card.bg} transition-colors duration-700`}></div>
          
          <div className="absolute top-0 right-0 p-6 md:p-10 opacity-5 group-hover:opacity-15 group-hover:scale-150 group-hover:rotate-12 transition-all duration-1000">
            {card.icon}
          </div>
          
          <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-500">
            {card.icon}
          </div>
          
          <div className="relative z-10">
            <h3 className="serif text-3xl md:text-4xl mb-4 text-stone-900 dark:text-stone-100 leading-tight group-hover:translate-x-2 transition-transform duration-500">{card.title}</h3>
            <p className="text-stone-500 dark:text-stone-300 text-sm md:text-base font-light leading-relaxed group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors duration-500">
              {card.desc}
            </p>
          </div>
          <div className="relative z-10 mt-4 flex items-center gap-2 text-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-sm font-bold uppercase tracking-wider">Learn More</span>
            <span>→</span>
          </div>
        </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default BentoGrid;