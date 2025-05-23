import React, { useLayoutEffect } from 'react';
import { createGame } from '../game/main.js';
import '../styles/game.css';   // new stylesheet file

export default function PhaserGame({ gameKey, onBackToMenu }) {
  useLayoutEffect(() => {
    const game = createGame('game-container', gameKey);
    return () => game.destroy(true);
  }, [gameKey]);

  React.useEffect(() => {
    const handler = () => onBackToMenu();
    window.addEventListener('game-menu', handler);
    return () => window.removeEventListener('game-menu', handler);
  }, [onBackToMenu]);

  // add gameKey as className for per-game styling
  return <div id="game-container" className={`game-screen ${gameKey}`} />;
}