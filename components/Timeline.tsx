'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface Milestone {
  year: string;
  title: string;
  description: string;
  caption: string;
  color: string;
}

const milestones: Milestone[] = [
  {
    year: '1993',
    title: 'The Foundation',
    description: 'Established during peak displacement periods to provide immediate shelter and legal aid to tribal communities.',
    caption: 'First Relief Operation',
    color: '#D2691E'
  },
  {
    year: '2005',
    title: 'Handloom Heritage',
    description: 'The birth of the Weaving & Production Center, creating sustainable livelihoods for displaced women.',
    caption: 'Artisan Empowerment Center',
    color: '#556B2F'
  },
  {
    year: '2015',
    title: 'Legal Advocacy',
    description: 'Launch of legal literacy camps helping tribal families reclaim their constitutional land rights.',
    caption: 'Land Rights Seminar',
    color: '#D4AF37'
  },
  {
    year: '2026',
    title: 'The Digital Future',
    description: 'Scaling our reach through a global marketplace for tribal crafts and digital vocational training.',
    caption: 'TWS Digital Hub Vision',
    color: '#121212'
  }
];

const LegacyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-12 px-6">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-stone-200 dark:bg-stone-700 md:-translate-x-1/2"></div>
      
      <motion.div 
        className="absolute left-6 md:left-1/2 top-0 w-[1.5px] bg-stone-900 dark:bg-stone-100 md:-translate-x-1/2 transition-all duration-300 ease-out z-10"
        style={{ height: lineHeight }}
      ></motion.div>
      
      <div className="space-y-32">
        {milestones.map((item, index) => (
          <motion.div 
            key={item.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-stone-800 border-2 flex items-center justify-center shadow-lg"
                style={{ borderColor: item.color }}
              >
                <span className="serif text-[10px] md:text-sm font-bold text-stone-900 dark:text-stone-100">{item.year}</span>
              </motion.div>
            </div>

            <div className={`w-full md:w-[42%] mt-16 md:mt-0 pl-16 md:pl-0 text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} group`}>
              <motion.h3 
                className="serif text-3xl md:text-5xl mb-6 text-stone-900 dark:text-stone-100 group-hover:text-terracotta transition-colors duration-500"
              >
                {item.title}
              </motion.h3>
              <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed text-base md:text-lg mb-10 max-w-lg md:ml-auto md:mr-0">
                {item.description}
              </p>
              
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-stone-800 p-1.5 md:p-2 shadow-2xl border border-stone-100 dark:border-stone-700">
                <div className="relative overflow-hidden rounded-lg aspect-video transition-transform duration-700">
                  <Image 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1488521787991-ed7bbaae773c' : index === 1 ? '1544256718-3bcf237f3974' : index === 2 ? '1589829545856-d10d557cf95f' : '1542810634-71277d95dcbb'}?q=80&w=1200&auto=format&fit=crop`} 
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="bg-white dark:bg-stone-800/95 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-100 dark:border-stone-700 shadow-xl">
                    <p className="serif text-stone-800 dark:text-stone-100 text-[10px] md:text-xs font-bold italic">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LegacyTimeline;