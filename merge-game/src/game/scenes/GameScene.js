import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    // INITIAL STATE
    this.score         = 0;
    this.types         = ['apple','peach'];  // watermelons spawned only by combining
    this.currentType   = null;
    this.nextType      = null;
    this.previewSprite = null;
    this.nextImage     = null;
    this.endLineY      = 100;
    // Radii for each fruit
    this.radiusMap     = { apple: 40, peach: 75, melon: 120 };
  }

  preload() {
    // LOAD ASSETS
    this.load.image('apple',  'assets/apple.png');
    this.load.image('peach',  'assets/peach.png');
    this.load.image('melon',  'assets/watermelon.png');
  }

  create() {
    const { width, height } = this.scale;

    // BACKGROUND GRADIENT (yellow → purple)
    const bg = this.add.graphics();
    bg.fillGradientStyle(
      0xffff00, 0xffff00, // top-left & top-right: yellow
      0x800080, 0x800080, // bottom-left & bottom-right: purple
      1
    );
    bg.fillRect(0, 0, width, height);

    // FULL-SIZE BORDER
    this.add.rectangle(0, 0, width, height)
      .setOrigin(0)
      .setStrokeStyle(2, 0xffffff);

    // DEATH LINE
    this.add.line(
      0, 0,
      0, this.endLineY,
      width, this.endLineY,
      0xff0000
    ).setOrigin(0);

    // PHYSICS WORLD BOUNDS: full canvas
    this.items = this.physics.add.group();
    this.physics.world.setBounds(0, 0, width, height);

    // COLLIDER: combine like-types
    this.physics.add.collider(
      this.items, this.items,
      this.handleCollision, null, this
    );

    // SCORE DISPLAY
    this.scoreText = this.add.text(
      width - 16,
      16,
      this.score.toString(),
      { fontSize: '24px', color: '#ffffff' }
    ).setOrigin(1, 0);

    // INIT CURRENT / NEXT TYPES
    this.currentType = Phaser.Math.RND.pick(this.types);
    this.nextType    = Phaser.Math.RND.pick(this.types);

    // PREVIEW SPRITE (follows cursor)
    this.previewSprite = this.add
      .sprite(0, 0, this.currentType)
      .setAlpha(0.6);

    // NEXT ITEM DISPLAY (top-right)
    this.nextImage = this.add
      .image(width - 64, 32, this.nextType)
      .setOrigin(0)
      .setScale(0.7);

    // POINTER MOVE → update preview position
    this.input.on('pointermove', pointer => {
      this.previewSprite.setPosition(pointer.x, pointer.y);
    });

    // CLICK → spawn only if above death line, then advance queue
    this.input.on('pointerdown', pointer => {
      if (pointer.y < this.endLineY) {
        const sprite = this.items.create(
          pointer.x,
          pointer.y,
          this.currentType
        );

        // set circular body based on type
        const r = this.radiusMap[this.currentType] || 40;
        sprite.setCircle(r);
        sprite.setBounce(0.6);
        sprite.setCollideWorldBounds(true);
        sprite.body.onWorldBounds = true;

        // advance types
        this.currentType = this.nextType;
        this.nextType    = Phaser.Math.RND.pick(this.types);
        this.previewSprite.setTexture(this.currentType);
        this.nextImage.setTexture(this.nextType);
      }
    });
  }

  update(time, delta) {
    // GAME-OVER IF FRUIT LINGERS ABOVE LINE >5s
    this.items.getChildren().forEach(item => {
      if (item.y <= this.endLineY) {
        item.touchStart = item.touchStart ?? time;
        if (time - item.touchStart >= 5000) {
          this.gameOver();
        }
      } else {
        item.touchStart = null;
      }
    });
  }

  handleCollision(a, b) {
    // ONLY COMBINE IDENTICAL TYPES
    if (a.texture.key !== b.texture.key) return;

    let nextKey, pts;
    if      (a.texture.key === 'apple') { nextKey = 'peach'; pts = 5; }
    else if (a.texture.key === 'peach') { nextKey = 'melon'; pts = 10; }
    else                                { return; }

    // choose one to keep, destroy the other
    const winner = Phaser.Math.RND.pick([a, b]);
    const loser  = winner === a ? b : a;
    loser.destroy();

    // morph tween
    winner.setTexture(nextKey);
    winner.setScale(1.2);
    this.tweens.add({
      targets: winner,
      scale: 1,
      duration: 200,
      ease: 'Bounce'
    });

    // update score
    this.score += pts;
    this.scoreText.setText(this.score.toString());
  }

  gameOver() {
    this.physics.pause();
    this.input.disableInteractive();
    this.add.text(
      this.scale.width / 2,
      this.scale.height / 2,
      'Game Over',
      { fontSize: '48px', color: '#ff0000' }
    ).setOrigin(0.5);
  }
}
