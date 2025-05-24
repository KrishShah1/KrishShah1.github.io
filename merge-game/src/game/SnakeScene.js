import Phaser from 'phaser';

export default class SnakeScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SnakeScene' });
    this.cellSize = 16;
    this.moveInterval = 100;
    this.score = 0;
  }


  create() {
    const { width, height } = this.scale;
    this.gridWidth = Math.floor(width / this.cellSize);
    this.gridHeight = Math.floor(height / this.cellSize);

    this.direction = new Phaser.Math.Vector2(1, 0);
    this.nextDirection = this.direction.clone();

    const startX = Math.floor(this.gridWidth / 2);
    const startY = Math.floor(this.gridHeight / 2);
    this.snake = [{ x: startX, y: startY }];

    this.graphics = this.add.graphics()
    .fillGradientStyle(
      0xFFFFE0, // top-left (light yellow)
      0xFFFFE0, // top-right
      0x800080, // bottom-left (purple)
      0x800080, // bottom-right
      1       // alpha
    )
    .fillRect(0, 0, width, height);
    this.foodGraphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });

    this.spawnFood();

    this.scoreText = this.add.text(10, 10, 'Score: 0', {
      fontSize: '24px',
      fill: '#fff'
    });

    this.input.keyboard.on('keydown', this.handleKeyInput, this);
    this.time.addEvent({
      delay: this.moveInterval,
      callback: this.moveSnake,
      callbackScope: this,
      loop: true
    });
  }

  handleKeyInput(event) {
    switch (event.code) {
      case 'ArrowUp':
        if (this.direction.y !== 1) this.nextDirection.set(0, -1);
        break;
      case 'ArrowDown':
        if (this.direction.y !== -1) this.nextDirection.set(0, 1);
        break;
      case 'ArrowLeft':
        if (this.direction.x !== 1) this.nextDirection.set(-1, 0);
        break;
      case 'ArrowRight':
        if (this.direction.x !== -1) this.nextDirection.set(1, 0);
        break;
    }
  }

  spawnFood() {
    const getRandomPos = () => ({
      x: Phaser.Math.Between(0, this.gridWidth - 1),
      y: Phaser.Math.Between(0, this.gridHeight - 1)
    });
    let pos;
    do {
      pos = getRandomPos();
    } while (this.snake.some(seg => seg.x === pos.x && seg.y === pos.y));
    this.food = pos;
  }

  moveSnake() {
    this.direction = this.nextDirection.clone();
    const head = this.snake[0];
    const newHead = { x: head.x + this.direction.x, y: head.y + this.direction.y };

    // Wall collision
    if (
      newHead.x < 0 || newHead.x >= this.gridWidth ||
      newHead.y < 0 || newHead.y >= this.gridHeight
    ) {
      return this.gameOver();
    }
    // Self collision
    if (this.snake.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
      return this.gameOver();
    }

    this.snake.unshift(newHead);
    if (newHead.x === this.food.x && newHead.y === this.food.y) {
      this.score++;
      this.scoreText.setText('Score: ' + this.score);
      this.spawnFood();
    } else {
      this.snake.pop();
    }

    this.draw();
  }

  draw() {
    this.graphics.clear();
    for (const segment of this.snake) {
      this.graphics.fillRect(
        segment.x * this.cellSize,
        segment.y * this.cellSize,
        this.cellSize - 1,
        this.cellSize - 1
      );
    }
    this.foodGraphics.clear();
    this.foodGraphics.fillRect(
      this.food.x * this.cellSize,
      this.food.y * this.cellSize,
      this.cellSize - 1,
      this.cellSize - 1
    );
  }

  gameOver() {
    this.scene.start('SnakeGameOver', { score: this.score });
  }
}
