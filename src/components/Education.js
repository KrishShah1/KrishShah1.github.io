import React from 'react';

export default function Education() {
  return (
    <section className="section" id="education">
      <p className="section-label">Education</p>
      <div className="edu-list">
        <div>
          <p className="edu-degree">BS Computer Engineering (+ MS, 2025)</p>
          <p className="edu-school">University of California, Riverside</p>
          <p className="edu-detail">Honors Program · Chancellor's & Dean's Honor Roll · Tau Beta Pi</p>
        </div>
        <div>
          <p className="edu-degree">High School Diploma</p>
          <p className="edu-school">Ruben S. Ayala High School, Chino Hills CA</p>
          <p className="edu-detail">AP Scholar with Honors · National Honor Society</p>
        </div>
      </div>
    </section>
  );
}
