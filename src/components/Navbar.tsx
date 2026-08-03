import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenHireModal: (serviceName?: string) => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onOpenHireModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on viewport position
      const scrollPosition = window.scrollY + 120;
      
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-slate-900 border border-blue-400/30 group-hover:border-blue-400 transition-all duration-300 shadow-md shadow-blue-500/20">
              <span className="font-extrabold text-white text-lg tracking-wider">S</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-base sm:text-lg text-white group-hover:text-blue-400 transition-colors">
                SALAH UDDIN
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase -mt-0.5">
                Creative Pro & Marketer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive 
                      ? 'text-white bg-blue-600/90 shadow-sm shadow-blue-500/30 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              id="nav-hire-me-btn"
              onClick={() => onOpenHireModal()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-md shadow-blue-600/25 border border-blue-400/30 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200 animate-pulse" />
              <span>Hire Me</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-blue-400" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-800 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30"
              >
                <span>Let's Build Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
