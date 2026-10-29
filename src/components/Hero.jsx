import React from 'react';
import { ArrowDown, Mail, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal, education } = portfolioData;

  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section section-wrapper">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Personal Identity & Messaging */}
          <div className="hero-content">
            <div className="status-pill">
              <span className="status-dot-pulse"></span>
              <span>AI Engineer Intern @ Calibo</span>
            </div>

            <h1 className="hero-name">
              Rachapudi <span className="accent">Sai Sree</span>
            </h1>

            <p className="hero-headline">
              <span className="highlight">AI Engineer Intern @ Calibo</span> | Software Developer
            </p>

            <p className="hero-bio">
              Computer Science undergraduate at K L University and AI Engineer Intern at Calibo. Dedicated to building practical AI-powered applications, resilient backend architectures, and dependable software systems.
            </p>

            <div className="hero-actions">
              <a href="#projects" onClick={scrollToProjects} className="btn btn-primary">
                View My Projects
                <ArrowDown size={16} />
              </a>
              <a href="#contact" onClick={scrollToContact} className="btn btn-secondary">
                Contact Me
                <Mail size={16} />
              </a>
            </div>

            {/* Verified Profile Links */}
            <div className="hero-profiles">
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                Verified Profiles:
              </span>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-link-btn"
                aria-label="GitHub Profile (opens in new window)"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-link-btn"
                aria-label="LinkedIn Profile (opens in new window)"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`mailto:${personal.email}`} 
                className="profile-link-btn"
                aria-label="Send direct email"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Custom Animated Technical SVG Visual */}
          <div className="hero-visual-container">
            <div className="hero-visual-card">
              <svg 
                className="hero-visual-svg" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Connected systems, agentic workflow loop, and engineering dataflow illustration"
              >
                <defs>
                  <linearGradient id="burgundyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#800020" />
                    <stop offset="100%" stopColor="#4A0012" />
                  </linearGradient>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E5C158" />
                    <stop offset="100%" stopColor="#B8860B" />
                  </linearGradient>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#800020" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#800020" stopOpacity="0" />
                  </radialGradient>
                  <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#800020" floodOpacity="0.15" />
                  </filter>
                </defs>

                {/* Background glow circle */}
                <circle cx="200" cy="200" r="160" fill="url(#nodeGlow)" />

                {/* Outer Technical Dashed Track */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="140" 
                  stroke="#E8E2D7" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 6" 
                />

                {/* Middle Agentic Workflow Orbit */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="105" 
                  stroke="#800020" 
                  strokeWidth="1.75" 
                  strokeOpacity="0.3" 
                  strokeDasharray="8 8"
                />

                {/* Connected Flow Paths (ReAct Loop representation) */}
                <path 
                  d="M 120 120 C 160 80, 240 80, 280 120 C 320 160, 320 240, 280 280 C 240 320, 160 320, 120 280 C 80 240, 80 160, 120 120 Z" 
                  fill="none" 
                  stroke="#800020" 
                  strokeWidth="1.5" 
                  strokeOpacity="0.4"
                />

                {/* Connection lines to Central Engine */}
                <line x1="200" y1="95" x2="200" y2="155" stroke="#B8860B" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="95" y1="200" x2="155" y2="200" stroke="#800020" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="305" y1="200" x2="245" y2="200" stroke="#800020" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="305" x2="200" y2="245" stroke="#B8860B" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Peripheral Nodes: AI / Backend / Cloud / Data */}
                {/* Node 1: Top (LangGraph / ReAct) */}
                <g transform="translate(200, 95)" filter="url(#softShadow)">
                  <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#800020" strokeWidth="2" />
                  <circle cx="0" cy="0" r="14" fill="#F8EDEF" />
                  <path d="M -5 -3 L 0 -8 L 5 -3 M 0 -7 L 0 5 M -6 5 L 6 5" stroke="#800020" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                {/* Node 2: Right (FastAPI / Microservices) */}
                <g transform="translate(305, 200)" filter="url(#softShadow)">
                  <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#800020" strokeWidth="2" />
                  <circle cx="0" cy="0" r="14" fill="#F8EDEF" />
                  <rect x="-6" y="-6" width="12" height="12" rx="2" fill="none" stroke="#800020" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2" fill="#B8860B" />
                </g>

                {/* Node 3: Bottom (AWS / Docker Cloud) */}
                <g transform="translate(200, 305)" filter="url(#softShadow)">
                  <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#800020" strokeWidth="2" />
                  <circle cx="0" cy="0" r="14" fill="#F8EDEF" />
                  <path d="M -7 2 C -7 -1, -5 -3, -3 -3 C -2 -5, 2 -5, 3 -3 C 5 -3, 7 -1, 7 2 Z" fill="none" stroke="#800020" strokeWidth="1.5" />
                </g>

                {/* Node 4: Left (MLOps / Drift Monitoring) */}
                <g transform="translate(95, 200)" filter="url(#softShadow)">
                  <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#800020" strokeWidth="2" />
                  <circle cx="0" cy="0" r="14" fill="#F8EDEF" />
                  <path d="M -6 4 L -2 -2 L 2 1 L 6 -5" stroke="#800020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Central Identity Mark & Core Node */}
                <g transform="translate(200, 200)" filter="url(#softShadow)">
                  <circle cx="0" cy="0" r="46" fill="url(#burgundyGradient)" />
                  <circle cx="0" cy="0" r="42" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" strokeOpacity="0.8" />
                  
                  {/* Monogram 'RSS' inside center */}
                  <text 
                    x="0" 
                    y="7" 
                    textAnchor="middle" 
                    fill="#FAF8F5" 
                    fontFamily="Outfit, sans-serif" 
                    fontSize="22" 
                    fontWeight="800" 
                    letterSpacing="1.5"
                  >
                    RSS
                  </text>
                  
                  {/* Small gold sparkle indicator */}
                  <circle cx="26" cy="-24" r="4" fill="#E5C158" />
                </g>
              </svg>

              {/* Verified Quick Stat Badge */}
              <div className="hero-stat-badge">
                <div className="stat-icon">
                  <Award size={22} />
                </div>
                <div>
                  <div className="stat-number">
                    {education.university.cgpa.split(' ')[0]} CGPA
                  </div>
                  <div className="stat-label">
                    {education.university.institution} • Univ. 3rd Rank
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
