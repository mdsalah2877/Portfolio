import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/portfolioData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto">
            Everything you need to know about working with Salah Uddin, timelines, software, and payment terms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl glass-card border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-900/80 border-blue-500/40 shadow-xl shadow-blue-950/40' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-blue-400' : 'text-slate-500'}`} />
                    <span className="text-base font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-600 text-white border-blue-400' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
