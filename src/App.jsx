import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TerminalSection from './components/TerminalSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistantModal from './components/AiAssistantModal';

export default function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenAiModal={() => setIsAiModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenAiModal={() => setIsAiModalOpen(true)} />
        <TerminalSection onOpenAiModal={() => setIsAiModalOpen(true)} />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive AI Showcase Modal */}
      <AiAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
}
