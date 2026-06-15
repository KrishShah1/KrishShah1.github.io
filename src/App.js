import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/HeroSection';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import useSecretUnlock from './hooks/useSecretUnlock';
import './App.css';

export default function App() {
  const unlocked = useSecretUnlock();
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (unlocked) {
      setToast(true);
      const t = setTimeout(() => setToast(false), 2500);
      return () => clearTimeout(t);
    }
  }, [unlocked]);

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects unlocked={unlocked} />
      </main>
      <Footer />
      {toast && (
        <div className="unlock-toast">
          🔓 unlocked
        </div>
      )}
    </>
  );
}
