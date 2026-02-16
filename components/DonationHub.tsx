
import React from 'react';

const ContributionHub: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
      {/* Left Column: Trust */}
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="serif text-5xl md:text-6xl text-stone-100 leading-tight">Join the Mission.</h2>
          <p className="text-stone-400 text-lg leading-relaxed font-light">
            Your support ensures we can continue to restore dignity to the most vulnerable. 
            Every contribution is tracked and impact-mapped for total transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 border border-stone-800 rounded-xl bg-stone-900/30">
            <h4 className="text-stone-100 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Tax Exempt
            </h4>
            <p className="text-stone-500 text-sm font-light">
              Your contribution is tax-exempt under Section 80(G) of the IT Act.
            </p>
          </div>
          <div className="p-6 border border-stone-800 rounded-xl bg-stone-900/30">
            <h4 className="text-stone-100 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-stone-500"></span>
              Transparency
            </h4>
            <p className="text-stone-500 text-sm font-light">
              33 Years of trust. Every rupee goes directly to the field source.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-4 border-t border-stone-800/50">
          <h4 className="serif text-2xl text-stone-300">Bank Transfer Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm font-mono tracking-tighter">
            <div>
              <p className="text-stone-600 uppercase text-[10px] tracking-widest mb-1">Bank Name</p>
              <p className="text-stone-300">State Bank of India</p>
            </div>
            <div>
              <p className="text-stone-600 uppercase text-[10px] tracking-widest mb-1">Account Number</p>
              <p className="text-stone-300">0000 1234 5678 90</p>
            </div>
            <div>
              <p className="text-stone-600 uppercase text-[10px] tracking-widest mb-1">IFSC Code</p>
              <p className="text-stone-300">SBIN0001234</p>
            </div>
            <div>
              <p className="text-stone-600 uppercase text-[10px] tracking-widest mb-1">Branch</p>
              <p className="text-stone-300">New Delhi Main Branch</p>
            </div>
          </div>
        </div>
        
        <p className="text-stone-500 text-xs italic">
          * For physical donations or cash contributions, please visit our Delhi Coordinating Office.
        </p>
      </div>

      {/* Right Column: QR & Glassmorphism */}
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-stone-500/10 rounded-3xl blur-2xl group-hover:bg-stone-500/20 transition-all duration-700"></div>
        
        <div className="relative bg-stone-900/40 backdrop-blur-xl border border-stone-700 rounded-3xl p-10 md:p-16 shadow-2xl flex flex-col items-center text-center">
          <div className="mb-8 p-4 bg-white rounded-2xl shadow-inner">
            {/* QR Code with Lazy Loading */}
            <div className="w-48 h-48 bg-stone-50 flex items-center justify-center border-4 border-white overflow-hidden">
               <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TWS_DONATION_PORTAL&bgcolor=f8f8f8&color=121212" 
                 alt="Scan to Pay" 
                 loading="lazy"
                 className="w-full h-full" 
               />
            </div>
          </div>
          
          <h3 className="serif text-3xl mb-4 text-stone-100">Scan to Donate</h3>
          <p className="text-stone-400 text-sm font-light mb-8 max-w-[250px]">
            Instantly support our weavers and students via UPI or any banking app.
          </p>
          
          <button className="w-full py-4 bg-stone-100 text-[#121212] rounded-lg font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Get Donation Receipt
          </button>
          
          <div className="mt-8 flex items-center gap-4 text-stone-500">
            <span className="text-[10px] uppercase tracking-[0.2em]">Secured by</span>
            <div className="flex gap-2">
              <div className="w-8 h-4 bg-stone-800 rounded-sm"></div>
              <div className="w-8 h-4 bg-stone-800 rounded-sm"></div>
              <div className="w-8 h-4 bg-stone-800 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionHub;
