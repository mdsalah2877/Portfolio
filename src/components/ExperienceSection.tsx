import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 inline-block mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto">
            A track record of driving visual excellence and marketing ROI across agency, corporate, and client roles.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={item.id} className="relative group">
              
              {/* Glowing Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center group-hover:border-blue-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-blue-500/30">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl glass-card glass-card-hover border border-slate-800 bg-slate-900/50">
                
                {/* Period & Role Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-blue-400 bg-blue-950/60 border border-blue-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {item.role}
                </h3>

                <p className="text-sm font-semibold text-blue-400/90 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  <span>{item.company}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Achievements Bullet List */}
                <div className="space-y-2 mb-6 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/60">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Key Accomplishments:
                  </h4>
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Used Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.skillsUsed.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
