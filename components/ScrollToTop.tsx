'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 transform ${
      isVisible 
        ? 'animate-fade-in translate-y-0 opacity-100 scale-100' 
        : 'translate-y-10 opacity-0 scale-75 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative flex items-center justify-center w-12 h-12 bg-[#121212] border border-stone-800 rounded-full shadow-2xl hover:border-stone-500 transition-colors duration-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-stone-400 group-hover:text-stone-100 transition-colors duration-300"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
        {/* Pulsing ring on hover */}
        <span className="absolute inset-0 rounded-full border border-stone-500/50 opacity-0 group-hover:animate-pulse-ring pointer-events-none"></span>
      </button>
    </div>
  );
};

export default ScrollToTop;