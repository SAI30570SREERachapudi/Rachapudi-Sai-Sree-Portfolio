import React, { useState } from 'react';
import { 
  ExternalLink, 
  Bot, 
  GitBranch, 
  Cloud, 
  ShieldCheck, 
  ShoppingCart,
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects, prototypesNote } = portfolioData;
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'Agentic AI', label: 'Agentic AI' },
    { id: 'Cloud & Backend', label: 'Cloud & Backend' },
    { id: 'MLOps & CI/CD', label: 'MLOps & DevOps' }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  const renderProjectSvg = (iconType) => {
    switch (iconType) {
      case 'agent':
        return (
          <svg className="project-visual-svg" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="38" stroke="#800020" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="50" cy="50" r="26" fill="#F8EDEF" stroke="#800020" strokeWidth="1.5" />
            <path d="M 38 42 L 50 32 L 62 42 L 50 52 Z" fill="none" stroke="#800020" strokeWidth="1.75" />
            <circle cx="50" cy="65" r="4" fill="#B8860B" />
            <circle cx="30" cy="50" r="3" fill="#800020" />
            <circle cx="70" cy="50" r="3" fill="#800020" />
          </svg>
        );
      case 'pipeline':
        return (
          <svg className="project-visual-svg" viewBox="0 0 100 100" fill="none">
            <rect x="18" y="32" width="64" height="36" rx="6" fill="#F8EDEF" stroke="#800020" strokeWidth="1.5" />
            <path d="M 28 50 L 40 50 M 48 50 L 60 50 M 68 50 L 72 50" stroke="#800020" strokeWidth="2" strokeLinecap="round" />
            <circle cx="44" cy="50" r="4" fill="#B8860B" />
            <circle cx="64" cy="50" r="4" fill="#800020" />
            <path d="M 24 24 L 76 24" stroke="#E8E2D7" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M 24 76 L 76 76" stroke="#E8E2D7" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        );
      case 'cloud':
        return (
          <svg className="project-visual-svg" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="36" stroke="#B8860B" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 4" />
            <path d="M 32 58 C 26 58 22 53 22 47 C 22 42 26 38 31 38 C 33 30 40 25 49 25 C 58 25 65 31 67 39 C 72 39 76 43 76 48 C 76 53 72 58 66 58 Z" fill="#F8EDEF" stroke="#800020" strokeWidth="1.75" />
            <rect x="42" y="66" width="16" height="8" rx="2" fill="#FFFFFF" stroke="#800020" strokeWidth="1.5" />
          </svg>
        );
      case 'shield':
        return (
          <svg className="project-visual-svg" viewBox="0 0 100 100" fill="none">
            <path d="M 50 20 L 74 30 V 52 C 74 68 50 80 50 80 C 50 80 26 68 26 52 V 30 Z" fill="#F8EDEF" stroke="#800020" strokeWidth="1.75" />
            <path d="M 42 48 L 48 54 L 60 40" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return (
          <svg className="project-visual-svg" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="32" fill="#F8EDEF" stroke="#800020" strokeWidth="1.5" />
            <path d="M 36 38 H 64 V 62 H 36 Z" fill="none" stroke="#800020" strokeWidth="1.5" />
            <circle cx="42" cy="68" r="3" fill="#B8860B" />
            <circle cx="58" cy="68" r="3" fill="#B8860B" />
          </svg>
        );
    }
  };

  return (
    <section id="projects" className="section-wrapper" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Software Portfolio</div>
          <h2 className="section-title">Verified Featured Projects</h2>
          <p className="section-subtitle">
            Authentic software architectures, agentic pipelines, and full-stack systems with public source repositories.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar" role="tablist" aria-label="Projects Filter">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              role="tab"
              aria-selected={filter === opt.id}
              className={`project-filter-btn ${filter === opt.id ? 'active' : ''}`}
              onClick={() => setFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Header Visual */}
              <div className="project-card-visual">
                {renderProjectSvg(project.svgIcon)}
                <div className="project-card-badges">
                  <span className="project-category-badge">{project.category}</span>
                  <span className="project-status-badge">{project.status}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-tagline">{project.tagline}</p>

                {/* Problem Statement */}
                <div className="project-section-label">Problem Solved:</div>
                <p className="project-problem-text">{project.problem}</p>

                {/* Technical Contribution */}
                <div className="project-section-label">Engineering Contribution:</div>
                <div className="project-contribution-box">
                  <p className="project-contribution-text">{project.contribution}</p>
                </div>

                {/* Key Highlights */}
                <ul className="project-highlights-list">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="project-highlight-item">
                      <span className="highlight-bullet">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="project-card-tags">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="project-pill-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Footer with Verified Link */}
                <div className="project-card-footer">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-repo-link"
                    aria-label={`View ${project.title} repository on GitHub (opens in new window)`}
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Specialized Algorithmic Prototype Note */}
        <div className="prototype-callout">
          <div className="prototype-icon">
            <Lightbulb size={24} />
          </div>
          <div className="prototype-content">
            <h4>{prototypesNote.title}</h4>
            <p>{prototypesNote.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
