import React from 'react';

const projects = [
  {
    emoji: '🕸️',
    name: 'Graph',
    desc: 'Interactive knowledge graph for notes and connections.',
    url: 'https://graph-umber.vercel.app',
    accent: 'card-purple',
  },
  {
    emoji: '📊',
    name: 'Life Dashboard',
    desc: 'Personal dashboard for habits, goals, and daily metrics.',
    url: 'https://dashboard-nine-sigma-97.vercel.app',
    accent: 'card-blue',
  },
  {
    emoji: '🎵',
    name: 'Spotify',
    desc: 'Deep listening analytics — heatmaps, streaks, time-of-day stats.',
    url: 'https://spotify-api-creator.vercel.app',
    accent: 'card-spotify',
  },
  {
    emoji: '⚽',
    name: 'World Cup',
    desc: 'Live tournament tracker with standings and real-time scores.',
    url: 'https://world-cup-virid-psi.vercel.app',
    accent: 'card-green',
  },
  {
    emoji: '🍄',
    name: 'Shroo',
    desc: 'A couples app for sharing moments and staying connected.',
    url: 'https://shroo.vercel.app',
    accent: 'card-pink',
  },
  {
    emoji: '🎮',
    name: 'Merge Game',
    desc: 'Suika-style merge game built with Phaser 3 + React.',
    url: null,
    accent: 'card-amber',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">Projects</p>
      <div className="projects-grid">
        {projects.map((p) => {
          const Tag = p.url ? 'a' : 'div';
          const props = p.url
            ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          return (
            <Tag key={p.name} className={`project-card ${p.accent}`} {...props}>
              <span className="project-emoji">{p.emoji}</span>
              <span className="project-name">{p.name}</span>
              <span className="project-desc">{p.desc}</span>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
