import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'Live Feed', href: '#live' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-stone-200/50' 
          : 'py-10 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`serif text-3xl font-bold tracking-tighter cursor-pointer hover:opacity-70 transition-all ${
          isScrolled ? 'text-stone-900' : 'text-white'
        }`}>
          TWS
        </div>
        
        <nav className="hidden md:flex items-center space-x-12">
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

        <div className={`md:hidden ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;