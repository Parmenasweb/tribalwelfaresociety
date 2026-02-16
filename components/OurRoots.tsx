import React from 'react';

const OurRoots: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-10 reveal reveal-up">
        <div className="inline-block px-4 py-1 border border-stone-200 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-terracotta">
          The 1993 Genesis
        </div>
        <h2 className="serif text-5xl md:text-7xl text-[#121212] leading-[1.1]">
          Founded in Resilience. Built for Empowerment.
        </h2>
        <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
          <p>
            The Tribal Welfare Society (TWS) was born in 1993 during a period of intense social and regional conflict in North East India. Our foundation was a direct response to the massive displacement of indigenous families who lost everything.
          </p>
          <p className="italic serif text-2xl text-stone-800">
            "We didn't just want to provide relief; we wanted to provide a path back to dignity."
          </p>
          <p>
            Since then, we have evolved from a relief agency into a holistic center for legal protection, medical outreach, and vocational excellence, serving as a lifeline for those forgotten by mainstream progress.
          </p>
        </div>
        
        <div className="flex gap-12 pt-6">
          <div>
            <div className="serif text-5xl text-terracotta font-bold mb-2">30+</div>
            <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Years of Service</div>
          </div>
          <div>
            <div className="serif text-5xl text-earthy-green font-bold mb-2">12k+</div>
            <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Lives Impacted</div>
          </div>
        </div>
      </div>

      <div className="relative reveal reveal-up" style={{ transitionDelay: '0.3s' }}>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-terracotta/10 rounded-full blur-3xl"></div>
        
        <div className="relative image-mask w-full aspect-[4/5] bg-stone-200 overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
            alt="Tribal Weaver"
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        
        <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl max-w-[240px]">
          <p className="serif text-stone-900 italic text-lg mb-2">Handmade Legacy</p>
          <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Every thread tells a story of survival.</p>
        </div>
      </div>
    </div>
  );
};

export default OurRoots;