import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3" id="contact">
      <Container>
        <p>
          <a href="https://www.linkedin.com/in/krishshah273/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>&nbsp;-&nbsp;
          
          <a href="https://github.com/KrishShah1" target="_blank" rel="noopener noreferrer" className="text-white">GitHub</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
