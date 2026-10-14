import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Project Git Survival',
    category: 'systems',
    desc: 'Interactive 3-day chaos engineering workshop simulating real-world team merge conflicts and disaster recovery.',
    tags: ['Git', 'Bash', 'DevOps', 'CI/CD'],
    stars: 48,
  },
  {
    id: 2,
    title: 'Operation Phantom: OSINT Hunt',
    category: 'security',
    desc: 'A gamified browser-based cyber reconnaissance CTF uncovering digital footprints via metadata and web archiving.',
    tags: ['CyberSecurity', 'OSINT', 'Forensics'],
    stars: 64,
  },
  {
    id: 3,
    title: 'Vite React Portfolio Engine',
    category: 'web',
    desc: 'Blazing fast single-page application portfolio deployed autonomously using GitHub Actions and GitHub Pages.',
    tags: ['React 18', 'Vite', 'GitHub Actions', 'Pages'],
    stars: 32,
  },
  {
    id: 4,
    title: 'Human Consensus Tabletop Arena',
    category: 'systems',
    desc: 'Unplugged, physical tabletop simulation teaching Byzantine Fault Tolerance and proof-of-work mechanics.',
    tags: ['Systems', 'Distributed', 'Simulation'],
    stars: 29,
  },
];

const SKILLS = [
  '⚡ Git & GitHub Flow',
  '🐧 Linux Kernel & Bash',
  '⚛️ React 18 & JavaScript',
  '🚀 GitHub Actions CI/CD',
  '🕵️‍♂️ OSINT & Web Security',
  '🐍 Python & Fast Scripting',
  '📦 Docker & Containers',
  '🌐 Nginx & Web Hosting',
];

export default function App() {
  const [filter, setFilter] = useState('all');
  const [toastMessage, setToastMessage] = useState('');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shreeram@example.com');
    setToastMessage('✅ Contact email copied to clipboard!');
    setTimeout(() => setToastMessage(''), 2500);
  };

  return (
    <div className="app-wrapper">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-dot"></span>
          <span>Shreeram</span>
        </div>
        <div className="nav-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="nav-btn"
          >
            GitHub
          </a>
          <button onClick={handleCopyEmail} className="nav-btn active">
            Say Hello 💬
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="status-pill">
          <span>●</span> Deployed live via GitHub Actions & Pages
        </div>
        <h1>
          Building resilient systems, <br />
          <span className="gradient-text">one git commit at a time.</span>
        </h1>
        <p>
          Computer Science undergrad specializing in Systems, Cyber Security,
          and Automated DevOps pipelines. Core team member at SFG & NISB.
        </p>

        <div className="hero-actions">
          <button onClick={handleCopyEmail} className="btn-primary">
            📬 Get in Touch
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            ⭐ View GitHub Projects
          </a>
        </div>
      </header>

      {/* Metrics Counter Bar */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-num">3+</div>
          <div className="metric-label">Years of Linux & Git</div>
        </div>
        <div className="metric-card">
          <div className="metric-num">100%</div>
          <div className="metric-label">Automated Deployments</div>
        </div>
        <div className="metric-card">
          <div className="metric-num">500+</div>
          <div className="metric-label">Students Mentored at SFG</div>
        </div>
      </div>

      {/* Projects Section */}
      <section>
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="filter-pills">
            {['all', 'systems', 'security', 'web'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
              <div>
                <div className="tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  ★ {project.stars} stars on GitHub
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="skills-container">
        <h2 className="section-title">Core Toolkit & Competencies</h2>
        <div className="skills-list">
          {SKILLS.map((skill) => (
            <div key={skill} className="skill-chip">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Crafted with <strong>React 18 & Vite</strong> • Deployed with{' '}
          <strong>GitHub Pages</strong>
        </p>
        <p style={{ marginTop: '0.5rem', color: '#64748b', fontSize: '0.8rem' }}>
          &copy; 2026 Shreeram • Built for the SFG Workshop Showcase
        </p>
      </footer>

      {/* Copy Toast */}
      {toastMessage && <div className="toast-msg">{toastMessage}</div>}
    </div>
  );
}
