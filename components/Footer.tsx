import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 bg-[#121212] border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="serif text-5xl font-bold text-white flex items-center gap-4">
               <div className="w-12 h-12 bg-gradient-to-tr from-[#D2691E] to-[#D4AF37] rounded-full flex items-center justify-center">
                  <span className="text-sm">T</span>
               </div>
               TWS
            </div>
            <p className="text-stone-500 max-w-sm font-light leading-relaxed text-lg">
              Empowering communities since 1993. A registered non-profit society dedicated to the holistic survival of tribal heritage and dignity.
            </p>
            <div className="flex gap-6">
               <div className="w-10 h-10 border border-stone-800 rounded-full flex items-center justify-center hover:border-terracotta transition-colors cursor-pointer group">
                  <div className="w-2 h-2 bg-stone-600 group-hover:bg-terracotta transition-colors"></div>
               </div>
               <div className="w-10 h-10 border border-stone-800 rounded-full flex items-center justify-center hover:border-gold transition-colors cursor-pointer group">
                  <div className="w-2 h-2 bg-stone-600 group-hover:bg-gold transition-colors"></div>
               </div>
               <div className="w-10 h-10 border border-stone-800 rounded-full flex items-center justify-center hover:border-earthy-green transition-colors cursor-pointer group">
                  <div className="w-2 h-2 bg-stone-600 group-hover:bg-earthy-green transition-colors"></div>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Coordinates</h4>
            <ul className="space-y-6 text-stone-500 text-sm font-light">
              <li className="flex flex-col gap-1">
                 <span className="text-stone-600 font-bold">Delhi Office</span>
                 Coordinating Center, New Delhi
              </li>
              <li className="flex flex-col gap-1">
                 <span className="text-stone-600 font-bold">Field HQ</span>
                 Handloom Center, NE India
              </li>
              <li className="flex flex-col gap-1">
                 <span className="text-stone-600 font-bold">Digital</span>
                 info@twsociety.org
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Impact</h4>
            <ul className="space-y-6 text-stone-500 text-sm font-light">
              <li className="hover:text-stone-100 transition-colors cursor-pointer">Annual Reports 2024</li>
              <li className="hover:text-stone-100 transition-colors cursor-pointer">80(G) Certification</li>
              <li className="hover:text-stone-100 transition-colors cursor-pointer">Artisan Registry</li>
              <li className="hover:text-stone-100 transition-colors cursor-pointer">Legal Successes</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-stone-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-stone-700 text-[9px] uppercase tracking-[0.4em] font-medium">
            © 2024 Tribal Welfare Society. Editorial Digital Portal.
          </p>
          <div className="flex gap-10">
             <span className="text-stone-700 text-[9px] uppercase tracking-[0.4em] hover:text-stone-300 cursor-pointer transition-colors">Privacy</span>
             <span className="text-stone-700 text-[9px] uppercase tracking-[0.4em] hover:text-stone-300 cursor-pointer transition-colors">Security</span>
             <span className="text-stone-700 text-[9px] uppercase tracking-[0.4em] hover:text-stone-300 cursor-pointer transition-colors">Tax Docs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;