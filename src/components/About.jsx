import React from 'react';
import { Bot, Server, Cloud, Cpu, MapPin, GraduationCap, Briefcase, FileCode } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal, education, experience } = portfolioData;

  const engineeringPillars = [
    {
      icon: <Bot size={20} />,
      title: "Agentic AI & Tool Calling",
      desc: "Constructing stateful ReAct loops with LangGraph and standardizing external tool execution via the Model Context Protocol (MCP)."
    },
    {
      icon: <Server size={20} />,
      title: "Resilient Backend Systems",
      desc: "Developing asynchronous FastAPI microservices, Spring Boot endpoints, and clean decoupled service contracts."
    },
    {
      icon: <Cloud size={20} />,
      title: "Cloud & DevOps Pipelines",
      desc: "Containerizing services with Docker, deploying to AWS, and automating quality gates via multi-stage GitHub Actions."
    },
    {
      icon: <Cpu size={20} />,
      title: "Computer Science Foundations",
      desc: "Grounding development in strong Data Structures, Algorithms, Object-Oriented principles, and performance awareness."
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Bridging Practical AI &amp; Reliable Software Engineering</h2>
          <p className="section-subtitle">
            Focused on practical implementations, scalable backend microservices, and continuous hands-on learning.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: First-Person Bio & Pillars */}
          <div className="about-text">
            {personal.extendedBio.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-pillars">
              {engineeringPillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-header">
                    {pillar.icon}
                    <h3 className="pillar-title">{pillar.title}</h3>
                  </div>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Facts Card */}
          <div className="about-facts-wrapper">
            <div className="about-facts-card">
              <div className="facts-header">
                <FileCode size={22} />
                <h3>Snapshot Details</h3>
              </div>

              <ul className="facts-list">
                <li className="fact-item">
                  <span className="fact-label">Current Role</span>
                  <span className="fact-value">{experience[0].role}</span>
                  <span className="fact-sub">{experience[0].company} • Professional Internship</span>
                </li>

                <li className="fact-item">
                  <span className="fact-label">Academic Degree</span>
                  <span className="fact-value">{education.university.degree}</span>
                  <span className="fact-sub">{education.university.institution} (2023–2027)</span>
                </li>

                <li className="fact-item">
                  <span className="fact-label">Academic CGPA</span>
                  <span className="fact-value" style={{ color: 'var(--color-burgundy-dark)' }}>
                    {education.university.cgpa}
                  </span>
                  <span className="fact-sub">{education.university.cgpaNote}</span>
                </li>

                <li className="fact-item">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">{personal.location}</span>
                  <span className="fact-sub">Andhra Pradesh, India</span>
                </li>

                <li className="fact-item">
                  <span className="fact-label">Primary Interests</span>
                  <span className="fact-value">Agentic AI, Backend Engineering, Cloud, DevOps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
