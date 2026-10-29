import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const emailTemplates = [
    {
      label: 'Say Hello',
      subject: 'Hello Sai Sree — Connecting via Portfolio',
      body: 'Hi Sai Sree,\n\nI reviewed your portfolio and would like to connect.\n\nBest regards,'
    },
    {
      label: 'Discuss AI / Internship Opportunities',
      subject: 'Internship Opportunity for Sai Sree',
      body: 'Hi Sai Sree,\n\nWe came across your work in agentic AI and backend engineering and would like to discuss opportunities with our team.\n\nBest regards,'
    },
    {
      label: 'Technical Collaboration',
      subject: 'Technical Collaboration Inquiry',
      body: 'Hi Sai Sree,\n\nI saw your projects on GitHub and would love to collaborate on a software engineering project.\n\nBest regards,'
    }
  ];

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to conversations about practical AI engineering, backend development, and software systems.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-card">
            <h3 className="contact-headline">
              Start a Conversation
            </h3>

            <p className="contact-desc">
              Whether you are looking to discuss engineering challenges, internship roles, or technical collaborations, I welcome direct outreach via email or LinkedIn.
            </p>

            {/* Email Box with One-Click Copy */}
            <div className="email-box">
              <span className="email-text">{personal.email}</span>
              <button 
                onClick={handleCopyEmail} 
                className="copy-btn"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} color="#16A34A" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Action Buttons */}
            <div className="contact-actions">
              <a 
                href={`mailto:${personal.email}`}
                className="btn btn-primary"
                aria-label="Open default mail client"
              >
                <Mail size={16} />
                <span>Open in Email App</span>
              </a>

              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Connect on LinkedIn (opens in new window)"
              >
                <LinkedinIcon size={16} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="Visit GitHub Profile (opens in new window)"
              >
                <GithubIcon size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Prefilled Mail Templates for convenience */}
            <div className="quick-mail-templates">
              <div className="templates-title">Quick Email Starters (click to launch mail client):</div>
              <div className="template-pills">
                {emailTemplates.map((template, i) => {
                  const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.body)}`;
                  return (
                    <a 
                      key={i} 
                      href={mailtoLink} 
                      className="template-pill"
                    >
                      {template.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
