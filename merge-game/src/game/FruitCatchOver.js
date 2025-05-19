import Phaser from 'phaser';

export default class FruitCatchOver extends Phaser.Scene {
  constructor() {
    super({ key: 'FruitCatchOver' });
  }

  init(data) {
    this.finalScore = data.score;
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(0, 0, width, height, 0x000000, 0.5).setOrigin(0);

    this.add
      .text(width / 2, height / 2 - 50, 'Game Over', {
        fontSize: '48px',
        fill: '#fff'
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2, `Score: ${this.finalScore}`, {
        fontSize: '32px',
        fill: '#fff'
      })
      .setOrigin(0.5);

    const restartText = this.add
      .text(width / 2, height / 2 + 100, 'Click to Restart', {
        fontSize: '24px',
        fill: '#fff',
        backgroundColor: '#000',
        padding: { x: 10, y: 5 }
      })
      .setOrigin(0.5)
      .setInteractive();

    restartText.on('pointerdown', () => {
      this.scene.start('FruitCatchScene');
    });
      
    const menuText = this.add.text(width/2, height/2 + 150, 'Back to Menu', {
      fontSize: '24px',
      fill: '#fff',
      backgroundColor: '#000',
      padding: { x: 10, y: 5 }
    })
    .setOrigin(0.5)
    .setInteractive();

    menuText.on('pointerdown', () => {
      window.dispatchEvent(new CustomEvent('game-menu'));
    });

  }
}
