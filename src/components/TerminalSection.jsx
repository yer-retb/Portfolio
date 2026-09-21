import React, { useState, useEffect, useRef } from 'react';
import { Terminal, CornerDownLeft, Sparkles, Copy, Check, Maximize2, Minimize2, Play, Bot, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalSection({ onOpenAiModal }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: `Welcome to Youssef's 1337 Shell (v2.4.0-release)\nType 'help' or click any numbered shortcut [1-7] below to explore.\nType 'clear' to reset terminal screen.`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistoryIndex, setCmdHistoryIndex] = useState(-1);
  const [pastCommands, setPastCommands] = useState([]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const consoleContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll ONLY the internal console container, NOT the browser window page
  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd, e) => {
    if (e && e.preventDefault) e.preventDefault();
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Add command to history list
    setPastCommands((prev) => [...prev, cmd]);
    setCmdHistoryIndex(-1);

    const newHistoryItem = { type: 'user', content: `$ ${rawCmd}` };
    let responseItem = null;

    if (cmd === 'help' || cmd === 'h' || cmd === 'menu') {
      responseItem = {
        type: 'output',
        content: `
╔══════════════════════════════════════════════════════════════════════╗
║                     YOUSSEF ER-RETBY TERMINAL                        ║
╚══════════════════════════════════════════════════════════════════════╝

Available Commands (Type or Click numbered buttons):
  [1] education   - 1337 School (42 Network) Level 19.12 & OFPPT
  [2] skills      - Full-Stack, AI RAG, DevOps & System Programming
  [3] exp         - Work History (Digital Brain, UM6P, ProCaneq/OCP)
  [4] projects    - Kubernetes GitOps, AI Voice Agents, SaaS Platform
  [5] contact     - Direct Email, Phone, Location & Social Links
  [6] ai          - Launch Interactive AI RAG Assistant Modal
  [7] 1337        - Display 1337 (42 Network) Achievement Specs
  [8] clear       - Clear terminal output
  [9] matrix      - Toggle Matrix Digital Rain mode
`
      };
    } else if (cmd === '1' || cmd === 'education' || cmd === 'edu') {
      responseItem = {
        type: 'output',
        content: `
🎓 ACADEMIC BACKGROUND & 42 NETWORK CERTIFICATION
--------------------------------------------------
• Institution: 1337 School (42 Network / UM6P Partner)
  Title:       Computer Scientist (Level 19.12)
  Period:      10/2021 – Present | Ben Guerir, Morocco
  Focus:       C/C++ Memory Allocation, POSIX Systems, Data Structures,
               Peer-to-Peer Problem Solving, Network Architecture.

• Institution: OFPPT / ISTA
  Title:       Specialized IT Technician : Networks and Support
  Period:      09/2019 – 06/2021 | Marrakech, Morocco
  Focus:       TCP/IP Protocols, Cisco Routing & Switching, Linux Server Admin.
`
      };
    } else if (cmd === '2' || cmd === 'skills' || cmd === 'skill' || cmd === 'tech') {
      responseItem = {
        type: 'output',
        content: `
⚡ TECHNICAL SKILLS MATRIX
--------------------------------------------------
[+] AI & Retrieval:    RAG (GenAI), Embeddings, Vector Search, LLM Eval, AI Agents, LangChain, n8n
[+] Languages:         TypeScript, JavaScript, Python, Node.js, C, C++
[+] Frameworks:        React.js, Next.js, Nest.js, FastAPI, React Query, Zustand
[+] DevOps & Cloud:    Docker, Kubernetes (K3s/K3d), Argo CD (GitOps), Ansible, Nginx, GitLab CI/CD
[+] Styling & UI:      Tailwind CSS, Shadcn UI, Material UI, Ant Design, Daisy UI
[+] Databases:         PostgreSQL, MongoDB, Redis, Vector DBs
`
      };
    } else if (cmd === '3' || cmd === 'exp' || cmd === 'experience' || cmd === 'work') {
      responseItem = {
        type: 'output',
        content: `
💼 PROFESSIONAL WORK HISTORY
--------------------------------------------------
1. DIGITAL BRAIN | Full-Stack Software Engineer (08/2025 – Present)
   - React, Next.js, Node.js, PostgreSQL, AI Voice Agents, Docker CI/CD, Restaurant SaaS.

2. UM6P | Frontend Freelancer (12/2024 – 07/2025)
   - React, TypeScript, 2FA Auth Flows, React Query, Zustand, ShadCN UI.

3. ProCaneq / OCP | Software Developer (05/2024 – 11/2024)
   - Enterprise UI Component Architecture, Workflow Automation, REST APIs.
`
      };
    } else if (cmd === '4' || cmd === 'projects' || cmd === 'project' || cmd === 'work') {
      responseItem = {
        type: 'output',
        content: `
🚀 FEATURED ARCHITECTURES & PROJECTS
--------------------------------------------------
1. Inception of Things - Kubernetes Infrastructure
   Stack: K3s, K3d, Vagrant, Argo CD, GitOps Pipelines, Ingress Routing.

2. AI Voice Agents & Business Automation Suite
   Stack: LangChain, n8n Workflow Automation, FastAPI, Speech AI, RAG.

3. Restaurant & Hospitality SaaS Platform
   Stack: Next.js, React, Node.js, PostgreSQL, WebSockets, Docker.

4. Enterprise 2FA Auth & Profile System
   Stack: React, TypeScript, React Query, Zustand, ShadCN UI.
`
      };
    } else if (cmd === '5' || cmd === 'contact' || cmd === 'email' || cmd === 'phone') {
      responseItem = {
        type: 'output',
        content: `
📬 CONTACT INFORMATION & SOCIAL CONNECTIVITY
--------------------------------------------------
• Email:      yerretby@gmail.com
• Phone:      +212 682284801
• Locations:  Casablanca / Marrakech, Morocco (Available for Remote & On-Site)
• GitHub:     https://github.com/yer-retb
• LinkedIn:   https://linkedin.com/in/er-retby-youssef
`
      };
    } else if (cmd === '6' || cmd === 'ai' || cmd === 'bot' || cmd === 'assistant') {
      if (onOpenAiModal) onOpenAiModal();
      responseItem = {
        type: 'output',
        content: `🤖 Opening Interactive AI RAG Assistant Modal...`
      };
    } else if (cmd === '7' || cmd === '1337' || cmd === '42') {
      responseItem = {
        type: 'output',
        content: `
======================================================================
               1337 SCHOOL (42 NETWORK) — LEVEL 19.12
======================================================================
  Title:   Computer Scientist Certification
  Level:   Level 19.12 (Top-Tier Academic Distinction)
  School:  1337 School (42 Network Partner — UM6P, Morocco)
  Campus:  Ben Guerir, Morocco (10/2021 – Present)
  Method:  Peer-to-Peer, Teacherless & Project-Driven Systems Engineering
`
      };
    } else if (cmd === '8' || cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmd === '9' || cmd === 'matrix') {
      setIsMatrixMode(!isMatrixMode);
      responseItem = {
        type: 'output',
        content: `[System] Matrix Digital Rain mode ${!isMatrixMode ? 'ACTIVATED 🟢' : 'DEACTIVATED ⚪'}`
      };
    } else if (cmd === 'sudo' || cmd === 'sudo su') {
      responseItem = {
        type: 'output',
        content: `Access Denied: 'user' is not in the sudoers file. This incident will be reported to Youssef Er-Retby.`
      };
    } else if (cmd === 'whoami') {
      responseItem = {
        type: 'output',
        content: `guest@portfolio-explorer ~ (Welcome tech reviewer!)`
      };
    } else {
      responseItem = {
        type: 'output',
        content: `Command not recognized: '${rawCmd}'. Type 'help' or click a numbered shortcut below.`
      };
    }

    setHistory((prev) => [...prev, newHistoryItem, responseItem]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal, e);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIdx = cmdHistoryIndex + 1;
        if (nextIdx < pastCommands.length) {
          setCmdHistoryIndex(nextIdx);
          setInputVal(pastCommands[pastCommands.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistoryIndex > 0) {
        const nextIdx = cmdHistoryIndex - 1;
        setCmdHistoryIndex(nextIdx);
        setInputVal(pastCommands[pastCommands.length - 1 - nextIdx]);
      } else if (cmdHistoryIndex === 0) {
        setCmdHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const shortcuts = [
    { num: '1', cmd: 'education', label: 'Education' },
    { num: '2', cmd: 'skills', label: 'Skills' },
    { num: '3', cmd: 'exp', label: 'Experience' },
    { num: '4', cmd: 'projects', label: 'Projects' },
    { num: '5', cmd: 'contact', label: 'Contact' },
    { num: '6', cmd: 'ai', label: 'Ask AI' },
    { num: '7', cmd: '1337', label: '1337 Level' },
    { num: '8', cmd: 'clear', label: 'Clear' }
  ];

  return (
    <section id="terminal" className="py-20 relative bg-dark-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive UNIX Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            1337 Developer <span className="gradient-text-cyan">Terminal</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono">
            Type commands or click the numbered shortcuts to discover Youssef's qualifications.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div className={`rounded-2xl border ${isMatrixMode ? 'border-emerald-500/50 shadow-glow-indigo bg-black' : 'border-slate-800 bg-dark-900/90 shadow-2xl'} overflow-hidden`}>
          
          {/* Mac Terminal Header Bar */}
          <div className="px-4 py-3 bg-dark-800/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 font-mono text-xs text-slate-400 font-medium">youssef@1337-cluster: ~ (zsh)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => executeCommand('clear', e)}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                clear
              </button>
              <button
                type="button"
                onClick={() => setIsMatrixMode(!isMatrixMode)}
                className={`text-[11px] font-mono px-2.5 py-0.5 rounded border transition-colors cursor-pointer ${
                  isMatrixMode ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {isMatrixMode ? 'Matrix ON' : 'Matrix Mode'}
              </button>
            </div>
          </div>

          {/* Quick-Click Command Shortcuts Bar */}
          <div className="px-4 py-2.5 bg-dark-800/40 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar font-mono text-xs">
            <span className="text-slate-500 shrink-0 text-[11px]">Quick Exec:</span>
            {shortcuts.map((sc) => (
              <button
                key={sc.num}
                type="button"
                onClick={(e) => executeCommand(sc.cmd, e)}
                className="px-2.5 py-1 rounded-lg bg-dark-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 shrink-0 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span className="text-cyan-400 font-bold">[{sc.num}]</span>
                <span>{sc.label}</span>
              </button>
            ))}
          </div>

          {/* Terminal Console Output Body */}
          <div
            ref={consoleContainerRef}
            onClick={() => inputRef.current?.focus()}
            className={`p-5 sm:p-6 min-h-[320px] max-h-[440px] overflow-y-auto font-mono text-xs sm:text-sm cursor-text ${
              isMatrixMode ? 'text-emerald-400 font-bold' : 'text-slate-200'
            }`}
          >
            {history.map((item, idx) => (
              <div key={idx} className="mb-3 whitespace-pre-wrap leading-relaxed">
                {item.type === 'user' ? (
                  <div className="text-cyan-400 font-bold flex items-center gap-2">
                    <span className="text-indigo-400">youssef@1337:~$</span>
                    <span>{item.content.replace('$ ', '')}</span>
                  </div>
                ) : (
                  <div className={`${isMatrixMode ? 'text-emerald-400' : 'text-slate-300'}`}>
                    {item.content}
                  </div>
                )}
              </div>
            ))}

            {/* Input Prompt Row */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-cyan-400 font-bold">youssef@1337:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or '[1] education'..."
                className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm focus:ring-0"
              />
              <CornerDownLeft className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
