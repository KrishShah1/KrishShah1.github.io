import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
  }, []);

  return (
    <Container className="my-5 about-section" id="about" ref={aboutRef}>
      <h2 className="text-center">About Me</h2>
      <p className="text-center"> Hello! My name is Krish Shah and I am a passionate software enginner.</p>
      <p className="text-center">I am a complex problem-solver with analytical and driven mindset. </p>
      <p className="text-center">I love Web Development and Embedded Systems and offering skills in C++ and Python programming.</p>
      <p className="text-center">I am also interested in Rock Climbing, Basketball, and Music Theory</p>

      <a href="https://drive.google.com/file/d/1cyW_fODP9ZvWAWOqsSJ5bT2n46ym_2x_/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
    </Container>
  );
}

export default About;
