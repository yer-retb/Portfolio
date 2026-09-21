import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-base">
            Demonstrated history in SaaS product engineering, AI agent integrations, frontend architecture, and enterprise software.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {portfolioData.experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Dot Icon */}
              <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                exp.isCurrent
                  ? 'bg-dark-900 border-cyan-400 shadow-glow-cyan text-cyan-400'
                  : 'bg-dark-900 border-slate-700 text-slate-400 group-hover:border-indigo-400 group-hover:text-indigo-400'
              }`}>
                <Building2 className="w-4 h-4" />
              </div>

              {/* Date Badge for larger screens */}
              <div className="hidden md:block absolute -left-36 top-2 text-right font-mono text-xs text-slate-400 w-28">
                <div>{exp.period}</div>
                <div className="text-[10px] text-slate-500">{exp.location}</div>
              </div>

              {/* Card Content */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-slate-800">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-semibold">
                          Present Role
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-indigo-400 flex items-center gap-2">
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Mobile Date Badge */}
                  <div className="md:hidden font-mono text-xs text-slate-400 bg-dark-800 px-3 py-1 rounded-lg border border-slate-800">
                    {exp.period} • {exp.location}
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-slate-300 font-medium mb-5">
                  {exp.summary}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-dark-800 text-slate-300 text-xs font-mono border border-slate-800"
                    >
                      {tag}
                    </span>
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
