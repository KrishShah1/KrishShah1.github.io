import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div style={{ overflowY: 'auto' }}>
      <NavBar />
      <HeroSection />
      <About />
      <Education />
      <Experience />
      <Extracurriculars />
      <Footer />
    </div>
  );
}

export default App;
