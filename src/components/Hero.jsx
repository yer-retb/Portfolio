import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, ArrowRight, Bot, Sparkles, Terminal, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function Hero({ onOpenAiModal }) {
  const titles = [
    "Full-Stack Software Engineer",
    "AI & RAG Solutions Developer",
    "1337 (42 Network) Computer Scientist",
    "Cloud & DevOps Practitioner"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radiant Glow Orbs */}
      <div className="orb-cyan top-10 left-1/4 -translate-x-1/2"></div>
      <div className="orb-indigo top-40 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md mb-6 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
                {portfolioData.personal.status}
              </span>
            </div>

            {/* Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Hello, I'm <br />
              <span className="gradient-text-cyan">{portfolioData.personal.name}</span>
            </h1>

            {/* Animated Title Switcher */}
            <div className="h-10 sm:h-12 mb-6 flex items-center">
              <div className="font-mono text-xl sm:text-2xl text-cyan-400 font-semibold flex items-center gap-2">
                <Terminal className="w-6 h-6 text-indigo-400" />
                <span className="transition-all duration-500 ease-in-out">
                  {titles[currentTitleIndex]}
                </span>
                <span className="w-2 h-6 bg-cyan-400 animate-pulse"></span>
              </div>
            </div>

            {/* Summary Text */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {portfolioData.personal.profileText}
            </p>

            {/* Quick Metadata Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-8 font-mono">
              <div className="flex items-center gap-1.5 bg-dark-800/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Casablanca & Marrakech, Morocco</span>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-800/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>1337 (42 Network) Lvl 19.12</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/ER-RETBY_YOUSSEF CV.pdf"
                download="ER-RETBY_YOUSSEF_CV.pdf"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm bg-dark-800 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={onOpenAiModal}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all flex items-center justify-center gap-2 group shadow-glow-indigo"
              >
                <Bot className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
                <span>Ask AI About Me</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect:</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-800 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-800 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-lg bg-dark-800 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Profile Card with Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 blur-xl animate-pulse-slow"></div>

              {/* Main Profile Card Container */}
              <div className="relative glass-card p-6 rounded-2xl border border-slate-700/80 shadow-2xl">
                
                {/* Photo Frame */}
                <div className="relative rounded-xl overflow-hidden mb-6 group border-2 border-slate-700/60 shadow-lg">
                  <img
                    src={profileImg}
                    alt="Youssef Er-Retby"
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-dark-900/90 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    Full-Stack Dev
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                    <span className="bg-dark-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                      Casablanca / Marrakech
                    </span>
                    <span className="bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/30">
                      React & AI
                    </span>
                  </div>
                </div>

                {/* Key Stats Row */}
                <div className="grid grid-cols-2 gap-3">
                  {portfolioData.stats.map((stat, idx) => (
                    <div key={idx} className="bg-dark-800/80 p-3 rounded-xl border border-slate-800/80">
                      <div className="text-xl font-bold font-mono text-cyan-400">{stat.value}</div>
                      <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                      <div className="text-[10px] text-indigo-400 font-mono mt-0.5">{stat.highlight}</div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
