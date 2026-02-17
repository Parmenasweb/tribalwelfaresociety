import React from 'react';
import Image from 'next/image';

const OurRoots: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-10 reveal reveal-up">
        <div className="inline-block px-4 py-1 border border-stone-200 dark:border-stone-700 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-terracotta">
          Our Narrative
        </div>
        <h2 className="serif text-5xl md:text-7xl text-[#121212] dark:text-stone-100 leading-[1.1]">
          A Legacy of Resilience Since 1993.
        </h2>
        <div className="space-y-6 text-stone-600 dark:text-stone-300 text-lg leading-relaxed font-light">
          <p>
            Founded in the heart of a crisis, the Tribal Welfare Society emerged from a singular necessity: to serve those forgotten by the tides of conflict. For over three decades, we have stood at the frontlines of relief for the displaced, the destitute, and the underprivileged across the North East and beyond.
          </p>
          <p className="italic serif text-2xl text-stone-800 dark:text-stone-200 leading-snug">
            &ldquo;What began as a relief effort for those fleeing social and natural calamities has evolved into a 30-year mission of restoration.&rdquo;
          </p>
          <p>
            We don&apos;t just offer temporary aid; we build permanent foundations through education, vocational empowerment, and legal advocacy. At Tribal Welfare Society, our goal is simple yet profound: <span className="text-stone-900 dark:text-stone-100 font-medium">to transform displacement into dignity.</span>
          </p>
        </div>
        
        <div className="flex gap-12 pt-6 border-t border-stone-100 dark:border-stone-800">
          <div>
            <div className="serif text-5xl text-terracotta font-bold mb-2">30+</div>
            <div className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 font-bold">Years of Resilience</div>
          </div>
          <div>
            <div className="serif text-5xl text-earthy-green font-bold mb-2">1993</div>
            <div className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 font-bold">Foundation Year</div>
          </div>
        </div>
      </div>

      <div className="relative reveal reveal-up" style={{ transitionDelay: '0.3s' }}>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-terracotta/10 rounded-full blur-3xl"></div>
        
        <div className="relative image-mask w-full aspect-[4/5] bg-stone-200 dark:bg-stone-800 overflow-hidden shadow-2xl border-8 border-white dark:border-stone-700">
          <Image 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
            alt="Tribal Weaver working on a legacy piece"
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-800 p-8 shadow-xl max-w-[260px] border border-stone-100 dark:border-stone-700">
          <p className="serif text-stone-900 dark:text-stone-100 italic text-xl mb-2">Dignity in Every Thread</p>
          <p className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-300 font-bold leading-relaxed">Preserving artisanal heritage for the next generation.</p>
        </div>
      </div>
    </div>
  );
};

export default OurRoots;
