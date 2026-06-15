import React from 'react';
import pic from './pic.png';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div>
        <p className="hero-eyebrow">Software Engineer</p>
        <h1 className="hero-name">Krish Shah</h1>
        <p className="hero-bio">
          UCR Computer Engineering. I build web apps, embedded systems, and things I care about.
          Into rock climbing, basketball, and music theory.
        </p>
        <div className="hero-links">
          <a
            className="pill pill-primary"
            href="https://drive.google.com/file/d/1cyW_fODP9ZvWAWOqsSJ5bT2n46ym_2x_/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
          >Resume</a>
          <a
            className="pill pill-secondary"
            href="https://www.linkedin.com/in/krishshah273/"
            target="_blank" rel="noopener noreferrer"
          >LinkedIn</a>
          <a
            className="pill pill-secondary"
            href="https://github.com/KrishShah1"
            target="_blank" rel="noopener noreferrer"
          >GitHub</a>
        </div>
      </div>
      <img src={pic} alt="Krish Shah" className="hero-photo" />
    </section>
  );
}
