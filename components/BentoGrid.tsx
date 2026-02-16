import React, { useEffect, useRef } from 'react';

const BentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const cards = containerRef.current?.querySelectorAll('.reveal');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: 'Relief & Rehab',
      desc: 'Rapid response support for tribal families displaced by conflict and natural disasters.',
      size: 'md:col-span-2 md:row-span-1',
      accent: 'border-terracotta',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D2691E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      )
    },
    {
      title: 'Artisanal Skills',
      desc: 'Preserving traditional handloom weaving while integrating modern garment design.',
      size: 'md:col-span-1 md:row-span-2',
      accent: 'border-earthy-green',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#556B2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
      )
    },
    {
      title: 'Social Justice',
      desc: 'Comprehensive legal literacy and constitutional rights awareness programs.',
      size: 'md:col-span-1 md:row-span-1',
      accent: 'border-gold',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/></svg>
      )
    },
    {
      title: 'Medical Hub',
      desc: 'Satellite medical camps and emergency transport for remote forest regions.',
      size: 'md:col-span-1 md:row-span-1',
      accent: 'border-stone-400',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
      )
    }
  ];

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[340px]">
      {cards.map((card, i) => (
        <div 
          key={i}
          className={`${card.size} bg-white border-2 border-transparent hover:${card.accent} rounded-3xl p-12 flex flex-col justify-between group cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.08)] transition-all duration-700 reveal reveal-up relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700">
            {card.icon}
          </div>
          
          <div className="relative z-10 w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            {card.icon}
          </div>
          <div className="relative z-10">
            <h3 className="serif text-3xl mb-4 text-stone-900 group-hover:translate-x-2 transition-transform duration-500">{card.title}</h3>
            <p className="text-stone-500 text-sm font-light leading-relaxed group-hover:text-stone-700 transition-colors duration-500">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;