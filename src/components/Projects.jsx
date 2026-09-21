import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Sparkles, Server, Cpu, Layers, ShieldCheck, X, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const categoryIconMap = {
    'DevOps & Cloud': <Server className="w-4 h-4 text-cyan-400" />,
    'AI & Automation': <Cpu className="w-4 h-4 text-indigo-400" />,
    'Full-Stack SaaS': <Layers className="w-4 h-4 text-purple-400" />,
    'Security & Frontend': <ShieldCheck className="w-4 h-4 text-emerald-400" />
  };

  return (
    <section id="projects" className="py-20 relative bg-dark-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Projects & <span className="gradient-text-cyan">Architectures</span>
          </h2>
          <p className="text-slate-400 text-base">
            From Kubernetes GitOps clusters to enterprise AI agent workflows and production full-stack SaaS systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover p-7 rounded-2xl border border-slate-800 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-dark-800 border border-slate-700/60 text-xs font-mono">
                    {categoryIconMap[project.category]}
                    <span className="text-slate-300">{project.category}</span>
                  </div>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono font-semibold">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Bullet points preview */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((point, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-dark-800 text-slate-300 text-xs font-mono border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 pt-2">
                  <span>Click to view details</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Key Highlights & Architecture</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-dark-800 border border-slate-700 text-xs font-mono text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
