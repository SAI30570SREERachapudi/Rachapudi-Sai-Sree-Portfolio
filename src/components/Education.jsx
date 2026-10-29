import React from 'react';
import { GraduationCap, Award, BookOpen, Star, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { university, foundation } = portfolioData.education;

  return (
    <section id="education" className="section-wrapper" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Academic Background</div>
          <h2 className="section-title">Education &amp; Distinctions</h2>
          <p className="section-subtitle">
            Strong academic performance, computer science coursework, and verified institutional recognitions.
          </p>
        </div>

        <div className="education-grid">
          {/* Main University Card */}
          <div className="university-card">
            <div className="university-header">
              <div className="univ-icon-badge">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="univ-title">{university.institution}</h3>
                <div className="univ-period">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {university.period} • {university.status}
                </div>
              </div>
            </div>

            <p className="degree-name">{university.degree}</p>

            {/* CGPA Box */}
            <div className="cgpa-highlight-box">
              <div className="cgpa-label-group">
                <span className="cgpa-label">Cumulative GPA</span>
                <span className="cgpa-note">{university.cgpaNote}</span>
              </div>
              <div className="cgpa-score">{university.cgpa.split(' ')[0]}</div>
            </div>

            {/* Distinctions */}
            <div className="distinctions-block">
              <h4>
                <Award size={18} color="var(--color-burgundy)" />
                Verified Academic Distinctions
              </h4>
              <ul className="distinctions-list">
                {university.distinctions.map((dist, idx) => (
                  <li key={idx} className="distinction-item">
                    <Star size={18} className="distinction-icon" />
                    <div>
                      <div className="distinction-title">{dist.title}</div>
                      <div className="distinction-detail">{dist.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Foundation Education Side Column */}
          <div className="foundation-education">
            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
              Foundation Education
            </h4>
            {foundation.map((item, index) => (
              <div key={index} className="foundation-card">
                <div className="foundation-header">
                  <h5 className="foundation-name">{item.institution}</h5>
                  <span className="foundation-score">{item.score}</span>
                </div>
                <p className="foundation-program">{item.program}</p>
                <span className="foundation-period">{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
