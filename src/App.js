import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/HeroSection';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
