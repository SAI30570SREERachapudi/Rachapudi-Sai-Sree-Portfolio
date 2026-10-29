import React from 'react';
import { Briefcase, CheckCircle2, Cpu, Network, ShieldCheck, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const exp = portfolioData.experience[0];

  return (
    <section id="experience" className="section-wrapper" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Industry Internship</h2>
          <p className="section-subtitle">
            Verified professional internship focusing on practical AI systems, agentic workflows, and backend services.
          </p>
        </div>

        <div className="experience-container">
          <div className="experience-card">
            {/* Header */}
            <div className="exp-header">
              <div>
                <h3 className="exp-role-title">{exp.role}</h3>
                <div className="exp-company">{exp.company}</div>
              </div>

              <div className="exp-badge-group">
                <span className="exp-badge current">● {exp.badge}</span>
                <span className="exp-badge type">{exp.type}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="exp-summary">
              {exp.summary}
            </p>

            {/* Verified Responsibilities Grid */}
            <div className="exp-responsibilities">
              {exp.responsibilities.map((item, index) => (
                <div key={index} className="resp-card">
                  <div className="resp-title">
                    {item.title}
                  </div>
                  <p className="resp-detail">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Footer */}
            <div className="exp-tech-footer">
              <span className="exp-tech-label">Core Tooling:</span>
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
