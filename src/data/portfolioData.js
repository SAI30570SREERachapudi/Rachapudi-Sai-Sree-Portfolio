export const portfolioData = {
  personal: {
    name: "Rachapudi Sai Sree",
    initials: "RSS",
    role: "AI Engineer Intern",
    company: "Calibo",
    headline: "AI Engineer Intern @ Calibo | Software Developer",
    subheadline: "Software Developer | AI/ML & Backend Engineering",
    shortBio: "Computer Science undergraduate at K L University and AI Engineer Intern at Calibo. Dedicated to building practical AI-powered applications, resilient backend architectures, and dependable software systems.",
    extendedBio: [
      "I am a Computer Science and Engineering undergraduate at K L University (2023–2027) currently working as an AI Engineer Intern at Calibo.",
      "My core technical interest lies in bridging the gap between theoretical AI and dependable software engineering. Rather than treating AI as a black box, I focus on engineering practical, agentic AI-powered applications, resilient backend architectures, and reliable deployment workflows.",
      "Through my hands-on coursework and internship experience, I continuously deepen my capabilities across AI engineering, backend development, cloud technologies, and DevOps. I place a strong emphasis on clean code structure, data structures and algorithms, system design fundamentals, and continuous learning through hands-on implementation."
    ],
    email: "saisreerachupudi@gmail.com",
    location: "Nandyal, Andhra Pradesh, India",
    github: "https://github.com/SAI30570SREERachapudi",
    linkedin: "https://linkedin.com/in/rachapudi-sai-sree-313305388",
    resumeNote: "Available upon direct request for verified opportunities."
  },

  experience: [
    {
      role: "AI Engineer Intern",
      company: "Calibo",
      period: "Current Role",
      type: "Professional Internship",
      badge: "Current",
      summary: "Contributing to practical AI engineering, agentic workflow orchestration, and high-performance backend microservices.",
      responsibilities: [
        {
          title: "Agentic AI & Workflow Orchestration",
          detail: "Building and exploring agentic architectures utilizing LangGraph to construct stateful, multi-step ReAct (Reasoning and Action) loops for automated workflows."
        },
        {
          title: "Tool Protocol Integration",
          detail: "Standardizing external tool execution via the Model Context Protocol (MCP), connecting disconnected standard-I/O tool servers (research, document formatting, and web inspection) to language model backends."
        },
        {
          title: "High-Speed Backend Services",
          detail: "Engineering asynchronous FastAPI microservices and integrating high-throughput LLM inference backends (such as Groq Llama-3.3-70b) for reliable tool-calling and plan formulation."
        },
        {
          title: "Engineering Best Practices",
          detail: "Adhering to strict privacy boundaries, decoupled service contracts, clean API specifications, and modular software design principles."
        }
      ],
      technologies: ["Python", "LangGraph", "FastAPI", "MCP Protocol", "Groq API", "RESTful APIs", "Microservices"]
    }
  ],

  education: {
    university: {
      institution: "K L University",
      degree: "Bachelor of Technology — Computer Science and Engineering",
      period: "July 2023 – May 2027",
      cgpa: "9.82 / 10.0",
      cgpaNote: "As stated in official academic records",
      status: "Pursuing",
      distinctions: [
        {
          title: "University 3rd Rank",
          detail: "Ranked 3rd across the university cohort during my academic journey."
        },
        {
          title: "NPTEL Discipline Star",
          detail: "Recognized as an NPTEL Discipline Star for sustained excellence in computer science certifications."
        }
      ]
    },
    foundation: [
      {
        institution: "Rao’s Junior College",
        program: "Intermediate (MPC) — State Board",
        period: "July 2021 – April 2023",
        score: "98.5%"
      },
      {
        institution: "Sree Lakshmi English Medium High School",
        program: "Secondary School Certificate (SSC) — State Board",
        period: "June 2020 – April 2021",
        score: "97.0%"
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "ai",
        name: "AI & Agentic Systems",
        skills: [
          { name: "LangGraph", level: "Agent Orchestration" },
          { name: "Model Context Protocol (MCP)", level: "Tool Protocol" },
          { name: "LLM Tool Calling", level: "Function Calling" },
          { name: "Scikit-Learn", level: "Machine Learning" },
          { name: "NumPy", level: "Numerical Computing" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Microservices",
        skills: [
          { name: "FastAPI", level: "Asynchronous APIs" },
          { name: "Spring Boot", level: "Enterprise Java" },
          { name: "Django", level: "Python Web Framework" },
          { name: "Express.js", level: "Node.js Framework" },
          { name: "RESTful APIs", level: "API Architecture" },
          { name: "Node.js", level: "Runtime Environment" }
        ]
      },
      {
        id: "programming",
        name: "Programming Languages",
        skills: [
          { name: "Python", level: "Primary Development" },
          { name: "Java", level: "Object-Oriented Backend" },
          { name: "C", level: "Systems & Algorithms" },
          { name: "JavaScript", level: "Web & Runtime" }
        ]
      },
      {
        id: "cloud",
        name: "Cloud & DevOps",
        skills: [
          { name: "AWS", level: "Cloud Provisioning" },
          { name: "Docker", level: "Containerization" },
          { name: "Kubernetes", level: "Orchestration Basics" },
          { name: "GitHub Actions", level: "CI/CD Pipelines" },
          { name: "CI/CD Automation", level: "Deployment Workflows" }
        ]
      },
      {
        id: "frontend",
        name: "Frontend Development",
        skills: [
          { name: "React", level: "Component Architecture" },
          { name: "HTML5", level: "Semantic Markup" },
          { name: "CSS3 / Vanilla CSS", level: "Modern Styling & Grid" },
          { name: "Vite", level: "Modern Frontend Build" }
        ]
      },
      {
        id: "databases",
        name: "Databases & Storage",
        skills: [
          { name: "MySQL", level: "Relational Database" },
          { name: "MongoDB", level: "Document Store" }
        ]
      },
      {
        id: "cs_core",
        name: "Core Computer Science",
        skills: [
          { name: "Data Structures & Algorithms", level: "Core Strength" },
          { name: "Object-Oriented Design", level: "Software Architecture" },
          { name: "System Design Fundamentals", level: "System Principles" },
          { name: "Model Drift Monitoring", level: "MLOps Practice" }
        ]
      },
      {
        id: "tools",
        name: "Tools & Version Control",
        skills: [
          { name: "Git", level: "Distributed SCM" },
          { name: "GitHub", level: "Collaboration & Actions" },
          { name: "Postman", level: "API Testing & Docs" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "auto-ppt-agent",
      title: "Auto-PPT-Agent",
      tagline: "Autonomous Presentation Generation Platform via LangGraph & MCP",
      status: "Completed",
      featured: true,
      category: "Agentic AI",
      badgeColor: "burgundy",
      problem: "Designing comprehensive presentations from raw topic inputs traditionally demands manual multi-step research, document synthesis, and visual layout formatting.",
      contribution: "Architected an autonomous agentic application utilizing a LangGraph ReAct loop. Integrated Groq Llama-3.3-70b for high-speed planning and tool selection, paired with disconnected Model Context Protocol (MCP) standard-I/O servers for web retrieval and PPT generation. Built a FastAPI asynchronous backend and a modern React + Vite frontend client.",
      technologies: ["Python", "LangGraph", "MCP (Model Context Protocol)", "FastAPI", "Groq API", "React", "Vite"],
      repoUrl: "https://github.com/SAI30570SREERachapudi/Auto-PPT-Agent",
      highlights: [
        "Stateful LangGraph ReAct loop orchestration",
        "Standardized MCP protocol tool execution",
        "Asynchronous FastAPI backend with Groq inference",
        "Interactive React frontend client"
      ],
      svgIcon: "agent"
    },
    {
      id: "mlops-cicd",
      title: "MLOps CI/CD Pipeline",
      tagline: "Automated Machine Learning Lifecycle, Drift Detection & Canary Deployments",
      status: "Completed",
      featured: true,
      category: "MLOps & CI/CD",
      badgeColor: "burgundy",
      problem: "Production machine learning models frequently degrade over time from subtle data drift and prediction divergence without automated validation gates and continuous monitoring.",
      contribution: "Implemented an end-to-end MLOps pipeline covering automated model training (train.py), rigorous multi-stage validation (validate.py), data and prediction drift detection (drift_detect.py), and continuous production monitoring (monitor.py). Configured GitHub Actions workflows (ci_pipeline.yml, cd_deploy.yml) with automated canary deployment strategies and retraining triggers.",
      technologies: ["Python", "Scikit-Learn", "NumPy", "GitHub Actions", "CI/CD Automation", "Canary Deployment"],
      repoUrl: "https://github.com/SAI30570SREERachapudi/MLOpsCICD",
      highlights: [
        "Automated data and prediction drift detection",
        "Multi-stage GitHub Actions CI/CD workflows",
        "Automated canary deployment gates",
        "Scheduled production monitoring and retraining"
      ],
      svgIcon: "pipeline"
    },
    {
      id: "leaselinker-aws",
      title: "LeaseLinker AWS Deployment",
      tagline: "Cloud-Deployed Property & Lease Management Infrastructure",
      status: "Completed",
      featured: true,
      category: "Cloud & Backend",
      badgeColor: "burgundy",
      problem: "Landlords and property managers require centralized, multi-role platforms for tenant agreements, rent tracking, and automated reminders with reliable cloud hosting.",
      contribution: "Developed and deployed a property management service incorporating a Java backend (leaselinker2.war) and interactive client frontend. Configured role-based access control (Admin, Landlord, Tenant), automated rent reminder tracking, and cloud provisioning on Amazon Web Services (AWS).",
      technologies: ["Java", "JavaScript", "AWS", "Docker", "RESTful APIs", "RBAC"],
      repoUrl: "https://github.com/SAI30570SREERachapudi/LeaseLinker-Deployment-in-AWS",
      highlights: [
        "AWS Cloud provisioning and deployment",
        "Role-Based Access Control (Admin, Landlord, Tenant)",
        "Docker containerization for reproducible deployment",
        "Automated rent notifications and agreement tracking"
      ],
      svgIcon: "cloud"
    },
    {
      id: "insurai",
      title: "InsurAI",
      tagline: "AI-Driven Insurance Evaluation & Claims Processing Architecture",
      status: "Completed",
      featured: true,
      category: "AI & Full-Stack",
      badgeColor: "burgundy",
      problem: "Insurance workflows frequently encounter friction during claim evaluation and policy validation due to manual assessment bottlenecks.",
      contribution: "Designed and implemented a full-stack platform featuring decoupled frontend (insurance-frontend) and backend (insurancebacked) architectures. Engineered policy evaluation endpoints, structured request validation, and authored comprehensive technical documentation and system architecture reports.",
      technologies: ["JavaScript", "Python", "RESTful APIs", "HTML5/CSS3", "System Documentation"],
      repoUrl: "https://github.com/SAI30570SREERachapudi/InsurAI",
      highlights: [
        "Decoupled frontend & backend architecture",
        "Automated policy evaluation endpoints",
        "Rigorous structured request validation",
        "Comprehensive architectural system specifications"
      ],
      svgIcon: "shield"
    },
    {
      id: "freshmart",
      title: "FreshMart E-Commerce Platform",
      tagline: "Online Grocery & Produce Platform with Dynamic Catalog & Cart Flow",
      status: "Completed",
      featured: false,
      category: "Frontend & Full-Stack",
      badgeColor: "burgundy",
      problem: "Grocery e-commerce demands intuitive categorization, dynamic cart calculation, responsive filtering, and seamless product browsing across all device sizes.",
      contribution: "Engineered an e-commerce catalog application featuring dynamic cart computations, responsive multi-category filtering, and clean modular UI components.",
      technologies: ["JavaScript", "React", "HTML5", "CSS3", "State Management"],
      repoUrl: "https://github.com/SAI30570SREERachapudi/FreshMart-EcommercePlatform",
      highlights: [
        "Dynamic cart calculation and item state flow",
        "Category-based responsive catalog filtering",
        "Modular React component hierarchy",
        "Clean, responsive shopping interface"
      ],
      svgIcon: "cart"
    }
  ],

  prototypesNote: {
    title: "Specialized Algorithmic Investigations",
    content: "Algorithmic investigations (including financial fraud explainability services with guardrails and credit score evaluators) represent specialized prototypes and internal experiments that directly inform my backend and explainability design principles."
  }
};
