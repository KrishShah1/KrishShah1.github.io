// src/game/main.js
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';

export default function createGame(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: containerId,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: { gravity: { y: 300 }, debug: false }
    },
    scene: [ GameScene ]
  });
}
