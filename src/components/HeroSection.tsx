import { ArrowRight, Sparkles, Download, CheckCircle2, Facebook, Instagram, Linkedin, Youtube, MessageSquare } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export default function HeroSection({ onOpenResumeModal }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Availability status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card bg-slate-900/80 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6 shadow-lg shadow-blue-950/40">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>{HERO_DATA.status}</span>
        </div>

        {/* Greeting & Name Heading */}
        <div className="flex flex-col items-center w-full mb-6">
          <div className="inline-flex flex-col items-start text-left">
            <span className="text-slate-400 text-base sm:text-xl font-semibold tracking-wide lowercase mb-1">
              hello, i am
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white uppercase tracking-tight leading-tight">
              {HERO_DATA.name}
            </h1>
          </div>
        </div>

        {/* MIDDLE ITEM: Profile Picture */}
        <div className="relative my-6 flex justify-center items-center">
          {/* Outer Glow Halo */}
          <div className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full bg-gradient-to-tr from-blue-600/30 to-indigo-600/20 blur-3xl -z-10 animate-pulse-glow" />

          {/* Image Card Container */}
          <div className="relative w-[260px] sm:w-[320px] aspect-square rounded-3xl p-3 glass-card bg-slate-900/60 border border-blue-500/30 blue-glow shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden group">
              <img
                src={HERO_DATA.profileImage}
                alt={HERO_DATA.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl glass-card bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center justify-between text-left">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Creative Lead</p>
                  <p className="text-xs text-white font-bold">{HERO_DATA.name.toUpperCase()}</p>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold px-2 py-0.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* Floating Badge Top Right */}
            <div className="absolute -top-4 -right-4 p-2.5 rounded-2xl glass-card bg-slate-900/90 border border-blue-500/40 shadow-xl flex items-center gap-2 animate-float">
              <div className="p-1.5 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-slate-400 font-semibold uppercase">Focus</p>
                <p className="text-xs text-white font-bold">High ROAS & Motion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2: Roles (Graphic Designer, Video Editor, Meta Marketer) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 my-6">
          {HERO_DATA.roles.map((role, idx) => (
            <div 
              key={idx}
              className="px-5 py-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 text-blue-300 font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-blue-950/30 flex items-center gap-2"
            >
              <span className="text-blue-400">•</span>
              <span>{role}</span>
            </div>
          ))}
        </div>

        {/* Short Bio Description */}
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
          {HERO_DATA.description}
        </p>

        {/* Primary & Secondary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto">
          <button
            id="hero-view-portfolio-btn"
            onClick={() => scrollToSection('portfolio')}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 border border-blue-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-contact-me-btn"
            onClick={() => scrollToSection('contact')}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl glass-card bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Contact Me</span>
          </button>

          <button
            id="hero-download-cv-btn"
            onClick={onOpenResumeModal}
            className="inline-flex items-center justify-center p-3.5 rounded-2xl glass-card bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500/40 transition-all duration-300"
            title="View Resume / CV"
          >
            <Download className="w-5 h-5 text-blue-400" />
          </button>
        </div>

        {/* Social Media Links Bar */}
        <div className="flex items-center justify-center gap-3 pt-6 border-t border-slate-800/80 w-full max-w-md">
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mr-2">
            Connect:
          </span>
          
          <a
            href={HERO_DATA.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>

          <a
            href={HERO_DATA.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-all duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={HERO_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={HERO_DATA.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-all duration-200"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>

          <a
            href={HERO_DATA.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Statistics Cards Bar */}
        {HERO_DATA.stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20 w-full">
            {HERO_DATA.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 flex items-center gap-1 font-mono">
                  <span>{stat.value}</span>
                  <span className="text-blue-400">{stat.suffix}</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
