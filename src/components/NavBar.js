import React from 'react';

export default function NavBar() {
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <nav>
      <div className="nav-inner">
        <a href="#hero" className="nav-brand">Krish Shah</a>
        <ul className="nav-links">
          <li><a href="#experience" onClick={e => { e.preventDefault(); scroll('experience'); }}>experience</a></li>
          <li><a href="#education"  onClick={e => { e.preventDefault(); scroll('education');  }}>education</a></li>
          <li><a href="#projects"   onClick={e => { e.preventDefault(); scroll('projects');   }}>projects</a></li>
        </ul>
      </div>
    </nav>
  );
}
