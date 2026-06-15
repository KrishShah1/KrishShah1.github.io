import { useState, useEffect } from 'react';

const SWIPE_SEQ = ['up','up','down','down','left','right','left','right'];
const KEY_CODE  = 'loveshroo';

export default function useSecretUnlock() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (unlocked) return;

    let typed = '';
    const onKey = (e) => {
      typed = (typed + e.key.toLowerCase()).slice(-KEY_CODE.length);
      if (typed === KEY_CODE) setUnlocked(true);
    };

    let swipes = [];
    let t0 = null;

    const onTouchStart = (e) => {
      t0 = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = (e) => {
      if (!t0) return;
      const dx = e.changedTouches[0].clientX - t0.x;
      const dy = e.changedTouches[0].clientY - t0.y;
      t0 = null;
      if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return;
      const dir = Math.abs(dx) > Math.abs(dy)
        ? (dx > 0 ? 'right' : 'left')
        : (dy > 0 ? 'down'  : 'up');
      swipes = [...swipes, dir].slice(-SWIPE_SEQ.length);
      if (JSON.stringify(swipes) === JSON.stringify(SWIPE_SEQ)) setUnlocked(true);
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend',   onTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend',   onTouchEnd);
    };
  }, [unlocked]);

  return unlocked;
}
