'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / window.innerHeight;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxY = scrollProgress * 25;
  const parallaxScale = 1.1 + (Math.min(scrollProgress, 2) * 0.08);

  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212]"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.3, scale: parallaxScale }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
          alt="Traditional Weaving"
          className="absolute inset-0 w-full h-[140%] object-cover grayscale mix-blend-overlay"
          style={{
            transform: `translate3d(0, ${parallaxY}%, 0)`,
            top: '-20%', 
            transition: 'transform 0.15s cubic-bezier(0.1, 0, 0.2, 1)',
          }}
        />
      </div>
      
      {/* Dynamic Cursor Light */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000 hidden md:block"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(210,105,30,0.12) 0%, transparent 80%)`
        }}
      />

      <div className="relative z-20 container mx-auto px-6 py-32 text-center">
        {/* Colorful Logo Anchor */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-16"
        >
           <div className="relative group cursor-pointer">
              <div className="absolute -inset-6 bg-gradient-to-tr from-terracotta via-gold to-earthy-green rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-1000"></div>
              <div className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-tr from-terracotta via-gold to-earthy-green rounded-full p-[2.5px] shadow-2xl transition-transform duration-700 group-hover:scale-105">
                <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center border border-white/5">
                   <span className="serif text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-terracotta via-gold to-earthy-green tracking-tighter">TWS</span>
                </div>
              </div>
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden mb-8 md:mb-10"
        >
          <h1 className="serif text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-bold leading-[0.9] md:leading-[0.8] tracking-tighter text-white">
            Towards a <br /> <span className="text-gold opacity-90">Better Goal.</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="max-w-3xl mx-auto text-stone-400 text-lg md:text-3xl font-light leading-tight mb-16 md:mb-20 tracking-tight px-4">
            Empowering the displaced and underprivileged since 1993. <br className="hidden md:block"/> Restoring human dignity through craftsmanship and justice.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
            <a 
              href="#roots"
              className="w-full sm:w-auto group relative px-12 md:px-16 py-6 md:py-7 bg-transparent border border-stone-700 rounded-full transition-all duration-700 hover:border-gold"
            >
              <span className="relative z-10 text-stone-100 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.5em] group-hover:text-black transition-colors duration-500">
                Explore Impact
              </span>
              <div className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full"></div>
            </a>
            
            <a 
              href="#support"
              className="group text-terracotta text-[11px] md:text-[12px] font-bold uppercase tracking-[0.5em] flex items-center gap-4 hover:text-white transition-all duration-500"
            >
              Contribute
              <div className="flex items-center">
                <div className="w-12 h-[1px] bg-stone-700 group-hover:w-20 group-hover:bg-terracotta transition-all duration-700"></div>
                <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 transition-all duration-700">→</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <span className="text-[10px] uppercase tracking-[0.8em] text-stone-300 font-bold vertical-text">Descend</span>
        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-gold via-terracotta to-transparent"></div>
      </motion.div>
      
      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default Hero;