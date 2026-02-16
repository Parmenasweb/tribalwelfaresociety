
import React, { useEffect, useRef } from 'react';

const BentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we can stop observing this specific element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cards = containerRef.current?.querySelectorAll('.reveal');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: 'Relief & Rehabilitation',
      desc: 'Providing immediate support for those displaced by natural and social conflict.',
      size: 'md:col-span-2 md:row-span-1',
      bg: 'bg-[#1a1a17]', // Earthy black
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      )
    },
    {
      title: 'Vocational Excellence',
      desc: 'Training in traditional weaving and modern crafts to foster self-reliance.',
      size: 'md:col-span-1 md:row-span-2',
      bg: 'bg-[#242421]', // Stone brown
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
      )
    },
    {
      title: 'Legal & Social Justice',
      desc: 'Educating the underprivileged on their constitutional rights and legal protections.',
      size: 'md:col-span-1 md:row-span-1',
      bg: 'bg-[#151515]',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/></svg>
      )
    },
    {
      title: 'Medical Outreach',
      desc: 'Facilitating medical treatment and camping space for those in remote regions.',
      size: 'md:col-span-1 md:row-span-1',
      bg: 'bg-[#1e1e1e]',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
      )
    }
  ];

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      {cards.map((card, i) => (
        <div 
          key={i}
          style={{ transitionDelay: `${i * 100}ms` }}
          className={`${card.size} ${card.bg} border border-stone-800/80 rounded-2xl p-10 flex flex-col justify-between group cursor-pointer hover:border-stone-500/50 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 relative overflow-hidden reveal reveal-up`}
        >
          {/* Lazy Loaded Background Image */}
          <img 
            src={card.image}
            alt={card.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none"
          />
          
          {/* Subtle hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="text-stone-500 group-hover:text-stone-100 transition-colors duration-500 relative z-10">
            {card.icon}
          </div>
          <div className="relative z-10">
            <h3 className="serif text-2xl mb-3 group-hover:translate-x-2 transition-transform duration-500 text-stone-200">{card.title}</h3>
            <p className="text-stone-500 text-sm font-light leading-relaxed group-hover:text-stone-300 transition-colors duration-500">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
