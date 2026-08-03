import { useState } from 'react';
import { ExternalLink, Play, Layers, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioCategory, PortfolioProject } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export default function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const CATEGORIES: PortfolioCategory[] = [
    'all',
    'Graphic Design',
    'Video Editing',
    'Motion Graphics',
    'Social Media',
    'Branding'
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 inline-block mb-3">
            Featured Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Recent Portfolio Works
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto">
            Explore a curated selection of branding kits, video edits, motion graphics, and high-converting social media creatives.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs - Horizontal Scroll on Mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto max-w-full pb-2 px-1 no-scrollbar touch-pan-x">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 capitalize whitespace-nowrap shrink-0 min-h-[42px] ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30 font-bold'
                  : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl glass-card glass-card-hover border border-slate-800 bg-slate-900/50 overflow-hidden flex flex-col justify-between active:scale-[0.99] transition-transform duration-200"
            >
              <div>
                {/* Project Thumbnail Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Pill Top Left */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold text-white bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Play / View Badge always visible on Mobile Top Right */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 sm:hidden">
                    <div className="p-2 rounded-xl bg-blue-600/90 text-white shadow-lg border border-blue-400/30 backdrop-blur-md">
                      {project.videoUrl ? (
                        <Play className="w-3.5 h-3.5 fill-white" />
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay Button for Desktop */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                    <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/40 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-blue-400/30">
                      {project.videoUrl ? (
                        <Play className="w-5 h-5 fill-white" />
                      ) : (
                        <ExternalLink className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-6">
                  
                  {/* Stats / Highlight Tag */}
                  {project.stats && (
                    <div className="inline-block text-[10px] sm:text-[11px] font-bold text-emerald-400 px-2.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 mb-2">
                      {project.stats}
                    </div>
                  )}

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Tool Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-800/80">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium text-slate-400 bg-slate-800/80 border border-slate-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
