import React from 'react';

const roles = [
  {
    role: 'Media Development Intern',
    org: 'University of California, Riverside',
    period: 'Mar 2023 – Present',
    desc: 'Building adaptive learning platforms, interactive Canvas courses, AI voice models, and iOS apps in Flutter/Swift for 10,000+ students.',
  },
  {
    role: 'Document Control Manager',
    org: 'Control Air Enterprises',
    period: 'Jan 2024 – Present',
    desc: 'Managing document control processes company-wide, streamlining workflows, and training teams on best practices and compliance.',
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label">Experience</p>
      <div className="exp-list">
        {roles.map((r) => (
          <div className="exp-item" key={r.role}>
            <p className="exp-role">{r.role}</p>
            <p className="exp-meta">{r.org} · {r.period}</p>
            <p className="exp-desc">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
