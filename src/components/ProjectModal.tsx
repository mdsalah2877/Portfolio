import { X, ExternalLink, Calendar, CheckCircle2, Tag } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenHireModal: (serviceTitle?: string) => void;
}

// Helper to extract YouTube embed URL
function getYouTubeEmbedUrl(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : url;
}

export default function ProjectModal({ project, onClose, onOpenHireModal }: ProjectModalProps) {
  if (!project) return null;

  const embedUrl = project.videoUrl ? getYouTubeEmbedUrl(project.videoUrl) : null;
  const isShorts = project.videoUrl ? project.videoUrl.includes('shorts') : false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card Box */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl glass-card bg-slate-900/95 border border-blue-500/30 p-4 sm:p-8 shadow-2xl animate-scaleUp my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2.5 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors z-20 shadow-lg min-w-[42px] min-h-[42px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Media Container */}
        <div className={`relative w-full rounded-2xl overflow-hidden bg-slate-950 mb-6 border border-slate-800 shadow-xl ${
          isShorts ? 'aspect-[9/16] max-w-[280px] xs:max-w-[320px] mx-auto' : 'aspect-video'
        }`}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-lg text-xs font-bold text-white bg-blue-600/90 shadow-md backdrop-blur-md border border-blue-400/30">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Information */}
        <div className="space-y-5 sm:space-y-6">
          
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pr-8 sm:pr-0">
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              {project.stats && (
                <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                  {project.stats}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <strong className="text-slate-300">Client:</strong> {project.client}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {project.year}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Project Deliverables:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Tech Used */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-blue-400" />
              <span>Software & Tools Applied</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold text-blue-300 bg-blue-950/50 border border-blue-500/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex flex-col xs:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onOpenHireModal(project.category);
                }}
                className="w-full xs:w-auto px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-center min-h-[44px]"
              >
                Request Similar Project
              </button>

              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30 min-h-[44px]"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors text-center"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
