// src/PhaserGame.jsx
import { useLayoutEffect, forwardRef } from 'react';
import createGame from './game/main';

const PhaserGame = forwardRef((props, ref) => {
  useLayoutEffect(() => {
    const game = createGame('game-container');
    return () => game.destroy(true);
  }, []);
  return <div id="game-container" />;
});

export default PhaserGame;
