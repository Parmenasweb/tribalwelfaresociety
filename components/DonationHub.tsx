import React from 'react';
import { motion } from 'framer-motion';

const DonationHub: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="space-y-8">
          <div className="inline-flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] block">Patronage Hub</span>
          </div>
          <h2 className="serif text-5xl md:text-8xl text-[#121212] leading-tight font-bold tracking-tight">Fuel the Mission.</h2>
          <p className="text-stone-600 text-lg md:text-2xl leading-relaxed font-light italic border-l-2 border-stone-200 pl-6 md:pl-8">
            "Your contribution is more than a donation—it is a direct investment in human dignity."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="group p-8 md:p-10 border border-stone-200/60 rounded-[2rem] bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-700"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h4 className="text-stone-900 font-bold text-lg mb-2">Tax Benefit</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed">
                  All donations are 100% tax-exempt under Section 80(G) of the IT Act. We provide immediate digital certificates for your records.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-10 pt-12 border-t border-stone-200">
          <h4 className="serif text-3xl text-stone-900">Financial Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="group cursor-default">
              <p className="text-stone-400 uppercase text-[9px] tracking-[0.3em] font-bold mb-2 group-hover:text-terracotta transition-colors">Organization</p>
              <p className="text-stone-900 font-bold text-lg sans-alt">Tribal Welfare Society (Regd.)</p>
            </div>
            <div className="group cursor-default">
              <p className="text-stone-400 uppercase text-[9px] tracking-[0.3em] font-bold mb-2 group-hover:text-gold transition-colors">Banker</p>
              <p className="text-stone-900 font-bold text-lg sans-alt">State Bank of India</p>
            </div>
            <div className="group cursor-default">
              <p className="text-stone-400 uppercase text-[9px] tracking-[0.3em] font-bold mb-2 group-hover:text-earthy-green transition-colors">Account Number</p>
              <p className="text-stone-900 font-bold text-lg sans-alt tracking-wider">0000 1234 5678 90</p>
            </div>
            <div className="group cursor-default">
              <p className="text-stone-400 uppercase text-[9px] tracking-[0.3em] font-bold mb-2 group-hover:text-stone-600 transition-colors">IFSC Code</p>
              <p className="text-stone-900 font-bold text-lg sans-alt">SBIN0001122</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute -inset-10 bg-gradient-to-tr from-gold/10 via-terracotta/5 to-earthy-green/10 rounded-[3rem] md:rounded-[4rem] blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="relative glass-card rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
          <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white/80 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-white/50 relative overflow-hidden group/qr">
             <div className="absolute inset-0 bg-stone-50 opacity-0 group-hover/qr:opacity-10 transition-opacity"></div>
             <div className="w-48 h-48 md:w-64 md:h-64 bg-white flex items-center justify-center p-4 relative z-10">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=TWS_UPI_PORTAL_SUPPORT&bgcolor=ffffff&color=121212" 
                  alt="Patron QR Code" 
                  className="w-full h-full grayscale group-hover/qr:grayscale-0 transition-all duration-700" 
                />
             </div>
             <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-terracotta via-gold to-earthy-green"></div>
          </div>
          
          <h3 className="serif text-3xl md:text-4xl mb-4 md:mb-6 text-stone-900 font-bold">Patron Gateway</h3>
          <p className="text-stone-500 text-xs md:text-sm font-light mb-10 md:mb-12 max-w-xs leading-relaxed">
            Scan the QR code to contribute instantly or visit our regional office for cash and kind donations.
          </p>
          
          <button className="w-full py-6 md:py-8 bg-stone-900 text-white rounded-[1.5rem] md:rounded-3xl font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] shadow-2xl hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500">
            Access Impact Ledger
          </button>
          
          <div className="mt-8 md:mt-12 flex flex-col items-center gap-4">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold">Secure Settlement</span>
            <div className="flex gap-4 opacity-40">
              <div className="w-10 h-6 bg-stone-300 rounded-sm"></div>
              <div className="w-10 h-6 bg-stone-300 rounded-sm"></div>
              <div className="w-10 h-6 bg-stone-300 rounded-sm"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationHub;