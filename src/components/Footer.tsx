import { Facebook, Instagram, Linkedin, Youtube, MessageSquare, ArrowUp } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 mb-4 group text-left focus:outline-none"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-slate-900 border border-blue-400/30 group-hover:border-blue-400 transition-all duration-300">
                <span className="font-extrabold text-white text-lg tracking-wider">S</span>
              </div>
              <span className="font-bold tracking-wider text-xl text-white group-hover:text-blue-400 transition-colors">
                SALAH UDDIN
              </span>
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Graphic Designer, Video Editor, & Meta Marketer. Crafting high-converting visual media and performance marketing campaigns for global brands.
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2">
              <a
                href={HERO_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:bg-blue-600/20 border border-slate-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={HERO_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:bg-pink-600/20 border border-slate-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={HERO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:bg-blue-600/20 border border-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={HERO_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:bg-red-600/20 border border-slate-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={HERO_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:bg-emerald-600/20 border border-slate-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {['home', 'about', 'skills', 'services', 'portfolio'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => scrollToSection(sec === 'home' ? 'hero' : sec)}
                    className="hover:text-blue-400 transition-colors capitalize"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Core Specialties
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Graphic Design & Brand Kits</li>
              <li>Cinematic Video Editing & Reels</li>
              <li>Motion Graphics & Logo Animation</li>
              <li>Meta Ads Campaign Management</li>
              <li>Generative AI Visual Workflows</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} SALAH UDDIN. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
