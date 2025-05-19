import React, { useState } from 'react';
import GameMenu from './GameMenu.jsx';
import PhaserGame from './PhaserGame.jsx';

export default function App() {
  const [currentGame, setCurrentGame] = useState(null);

  return (
    <div id="app">
      {!currentGame ? (
        <GameMenu onSelect={key => setCurrentGame(key)} />
      ) : (
        <PhaserGame
          gameKey={currentGame}
          onBackToMenu={() => setCurrentGame(null)}
        />
      )}
    </div>
  );
}
