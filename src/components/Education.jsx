import React from 'react';
import { GraduationCap, Award, CheckCircle2, Sparkles, Code2, Globe2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Education & <span className="gradient-text-cyan">42 Network</span>
          </h2>
          <p className="text-slate-400 text-base">
            Project-driven computer science education at 1337 (42 Network) and specialized network infrastructure training.
          </p>
        </div>

        {/* Highlight 1337 Banner Card */}
        <div className="mb-12 relative overflow-hidden rounded-3xl border border-cyan-500/30 glass-card p-8 sm:p-10 shadow-glow-cyan">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                  Level 19.12 Achieved
                </span>
                <span className="px-3 py-1 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
                  Computer Scientist Title
                </span>
                <span className="text-xs font-mono text-slate-400">10/2021 – Ben Guerir, Morocco</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <span>1337 School (42 Network)</span>
                <span className="text-xs text-cyan-400 font-mono font-normal">UM6P Partner</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Completed the rigorous Common Core program at 1337 School (42 Network), reaching Level 19.12 and earning the official title of <strong>Computer Scientist</strong>. This peer-to-peer, teacherless, hands-on curriculum sharpened low-level C/C++ memory allocation, data structures, network programming, and algorithmic efficiency.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  "Algorithms & Data Structures",
                  "C & C++ Memory Management",
                  "Unix & POSIX System Calls",
                  "Network Architecture",
                  "Peer Code Evaluation",
                  "Algorithmic Problem-Solving"
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-dark-800/80 px-3 py-2 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-dark-800/80 rounded-2xl border border-slate-800 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] mb-4 shadow-glow-cyan">
                <div className="w-full h-full bg-dark-900 rounded-[15px] flex items-center justify-center text-2xl font-bold font-mono text-cyan-400">
                  1337
                </div>
              </div>
              <div className="text-3xl font-extrabold font-mono text-cyan-400">19.12</div>
              <div className="text-xs font-mono text-slate-400 mt-1">42 Network Level</div>
              <div className="text-[11px] text-indigo-400 font-mono mt-3">Computer Scientist Certification</div>
            </div>

          </div>
        </div>

        {/* Education Grid (OFPPT & Spoken Languages) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* OFPPT Card */}
          <div className="md:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-indigo-400">09/2019 – 06/2021 • Marrakech</span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">OFPPT / ISTA</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Specialized IT Technician : Networks and Support
            </h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Comprehensive technical formation in computer networking, infrastructure installation, Cisco router and switch configurations, system support protocols, and IT troubleshooting.
            </p>
            <div className="flex flex-wrap gap-2">
              {["TCP/IP Networks", "Cisco Routing & Switching", "Linux Server Admin", "Windows Server", "IT Support"].map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-dark-800 text-slate-300 text-xs font-mono border border-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="md:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe2 className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Languages Spoken</h3>
              </div>
              
              <div className="space-y-4">
                {portfolioData.languages.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-cyan-400">{lang.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-dark-800 overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500 mt-6 text-center">
              Multilingual engineer comfortable in international technical teams.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
