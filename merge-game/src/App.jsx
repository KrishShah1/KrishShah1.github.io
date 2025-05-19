// src/App.jsx
import { useState } from 'react';
import PhaserGame from './PhaserGame';
import StartScreen from './StartScreen';

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div id="app">
      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
      ) : (
        <PhaserGame />
      )}
    </div>
  );
}
