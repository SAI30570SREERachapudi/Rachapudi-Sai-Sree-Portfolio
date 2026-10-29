import React, { useState } from 'react';
import { 
  Bot, 
  Server, 
  Code2, 
  Cloud, 
  Layout, 
  Database, 
  Cpu, 
  Wrench,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { categories } = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'ai': return <Bot size={20} />;
      case 'backend': return <Server size={20} />;
      case 'programming': return <Code2 size={20} />;
      case 'cloud': return <Cloud size={20} />;
      case 'frontend': return <Layout size={20} />;
      case 'databases': return <Database size={20} />;
      case 'cs_core': return <Cpu size={20} />;
      case 'tools': return <Wrench size={20} />;
      default: return <Layers size={20} />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Tooling</div>
          <h2 className="section-title">Verified Skills &amp; Capabilities</h2>
          <p className="section-subtitle">
            Technologies and engineering domains backed by real project implementations and coursework.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skills Category Filter">
          <button
            role="tab"
            aria-selected={selectedCategory === 'all'}
            className={`skill-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Disciplines ({categories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`skill-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="category-card-header">
                {getCategoryIcon(category.id)}
                <h3 className="category-card-title">{category.name}</h3>
              </div>

              <ul className="skill-badges-list">
                {category.skills.map((skill, index) => (
                  <li key={index} className="skill-badge-item">
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="skill-item-focus">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
