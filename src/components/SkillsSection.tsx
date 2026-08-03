import { useState } from 'react';
import { Palette, Film, Sparkles, Video, Zap, Image, PenTool, Target, Bot, FileText, CheckCircle } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Film': return <Film className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Image': return <Image className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  const filteredSkills = activeTab === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeTab);

  const TABS: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All Skills' },
    { id: 'design', label: 'Graphic & Brand' },
    { id: 'video', label: 'Video & Motion' },
    { id: 'marketing', label: 'Meta Marketing' },
    { id: 'tools', label: 'AI & Tools' }
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      
      {/* Background Accent glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 inline-block mb-3">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Software Mastery
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto">
            A comprehensive suite of industry-standard tools and strategic skill sets developed over 5+ years.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              id={`skill-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30'
                  : 'glass-card text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800 bg-slate-900/50 flex flex-col justify-between group"
            >
              <div>
                {/* Card Header: Icon, Name, Exp Tag */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-950/80 to-slate-900 text-blue-400 border border-blue-500/20 group-hover:border-blue-400/50 group-hover:text-white transition-colors">
                      {getIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {skill.yearsOfExp}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 rounded-lg bg-blue-950/50 border border-blue-500/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700/50">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
