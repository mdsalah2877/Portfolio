import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 inline-block mb-3">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Clients Say
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto">
            Direct testimonials from founders, marketing managers, and content creators who scaled their visual presence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl glass-card border border-blue-500/30 bg-slate-900/80 shadow-2xl">
            
            <Quote className="w-12 h-12 text-blue-500/20 absolute top-6 left-6" />

            <div className="relative z-10">
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review Content Quote */}
              <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed italic mb-8">
                "{TESTIMONIALS_DATA[currentIndex].content}"
              </p>

              {/* Client Info Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <img
                    src={TESTIMONIALS_DATA[currentIndex].avatar}
                    alt={TESTIMONIALS_DATA[currentIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/40 shadow-md"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <span>{TESTIMONIALS_DATA[currentIndex].name}</span>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </h3>
                    <p className="text-xs text-slate-400">
                      {TESTIMONIALS_DATA[currentIndex].role} — <span className="text-blue-400">{TESTIMONIALS_DATA[currentIndex].company}</span>
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-lg bg-blue-950/50 border border-blue-500/20 text-xs text-blue-300 font-semibold">
                  {TESTIMONIALS_DATA[currentIndex].projectType}
                </div>
              </div>

            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 mt-8">
              <button
                id="testimonial-prev-btn"
                onClick={prevTestimonial}
                className="p-3 rounded-full glass-card hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-400 transition-all duration-200"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-xs font-mono font-bold text-slate-400 px-2">
                {currentIndex + 1} / {TESTIMONIALS_DATA.length}
              </div>

              <button
                id="testimonial-next-btn"
                onClick={nextTestimonial}
                className="p-3 rounded-full glass-card hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-400 transition-all duration-200"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
