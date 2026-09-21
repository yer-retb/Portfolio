import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, Sparkles, Send } from 'lucide-react';

export default function Navbar({ onOpenAiModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-glow-cyan transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-between px-2 font-mono font-bold text-cyan-400">
              YR
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Youssef <span className="text-cyan-400">Er-Retby</span>
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Full-Stack & AI Engineer
            </span>
          </div>
        </a>

        {/* Unified Main Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-dark-800/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Ask AI + Contact button) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAiModal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all shadow-glow-indigo group"
          >
            <Bot className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
            <span>Ask AI</span>
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan hover:opacity-95 hover:scale-[1.02] transition-all"
          >
            <span>Let's Talk</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenAiModal}
            className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
            title="Ask AI"
          >
            <Bot className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 bg-dark-800 border border-slate-700/60"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-800 px-4 pt-4 pb-6 mt-2 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-slate-200 font-medium hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-center font-semibold text-white shadow-glow-cyan"
          >
            Contact Youssef
          </a>
        </div>
      )}
    </header>
  );
}
