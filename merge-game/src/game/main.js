import Phaser from 'phaser';
import FruitCatchScene from './FruitCatchScene.js';
import FruitCatchOver from './FruitCatchOver.js';
import SnakeScene from './SnakeScene.js';
import SnakeGameOver from './SnakeGameOver.js';

export function createGame(containerId, gameKey) {
  let scenes;
  switch (gameKey) {
    case 'fruit-catch':
      scenes = [FruitCatchScene, FruitCatchOver];
      break;
    case 'snake':
      scenes = [SnakeScene, SnakeGameOver];
      break;
    default:
      scenes = [FruitCatchScene, FruitCatchOver];
  }

  const config = {
    type: Phaser.AUTO,
    width: window.innerWidth * 0.9,
    height: window.innerHeight * 0.9,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: scenes,
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
  };

  const game = new Phaser.Game(config);

  window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth * 0.9, window.innerHeight * 0.9);
  });

  return game;
}
