import { useState, FormEvent } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface HireModalProps {
  isOpen: boolean;
  serviceTitle?: string;
  onClose: () => void;
}

export default function HireModal({ isOpen, serviceTitle, onClose }: HireModalProps) {
  const [selectedService, setSelectedService] = useState(serviceTitle || 'Video Editing');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('$200 - $500');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div 
        className="relative w-full max-w-xl rounded-3xl glass-card bg-slate-900/95 border border-blue-500/30 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Quick Hiring Portal</span>
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-2">
          Let's Work Together
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Submit your project requirements and Salah Uddin will review and respond with a proposal.
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="p-3.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 w-fit mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Inquiry Received!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6">
              Thank you {name}, your project request has been dispatched directly to Salah's desk. Expect an email response shortly.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="hire-service" className="block text-xs font-semibold text-slate-300 mb-1">
                Selected Service Category
              </label>
              <select
                id="hire-service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                    {srv.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="hire-name" className="block text-xs font-semibold text-slate-300 mb-1">
                  Name *
                </label>
                <input
                  id="hire-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="hire-email" className="block text-xs font-semibold text-slate-300 mb-1">
                  Email *
                </label>
                <input
                  id="hire-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="hire-budget" className="block text-xs font-semibold text-slate-300 mb-1">
                Estimated Budget Range
              </label>
              <select
                id="hire-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
              >
                <option value="Under $200" className="bg-slate-900 text-white">Under $200</option>
                <option value="$200 - $500" className="bg-slate-900 text-white">$200 - $500</option>
                <option value="$500 - $1,500" className="bg-slate-900 text-white">$500 - $1,500</option>
                <option value="$1,500+" className="bg-slate-900 text-white">$1,500+</option>
              </select>
            </div>

            <div>
              <label htmlFor="hire-message" className="block text-xs font-semibold text-slate-300 mb-1">
                Project Overview / Requirements *
              </label>
              <textarea
                id="hire-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe what you'd like to accomplish..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              id="hire-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              {isSubmitting ? (
                <span>Submitting Proposal...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
