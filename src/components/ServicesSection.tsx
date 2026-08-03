import { Palette, Video, Share2, Sparkles, Bookmark, Bot, Check, Clock, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenHireModal: (serviceTitle: string) => void;
}

export default function ServicesSection({ onOpenHireModal }: ServicesSectionProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'Share2': return <Share2 className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Bookmark': return <Bookmark className="w-6 h-6" />;
      case 'Bot': return <Bot className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 inline-block mb-3">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized Professional Services
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto">
            Tailored creative and marketing solutions designed to elevate brand authority, boost conversion rates, and engage target audiences.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`relative p-8 rounded-3xl glass-card glass-card-hover border flex flex-col justify-between transition-all duration-300 ${
                service.popular 
                  ? 'bg-slate-900/80 border-blue-500/50 shadow-xl shadow-blue-950/50' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[11px] font-extrabold text-white uppercase tracking-wider shadow-md border border-blue-400/30">
                  Most Requested
                </div>
              )}

              <div>
                {/* Icon & Turnaround */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-950 text-blue-400 border border-blue-500/30">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="p-0.5 rounded-full bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  id={`request-service-${service.id}`}
                  onClick={() => onOpenHireModal(service.title)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-800/80 hover:bg-blue-600 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group shadow-md"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
