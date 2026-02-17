'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Roots', href: '#roots' },
    { name: 'The Legacy', href: '#legacy' },
    { name: 'Core Pillars', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Live Feed', href: '#live' },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-700/50 shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10 flex justify-between items-center max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`serif text-xl lg:text-2xl xl:text-3xl font-bold tracking-tighter cursor-pointer hover:opacity-70 transition-all shrink-0 ${
              isScrolled ? 'text-stone-900 dark:text-white' : 'text-stone-900 dark:text-white'
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Tribal Welfare Society
          </motion.div>
          
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6 2xl:space-x-8 shrink-0">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                className={`group relative text-[9px] xl:text-[10px] font-bold tracking-[0.25em] xl:tracking-[0.3em] uppercase py-2 whitespace-nowrap transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-stone-900 dark:text-white hover:text-terracotta dark:hover:text-terracotta' 
                    : 'text-stone-900 dark:text-white hover:text-terracotta dark:hover:text-terracotta'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                <span className="relative inline-flex items-center">
                  {link.name}
                </span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-terracotta via-gold to-earthy-green"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_120%,rgba(210,105,30,0.18),transparent_60%)]" />
              </motion.a>
            ))}
            
            <motion.a 
              href="#support"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden px-6 xl:px-8 py-3 rounded-full text-[9px] xl:text-[10px] font-black uppercase tracking-[0.25em] xl:tracking-[0.3em] whitespace-nowrap transition-shadow duration-300 shadow-lg hover:shadow-2xl ${
                isScrolled
                  ? 'text-white dark:text-stone-900'
                  : 'text-white dark:text-stone-900'
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-terracotta via-gold to-earthy-green opacity-95" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
              <span className="relative z-10">Donate</span>
            </motion.a>
            
            <ThemeToggle />
          </nav>

          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(true)}
              className={`flex items-center gap-2 font-bold text-[10px] uppercase tracking-[0.2em] ${isScrolled ? 'text-stone-900 dark:text-white' : 'text-stone-900 dark:text-white'}`}
            >
              Menu
              <div className="space-y-1">
                <div className={`w-6 h-[1.5px] ${isScrolled ? 'bg-stone-900 dark:bg-white' : 'bg-stone-900 dark:bg-white'}`}></div>
                <div className={`w-4 h-[1.5px] ${isScrolled ? 'bg-stone-900 dark:bg-white' : 'bg-stone-900 dark:bg-white'} ml-auto`}></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-stone-900 dark:bg-stone-950 flex flex-col p-8 md:p-12 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-16 md:mb-24">
              <div className="serif text-3xl md:text-4xl font-bold text-white tracking-tighter leading-tight">Tribal Welfare<br/>Society</div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-2"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-8 md:space-y-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setIsMenuOpen(false)}
                  className="serif text-4xl md:text-6xl text-white/60 hover:text-white transition-colors leading-none tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              variants={linkVariants}
              custom={navLinks.length}
              className="mt-auto space-y-8 md:space-y-12"
            >
              <a 
                href="#support"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-10 md:px-12 py-6 md:py-8 bg-gold text-stone-900 rounded-2xl md:rounded-3xl text-xs md:text-sm font-black uppercase tracking-[0.4em]"
              >
                Donate
              </a>
              
              <div className="grid grid-cols-2 gap-6 md:gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 font-bold">
                <div>
                  <p className="mb-2 text-stone-400 dark:text-stone-500">Coordinate</p>
                  <p className="text-white">New Delhi, India</p>
                </div>
                <div>
                  <p className="mb-2 text-stone-400 dark:text-stone-500">Impact</p>
                  <p className="text-white">30 Years Registry</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
