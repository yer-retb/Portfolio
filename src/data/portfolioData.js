export const portfolioData = {
  personal: {
    name: "Youssef Er-Retby",
    title: "Full-Stack Software Engineer",
    tagline: "Building scalable web applications, AI-powered systems & cloud infrastructure.",
    profileText: "Full-Stack Developer specializing in React, TypeScript, Next.js, and modern cloud infrastructure. Experienced in building scalable web applications, AI-powered solutions, and production-ready systems using Node.js, PostgreSQL, Docker, GitLab CI/CD, and Nginx. Skilled in AI integrations, workflow automation, cloud deployment, and delivering high-performance user-focused applications.",
    email: "yerretby@gmail.com",
    phone: "+212 682284801",
    locations: ["Casablanca, Morocco", "Marrakech, Morocco"],
    linkedin: "https://linkedin.com/in/er-retby-youssef",
    github: "https://github.com/yer-retb",
    status: "Open for Full-Stack & AI Engineering Opportunities",
    educationHighlight: "1337 (42 Network) Computer Scientist - Level 19.12"
  },
  
  stats: [
    { label: "42 Network Level", value: "19.12", highlight: "Top Tier" },
    { label: "Core Expertise", value: "Full-Stack & AI", highlight: "React / Node / RAG" },
    { label: "Years Experience", value: "2+", highlight: "Industry & Freelance" },
    { label: "Languages Spoken", value: "3", highlight: "Arabic / EN / FR" }
  ],

  skillCategories: [
    {
      id: "ai-retrieval",
      name: "AI & Retrieval Systems",
      icon: "Cpu",
      skills: ["RAG (Retrieval-Augmented Gen)", "Embeddings", "Vector Search", "LLM Evaluation", "AI Agents", "LangChain", "n8n AI Orchestration"]
    },
    {
      id: "languages",
      name: "Programming Languages",
      icon: "Code2",
      skills: ["TypeScript", "JavaScript", "Python", "Node.js", "C", "C++"]
    },
    {
      id: "frameworks",
      name: "Frameworks & Libraries",
      icon: "Layers",
      skills: ["React.js", "Next.js", "Nest.js", "FastAPI", "React Query", "Zustand"]
    },
    {
      id: "devops",
      name: "DevOps & Cloud Infra",
      icon: "Server",
      skills: ["Docker", "Kubernetes (K3s/K3d)", "Argo CD (GitOps)", "Ansible", "Nginx", "GitLab CI/CD", "Vagrant", "Portainer"]
    },
    {
      id: "styling-ui",
      name: "Styling & UI Systems",
      icon: "Palette",
      skills: ["Tailwind CSS", "Shadcn UI", "CSS3 / HTML5", "Material UI", "Ant Design", "Daisy UI"]
    },
    {
      id: "databases",
      name: "Databases & Storage",
      icon: "Database",
      skills: ["PostgreSQL", "MongoDB", "Vector Databases", "Redis"]
    }
  ],

  experiences: [
    {
      id: "digital-brain",
      role: "Full-Stack Software Engineer",
      company: "DIGITAL BRAIN",
      companyUrl: "#",
      location: "Casablanca, Morocco",
      period: "08/2025 – Present",
      isCurrent: true,
      summary: "Leading full-stack engineering of scalable web applications, AI integrations, and cloud infrastructure.",
      highlights: [
        "Developed full-stack web applications using React, Next.js, TypeScript, Node.js, and PostgreSQL.",
        "Integrated AI-powered solutions, including AI voice agents and automated business workflows.",
        "Designed and managed Docker-based deployments, CI/CD pipelines, and cloud infrastructure.",
        "Built and maintained production SaaS products for the restaurant and hospitality industry.",
        "Implemented API integrations, real-time communication protocols, and scalable production backend services."
      ],
      tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AI Voice Agents", "CI/CD"]
    },
    {
      id: "um6p-freelance",
      role: "Frontend Freelancer",
      company: "UM6P (Université Mohammed VI Polytechnique)",
      companyUrl: "#",
      location: "Ben Guerir, Morocco",
      period: "12/2024 – 07/2025",
      isCurrent: false,
      summary: "Delivered high-performance frontend solutions and authentication architecture.",
      highlights: [
        "Built robust frontend features using React and TypeScript, including secure authentication flows (sign-in, login, 2FA) and profile management.",
        "Implemented efficient state handling using React Query and Zustand to maximize performance and user responsiveness.",
        "Developed clean, reliable, and accessible UI component systems using ShadCN UI."
      ],
      tags: ["React", "TypeScript", "React Query", "Zustand", "ShadCN UI", "2FA", "Authentication"]
    },
    {
      id: "procaneq-ocp",
      role: "Software Developer",
      company: "ProCaneq / OCP Group",
      companyUrl: "#",
      location: "Ben Guerir, Morocco",
      period: "05/2024 – 11/2024",
      isCurrent: false,
      summary: "Designed workflow automation interfaces integrated with enterprise backend services.",
      highlights: [
        "Designed and implemented UI components for enterprise applications that automated manual operational workflows.",
        "Ensured seamless integration between frontend user interfaces and underlying backend microservices.",
        "Collaborated cross-functionally within the engineering team to optimize rendering performance and user experience."
      ],
      tags: ["React", "Workflow Automation", "REST APIs", "UI Components", "OCP Ecosystem"]
    }
  ],

  projects: [
    {
      id: "inception-of-things",
      title: "Inception of Things - Kubernetes Infrastructure",
      category: "DevOps & Cloud",
      featured: true,
      description: "Automated Kubernetes multi-node infrastructure cluster built with K3s, Vagrant, K3d, and Argo CD GitOps pipelines.",
      longDescription: "A comprehensive cloud infrastructure project establishing a lightweight Kubernetes environment. Utilized Vagrant for VM orchestration, K3s for lightweight cluster management, K3d for containerized environments, and Argo CD to implement declarative GitOps workflows for automated application deployment and ingress routing.",
      highlights: [
        "Automated multi-node lightweight K3s cluster creation with Vagrant",
        "Configured Kubernetes Ingress for intelligent traffic routing",
        "Implemented GitOps deployment pipelines with Argo CD and K3d"
      ],
      tags: ["Kubernetes", "K3s", "K3d", "Vagrant", "Argo CD", "GitOps", "Docker", "DevOps"],
      githubUrl: "https://github.com/yer-retb",
      liveUrl: null
    },
    {
      id: "ai-voice-automation",
      title: "AI Voice Agents & Business Automation",
      category: "AI & Automation",
      featured: true,
      description: "Production AI voice agents and automated workflow orchestration system using LangChain, n8n, and FastAPI.",
      longDescription: "Integrated speech and conversational AI agents into enterprise workflows. Leveraged n8n for business process automation, FastAPI for backend service orchestration, and LangChain for RAG and LLM tool calling.",
      highlights: [
        "Real-time voice agent conversational response pipeline",
        "n8n automated workflow orchestration for business processes",
        "RAG integration with document vector stores"
      ],
      tags: ["LangChain", "AI Agents", "n8n", "FastAPI", "Python", "RAG", "Voice AI"],
      githubUrl: "https://github.com/yer-retb",
      liveUrl: null
    },
    {
      id: "hospitality-saas",
      title: "Restaurant & Hospitality SaaS Platform",
      category: "Full-Stack SaaS",
      featured: true,
      description: "Full-stack multi-tenant platform with digital ordering, real-time table sync, and automated kitchen workflows.",
      longDescription: "Engineered at Digital Brain. Features real-time WebSocket communication for instantaneous order tracking, PostgreSQL relational data modeling, Next.js SSR for high SEO performance, and Docker containerized deployment.",
      highlights: [
        "Multi-tenant restaurant management dashboard",
        "Real-time order synchronization with WebSockets",
        "Docker-managed deployment pipeline with Nginx reverse proxy"
      ],
      tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "WebSockets"],
      githubUrl: "https://github.com/yer-retb",
      liveUrl: null
    },
    {
      id: "auth-security-system",
      title: "Enterprise 2FA Auth & Profile System",
      category: "Security & Frontend",
      featured: false,
      description: "Secure authentication architecture incorporating two-factor authentication (2FA), session caching, and profile state sync.",
      longDescription: "Built during frontend contract at UM6P. Implemented seamless login/register flows, 2FA QR code verification, user role control, and cached state invalidation using React Query & Zustand.",
      highlights: [
        "2FA multi-factor authentication security",
        "Optimized client state with React Query and Zustand",
        "Accessible ShadCN UI design system"
      ],
      tags: ["React", "TypeScript", "ShadCN UI", "React Query", "Zustand", "2FA Security"],
      githubUrl: "https://github.com/yer-retb",
      liveUrl: null
    }
  ],

  education: [
    {
      id: "1337-school",
      institution: "1337 School (42 Network)",
      partner: "UM6P",
      title: "Software Engineer / Computer Scientist",
      period: "10/2021 – Present",
      location: "Ben Guerir, Morocco",
      level: "Level 19.12",
      badge: "Peer-to-Peer Peerless Training",
      summary: "Completed the rigorous Common Core curriculum at 1337 (42 Network), reaching Level 19.12 and earning the title of Computer Scientist. Project-driven peer-to-peer education focusing on C/C++, system programming, algorithms, networks, and software engineering architecture without teachers or lectures.",
      skillsAcquired: ["Algorithms & Data Structures", "C / C++ Memory Management", "Unix & System Programming", "Network Protocols", "Peer Code Review", "Problem-Solving"]
    },
    {
      id: "ofppt",
      institution: "OFPPT",
      partner: "ISTA",
      title: "Specialized IT Technician : Networks and Support",
      period: "09/2019 – 06/2021",
      location: "Marrakech, Morocco",
      level: "Diploma with Distinction",
      badge: "Network Infrastructure",
      summary: "Comprehensive technical training in computer network infrastructure, Cisco routing & switching, Linux/Windows server administration, hardware diagnostics, and IT support.",
      skillsAcquired: ["TCP/IP & Subnetting", "Cisco Routers & Switches", "Linux Server Admin", "Windows Server", "IT Infrastructure Support"]
    }
  ],

  languages: [
    { name: "Arabic", level: "Native", percentage: 100 },
    { name: "English", level: "Proficient (Professional)", percentage: 90 },
    { name: "French", level: "Intermediate", percentage: 70 }
  ],

  sampleAiPrompts: [
    "What are Youssef's main tech stack skills?",
    "Tell me about Youssef's education at 1337 / 42 Network.",
    "What projects has Youssef built with AI and DevOps?",
    "Is Youssef available for full-stack software engineer roles?"
  ]
};
