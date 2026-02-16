import React from 'react';

const ContributionHub: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-12 reveal reveal-up">
        <div className="space-y-6">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] block">Become a Patron</span>
          <h2 className="serif text-5xl md:text-7xl text-[#121212] leading-tight">Empowerment Starts With You.</h2>
          <p className="text-stone-600 text-xl leading-relaxed font-light italic">
            "Your patronage is not just a donation; it is a declaration of human solidarity."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 border border-stone-200 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
               <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <h4 className="text-stone-900 font-bold mb-2">Section 80(G)</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">
              Fully tax-exempt under the Income Tax Act. Receipts are issued digitally upon payment.
            </p>
          </div>
          <div className="p-8 border border-stone-200 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center mb-4">
               <div className="w-3 h-3 rounded-full bg-stone-900"></div>
            </div>
            <h4 className="text-stone-900 font-bold mb-2">Direct Source</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">
              33 years of transparency. 100% of your funds go directly to relief camps and weaving centers.
            </p>
          </div>
        </div>

        <div className="space-y-8 pt-8 border-t border-stone-200">
          <h4 className="serif text-2xl text-stone-900">Transfer Coordinates</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
            <div>
              <p className="text-stone-400 uppercase text-[9px] tracking-[0.2em] font-bold mb-2">Account Name</p>
              <p className="text-stone-900 font-semibold sans-alt">Tribal Welfare Society</p>
            </div>
            <div>
              <p className="text-stone-400 uppercase text-[9px] tracking-[0.2em] font-bold mb-2">A/C Number</p>
              <p className="text-stone-900 font-semibold sans-alt">0000 1234 5678 90</p>
            </div>
            <div>
              <p className="text-stone-400 uppercase text-[9px] tracking-[0.2em] font-bold mb-2">IFSC Code</p>
              <p className="text-stone-900 font-semibold sans-alt">SBIN0001234</p>
            </div>
            <div>
              <p className="text-stone-400 uppercase text-[9px] tracking-[0.2em] font-bold mb-2">Branch</p>
              <p className="text-stone-900 font-semibold sans-alt">New Delhi Main</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group reveal reveal-up" style={{ transitionDelay: '0.4s' }}>
        <div className="absolute -inset-8 bg-gold/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="relative bg-white/40 backdrop-blur-2xl border-2 border-white rounded-[3rem] p-12 md:p-20 shadow-[0_32px_80px_rgba(0,0,0,0.06)] flex flex-col items-center text-center">
          <div className="mb-10 p-6 bg-white rounded-3xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-stone-100 relative">
             <div className="absolute -top-3 -right-3 w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
             </div>
             <div className="w-56 h-56 bg-white flex items-center justify-center p-2">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=TWS_PATRON_HUB&bgcolor=ffffff&color=121212" 
                  alt="Scan to Support" 
                  className="w-full h-full" 
                />
             </div>
          </div>
          
          <h3 className="serif text-4xl mb-6 text-stone-900">Scan to Contribute</h3>
          <p className="text-stone-500 text-sm font-light mb-10 max-w-sm leading-relaxed">
            Quickly support our community through any UPI or banking application. Verified and secure.
          </p>
          
          <button className="w-full py-6 bg-stone-900 text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            Request Impact Report
          </button>
          
          <div className="mt-10 flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Encrypted Payments</span>
            <div className="flex gap-3">
              <div className="w-10 h-6 bg-stone-100 rounded"></div>
              <div className="w-10 h-6 bg-stone-100 rounded"></div>
              <div className="w-10 h-6 bg-stone-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionHub;