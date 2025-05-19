// src/StartScreen.jsx
export default function StartScreen({ onStart }) {
    return (
      <div
        style={{
          width: '100vw', height: '100vh',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          background: '#1a1a1a', color: '#fff'
        }}
      >
        <button
          onClick={onStart}
          style={{
            padding: '1rem 2rem', fontSize: '1.5rem',
            borderRadius: '8px', border: 'none', cursor: 'pointer'
          }}
        >
          Start Game
        </button>
      </div>
    );
  }
  