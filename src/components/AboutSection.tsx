import { Check, Download, Award, Target, Zap, ShieldCheck } from 'lucide-react';
import { ABOUT_DATA, HERO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export default function AboutSection({ onOpenResumeModal }: AboutSectionProps) {
  const highlightIcons = [
    <Award className="w-5 h-5 text-blue-400" />,
    <Target className="w-5 h-5 text-indigo-400" />,
    <Zap className="w-5 h-5 text-cyan-400" />,
    <ShieldCheck className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 inline-block mb-3">
            {ABOUT_DATA.subheading}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {ABOUT_DATA.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Image Card & Experience Counter Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2.5 sm:p-3 border border-slate-800 bg-slate-900/60 shadow-2xl">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden group">
                <img
                  src={HERO_DATA.profileImage}
                  alt="Salah Uddin About"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-2xl glass-card bg-slate-950/90 border border-white/10">
                  <p className="text-[10px] sm:text-xs text-blue-400 font-semibold tracking-wider uppercase mb-0.5">
                    Creative Mindset
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    "Design is not just what it looks like, it's how it converts."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Comprehensive Bio & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-4">
              Passionate about turning visual ideas into revenue & reach.
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-4">
              {ABOUT_DATA.bioParagraph1}
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-8">
              {ABOUT_DATA.bioParagraph2}
            </p>

            {/* Core Value Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ABOUT_DATA.highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-2xl glass-card bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 shrink-0 mt-0.5">
                    {highlightIcons[index % highlightIcons.length]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Button & Quick Details */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80">
              <button
                id="about-view-resume-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Open for Full-time & Project Contracts</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
