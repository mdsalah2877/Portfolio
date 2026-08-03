import { X, Download, Briefcase, Award, CheckCircle, Mail, MapPin } from 'lucide-react';
import { HERO_DATA, SKILLS_DATA, EXPERIENCE_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrintDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card bg-slate-900/95 border border-blue-500/30 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Resume Header */}
        <div className="border-b border-slate-800 pb-6 mb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                {HERO_DATA.name}
              </h2>
              <p className="text-sm font-semibold text-blue-400 mt-1">
                {HERO_DATA.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  {HERO_DATA.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {HERO_DATA.location}
                </span>
              </div>
            </div>

            <button
              id="resume-print-btn"
              onClick={handlePrintDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Print / Download CV</span>
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>Executive Summary</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
            Versatile creative lead with 5+ years of experience in graphic design, cinematic video editing, motion graphics, and Meta ad campaign management. Driven by brand aesthetics and measurable ROI performance.
          </p>
        </div>

        {/* Experience Timeline in CV */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Work History</span>
          </h3>
          <div className="space-y-4">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                  <span className="text-[11px] font-mono text-blue-400">{exp.period}</span>
                </div>
                <p className="text-xs font-semibold text-slate-400 mb-2">{exp.company}</p>
                <ul className="space-y-1">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary Grid */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Key Software & Technical Proficiency
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS_DATA.map((skill) => (
              <span
                key={skill.id}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 border border-slate-700/80"
              >
                {skill.name} ({skill.level}%)
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
