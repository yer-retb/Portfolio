import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-dark-900 border-t border-slate-800 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400">
            YR
          </div>
          <div>
            <div className="text-white font-bold text-sm">Youssef Er-Retby</div>
            <div className="font-mono text-[11px] text-slate-500">Full-Stack & AI Software Engineer</div>
          </div>
        </div>

        {/* Center note */}
        <div className="font-mono text-center text-[11px] text-slate-500 flex items-center gap-1.5">
          <span>Crafted with React, Tailwind CSS & AI RAG architecture</span>
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-slate-500">© {new Date().getFullYear()} Youssef Er-Retby</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-dark-800 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
