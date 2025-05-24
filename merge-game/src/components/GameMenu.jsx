import React from 'react';

const games = [
  { key: 'fruit-catch', name: 'Fruit Catch' },
  { key: 'snake',       name: 'Snake' },
  // future games:
  // { key: 'tetris', name: 'Tetris' },
  // { key: 'snake',  name: 'Snake'  },
];

export default function GameMenu({ onSelect }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        gap: '1rem',
        background: '#111'
      }}
    >
      <h1 style={{ color: '#fff' }}>Hi Shroo!! Let's play some games!</h1>
      {games.map(game => (
        <button
          key={game.key}
          onClick={() => onSelect(game.key)}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            cursor: 'pointer',
            borderRadius: '4px',
            border: 'none',
            background: '#007bff',
            color: '#fff'
          }}
        >
          {game.name}
        </button>
      ))}
    </div>
  );
}
