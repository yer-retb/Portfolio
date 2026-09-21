import React, { useState } from 'react';
import { Cpu, Code2, Layers, Server, Palette, Database, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const iconMap = {
    Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-indigo-400" />,
    Layers: <Layers className="w-5 h-5 text-purple-400" />,
    Server: <Server className="w-5 h-5 text-emerald-400" />,
    Palette: <Palette className="w-5 h-5 text-pink-400" />,
    Database: <Database className="w-5 h-5 text-amber-400" />
  };

  const filteredCategories = portfolioData.skillCategories.filter(cat => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return cat.id === 'ai-retrieval';
    if (activeFilter === 'fullstack') return cat.id === 'languages' || cat.id === 'frameworks' || cat.id === 'styling-ui';
    if (activeFilter === 'devops') return cat.id === 'devops' || cat.id === 'databases';
    return true;
  });

  return (
    <section id="skills" className="py-20 relative bg-dark-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="gradient-text-cyan">Tech Matrix</span>
          </h2>
          <p className="text-slate-400 text-base">
            From low-level system programming and cloud orchestration to modern AI RAG pipelines and full-stack web applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'ai', label: 'AI & Retrieval' },
              { id: 'fullstack', label: 'Full-Stack & UI' },
              { id: 'devops', label: 'DevOps & Databases' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan scale-105'
                    : 'bg-dark-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Category Title Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-dark-800 border border-slate-700/60 shadow-inner">
                      {iconMap[category.icon]}
                    </div>
                    <h3 className="font-bold text-lg text-white">{category.name}</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{category.skills.length} skills</span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800/90 hover:bg-slate-800 border border-slate-700/60 text-xs font-medium text-slate-200 transition-colors group cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
