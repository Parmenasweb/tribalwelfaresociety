
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-[#0a0a0a] border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="serif text-4xl font-bold mb-6">TWS</h2>
            <p className="text-stone-500 max-w-sm font-light leading-relaxed">
              Restoring human dignity and relief since 1993. A registered non-profit society dedicated to the holistic empowerment of tribal communities.
            </p>
          </div>
          
          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-widest text-xs mb-6">Coordinates</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-light">
              <li>Coordinating Office, New Delhi</li>
              <li>Handloom Center, North East India</li>
              <li>info@twsociety.org</li>
              <li>+91 (011) 2345 6789</li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-widest text-xs mb-6">Digital</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-light">
              <li className="hover:text-stone-300 transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-stone-300 transition-colors cursor-pointer">Twitter (X)</li>
              <li className="hover:text-stone-300 transition-colors cursor-pointer">Impact Reports</li>
              <li className="hover:text-stone-300 transition-colors cursor-pointer">Legal Docs</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-600 text-[10px] uppercase tracking-widest">
            © 2024 Tribal Welfare Society. All Rights Reserved.
          </p>
          <div className="flex gap-8">
             <span className="text-stone-600 text-[10px] uppercase tracking-widest hover:text-stone-400 cursor-pointer">Privacy</span>
             <span className="text-stone-600 text-[10px] uppercase tracking-widest hover:text-stone-400 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
