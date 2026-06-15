import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = -100; 
    window.scrollTo({
      top: section.offsetTop + offset,
      behavior: 'smooth'
    });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home" className="navbar-brand-custom mx-auto">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-center">
        <Nav className="mx-auto">
          <Nav.Link onClick={() => scrollToSection('hero')}>Home</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('education')}>Education</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('experience')}>Experience</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('extracurriculars')}>Extracurriculars</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
