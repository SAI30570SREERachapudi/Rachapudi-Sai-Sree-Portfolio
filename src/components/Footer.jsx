import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-monogram">
              {personal.initials}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {personal.name}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                {personal.headline}
              </div>
            </div>
          </div>

          <ul className="footer-links" aria-label="Social and Profile Links">
            <li>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} style={{ display: 'inline', marginRight: '4px' }} />
                GitHub
              </a>
            </li>
            <li>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} style={{ display: 'inline', marginRight: '4px' }} />
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href={`mailto:${personal.email}`} 
                className="footer-link"
                aria-label="Send Email"
              >
                <Mail size={16} style={{ display: 'inline', marginRight: '4px' }} />
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div>
            © {currentYear} {personal.name}. Built with React &amp; Vite. Hosted on GitHub Pages.
          </div>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
