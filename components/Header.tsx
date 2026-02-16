import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-stone-200/50' 
            : 'py-10 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`serif text-3xl font-bold tracking-tighter cursor-pointer hover:opacity-70 transition-all ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            TWS
          </motion.div>
          
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`relative text-[10px] font-bold tracking-[0.3em] uppercase group py-1 overflow-hidden transition-colors duration-500 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">
                  {link.name}
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-[120%] group-hover:translate-y-0 text-terracotta">
                  {link.name}
                </span>
                <span className="nav-link-underline"></span>
              </a>
            ))}
            
            <a 
              href="#support"
              className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl ${
                isScrolled 
                  ? 'bg-stone-900 text-white hover:bg-stone-800' 
                  : 'bg-white text-stone-900 hover:scale-105'
              }`}
            >
              Patron Hub
            </a>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`lg:hidden flex items-center gap-2 font-bold text-[10px] uppercase tracking-[0.2em] ${isScrolled ? 'text-stone-900' : 'text-white'}`}
          >
            Menu
            <div className="space-y-1">
              <div className={`w-6 h-[1.5px] ${isScrolled ? 'bg-stone-900' : 'bg-white'}`}></div>
              <div className={`w-4 h-[1.5px] ${isScrolled ? 'bg-stone-900' : 'bg-white'} ml-auto`}></div>
            </div>
          </button>
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
            className="fixed inset-0 z-[100] bg-[#121212] flex flex-col p-12 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-24">
              <div className="serif text-4xl font-bold text-white tracking-tighter">TWS</div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setIsMenuOpen(false)}
                  className="serif text-5xl md:text-7xl text-white/40 hover:text-white transition-colors leading-none tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              variants={linkVariants}
              custom={navLinks.length}
              className="mt-auto space-y-12"
            >
              <a 
                href="#support"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-12 py-8 bg-gold text-stone-900 rounded-3xl text-xs font-black uppercase tracking-[0.4em]"
              >
                Access Patron Hub
              </a>
              
              <div className="grid grid-cols-2 gap-8 text-[9px] uppercase tracking-[0.3em] text-stone-500 font-bold">
                <div>
                  <p className="mb-2 text-stone-600">Coordinate</p>
                  <p>New Delhi, India</p>
                </div>
                <div>
                  <p className="mb-2 text-stone-600">Impact</p>
                  <p>30 Years Registry</p>
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