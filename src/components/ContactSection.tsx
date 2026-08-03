import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { HERO_DATA, SERVICES_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({ initialService }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'Graphic Design',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: 'Graphic Design',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 inline-block mb-3">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start Your Project Today
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto">
            Have a project in mind or need expert advice on video editing, graphic design, or Meta ads? Drop a message below.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Info & Quick Reach */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-8 rounded-3xl glass-card border border-slate-800 bg-slate-900/50 space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get in Touch
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  I typically respond within 2-4 hours on business days. Feel free to reach out via email or WhatsApp.
                </p>
              </div>

              {/* Email Detail Card */}
              <a
                href={`mailto:${HERO_DATA.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-semibold">Email Direct</p>
                  <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {HERO_DATA.email}
                  </p>
                </div>
              </a>

              {/* Location Detail Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-semibold">Location</p>
                  <p className="text-sm font-bold text-white">
                    {HERO_DATA.location}
                  </p>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-semibold">Availability</p>
                  <p className="text-sm font-bold text-emerald-400">
                    Mon - Sat (24-Hour Response Time)
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Pitch Badge */}
            <div className="p-6 rounded-3xl glass-card border border-blue-500/30 bg-gradient-to-br from-blue-950/40 to-slate-900/60 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-blue-600 text-white shrink-0">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Need an urgent video edit or ad creative?</p>
                <p className="text-xs text-slate-300">Express 24-hour turnaround available upon request.</p>
              </div>
            </div>

          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-3xl glass-card border border-slate-800 bg-slate-900/60 shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="p-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out, Salah Uddin will get back to you within 2-4 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Service Category *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-base sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                          {srv.title}
                        </option>
                      ))}
                      <option value="Custom Project / Meta Ads Strategy" className="bg-slate-900 text-white">
                        Custom Project / Meta Ads Strategy
                      </option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your goals, budget, timeline, and vision..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-xl shadow-blue-600/30 border border-blue-400/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message Now</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
