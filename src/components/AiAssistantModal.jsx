import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Sparkles, User, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AiAssistantModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "👋 Hi! I am Youssef's AI Portfolio Assistant. Ask me anything about Youssef Er-Retby's full-stack experience, 1337 (42 Network) education, AI RAG projects, or availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    // User Message
    const userMsg = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Generate intelligent simulated response based on CV content
    setTimeout(() => {
      let aiResponseText = "";
      const q = query.toLowerCase();

      if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("react") || q.includes("node")) {
        aiResponseText = "Youssef is a Full-Stack Software Engineer proficient in React.js, Next.js, TypeScript, Node.js, and PostgreSQL. In AI & Retrieval Systems, he specializes in RAG (Retrieval-Augmented Generation), LLM Evaluation, Vector Search, and AI Agents using LangChain & n8n. For Cloud & DevOps, he works with Docker, Kubernetes (K3s/K3d), Argo CD (GitOps), and GitLab CI/CD.";
      } else if (q.includes("1337") || q.includes("42") || q.includes("education") || q.includes("school") || q.includes("degree")) {
        aiResponseText = "Youssef completed the intensive Common Core program at 1337 School (42 Network) in Ben Guerir, Morocco, reaching Level 19.12 and earning the title of Computer Scientist! 1337's peer-to-peer curriculum sharpened his algorithmic thinking, C/C++ memory management, and system architecture. He also holds a Specialized IT Technician diploma in Networks & Support from OFPPT.";
      } else if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("company") || q.includes("digital brain") || q.includes("um6p") || q.includes("ocp")) {
        aiResponseText = "Youssef's professional background includes:\n1. Digital Brain (08/2025 – Present): Full-Stack Engineer developing React/Next.js apps, AI voice agents, business automation, SaaS hospitality products, and Docker CI/CD.\n2. UM6P (12/2024 – 07/2025): Frontend Freelancer building auth (2FA), React Query state management, and ShadCN UI components.\n3. ProCaneq / OCP (05/2024 – 11/2024): Software Developer designing workflow automation interfaces.";
      } else if (q.includes("project") || q.includes("kubernetes") || q.includes("inception") || q.includes("saas")) {
        aiResponseText = "Notable projects by Youssef include:\n• Inception of Things: Multi-node Kubernetes infrastructure with K3s, Vagrant, K3d, and Argo CD GitOps automated pipelines.\n• AI Voice & Automation Suite: LangChain & n8n workflow integration with speech agents.\n• Hospitality & Restaurant SaaS: Full-stack Next.js app with WebSocket real-time ordering and PostgreSQL.";
      } else if (q.includes("available") || q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("phone")) {
        aiResponseText = "Yes! Youssef is currently open for Full-Stack & AI Software Engineering opportunities (Full-time or High-impact roles in Casablanca, Marrakech, or Remote). You can email him at yerretby@gmail.com or call +212 682284801.";
      } else {
        aiResponseText = `Youssef Er-Retby is a Full-Stack Software Engineer & 1337 (42 Network) graduate based in Morocco. He builds scalable web apps (React, Next.js, Node.js, PostgreSQL), AI solutions (RAG, AI Agents, LangChain), and DevOps pipelines (Docker, Kubernetes). You can reach him directly at yerretby@gmail.com.`;
      }

      const aiMsg = {
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-dark-800/90 border-b border-slate-700/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base">Ask Youssef's AI Assistant</h3>
                <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 text-[10px] font-mono border border-cyan-500/20">
                  RAG Powered
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">Trained on Youssef Er-Retby's CV & Portfolio</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Feed */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 font-sans text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-indigo-400" />
                </div>
              )}

              <div
                className={`max-w-[82%] px-4 py-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-none'
                    : 'bg-dark-800/90 border border-slate-700/80 text-slate-200 rounded-tl-none leading-relaxed whitespace-pre-line'
                }`}
              >
                <div className="text-sm">{msg.text}</div>
                <div className={`text-[10px] mt-1.5 font-mono ${msg.sender === 'user' ? 'text-cyan-200 text-right' : 'text-slate-500'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-cyan-400" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-slate-400 font-mono text-xs">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
                <Bot className="w-4 h-4 text-indigo-400 animate-spin" />
              </div>
              <div className="flex items-center gap-1 bg-dark-800 px-3 py-2 rounded-xl border border-slate-700">
                <span>Analyzing CV vector database</span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        <div className="px-6 py-2 bg-dark-800/40 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-mono text-slate-500 shrink-0">Prompts:</span>
          {portfolioData.sampleAiPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-xs whitespace-nowrap px-3 py-1 rounded-full bg-slate-800/80 hover:bg-indigo-500/20 text-slate-300 hover:text-indigo-300 border border-slate-700/60 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-dark-800/90 border-t border-slate-700/70 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your question about Youssef's experience..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-dark-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 placeholder:text-slate-500"
          />
          <button
            onClick={() => handleSend()}
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
