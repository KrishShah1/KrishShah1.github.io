import Phaser from 'phaser';

export default class FruitCatchScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FruitCatchScene' });
    this.types = ['krish1', 'shroo1'];       
    this.endLineY = 150;                   
    this.radiusMap = { krish1: 40, shroo1: 60, krish2: 80, shroo2: 100,  krish3: 120 };
    this.pushForce = 100;
  }
  
  init() {
    this.score = 0;                         
    this.currentType = null;                
    this.nextType = null;                  
    this.previewSprite = null;              
    this.nextImage = null;     
    this.physics.world.gravity.y = 800;
    this.dropCooldown = 1000; 
    this.canDrop      = true;
  }
  
  preload() {
    this.load.image('krish1', 'assets/krish1.png');
    this.load.image('shroo1', 'assets/shroo1.png');
    this.load.image('krish2', 'assets/krish2.png');
    this.load.image('shroo2', 'assets/shroo2.png');
    this.load.image('krish3', 'assets/krish3.png');
  }
  
  create() {
    const { width, height } = this.scale;
    
    this.add.graphics()
    .fillStyle(0xffffff, 1)
    .fillRect(0, 0, width, height);
    
    this.add.rectangle(0, 0, width, height)
    .setOrigin(0)
    .setStrokeStyle(2, 0xffffff);
    
    this.add.line(0, 0, 0, this.endLineY, width, this.endLineY, 0xff0000)
    .setOrigin(0);
    
    this.items = this.physics.add.group();
    
    this.physics.world.setBounds(0, 0, width, height);
    
    this.physics.add.collider(
      this.items,
      this.items,
      (a, b) => this.onItemCollide(a, b),
      null,
      this
    );
    
    this.scoreText = this.add.text(width - 16, 16, this.score.toString(), {
      fontSize: '36px',
      color: 'black'
    }).setOrigin(1, 0);
    
    this.currentType = Phaser.Math.RND.pick(this.types);
    this.nextType    = Phaser.Math.RND.pick(this.types);
    
    this.previewSprite = this.add.sprite(0, 0, this.currentType)
    .setAlpha(0.6);
    
    this.nextImage = this.add.image(32, 32, this.nextType)
    .setOrigin(0)
    .setScale(0.7);
    
    this.input.on('pointermove', pointer => {
      const x = Phaser.Math.Clamp(pointer.x, 0, width);
      const y = Phaser.Math.Clamp(pointer.y, 0, this.endLineY);
      this.previewSprite.setPosition(x, y);
    });
    
    this.input.on('pointerdown', pointer => {
      if (pointer.y <= this.endLineY && this.canDrop) {
        // immediately block further drops
        this.canDrop = false;
        
        // spawn the fruit
        this.spawnFruit(pointer.x, pointer.y, this.currentType);
        
        // roll the next types
        this.currentType = this.nextType;
        this.nextType    = Phaser.Math.RND.pick(this.types);
        this.previewSprite.setTexture(this.currentType);
        this.nextImage.setTexture(this.nextType);
        
        // schedule re-enable after cooldown
        this.time.delayedCall(this.dropCooldown, () => {
          this.canDrop = true;
        });
      }
    });
  }
  
  update(time) {
    this.items.getChildren().forEach(item => {
      if (item.y <= this.endLineY) {
        item.touchStart = item.touchStart ?? time;
        if (time - item.touchStart >= 3000) {
          this.FruitCatchOver();
        }
      } else {
        item.touchStart = null;
      }
    });
  }
  
  onItemCollide(a, b) {
    if (a.texture.key === b.texture.key) {
      this.handleCollision(a, b);
    } else {
      this.separateObjects(a, b);
    }
  }
  
  separateObjects(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = dx / dist;
    const ny = dy / dist;
    a.body.setVelocity(nx * this.pushForce, ny * this.pushForce);
    b.body.setVelocity(-nx * this.pushForce, -ny * this.pushForce);
  }
  
  handleCollision(a, b) {
    const key = a.texture.key;
    let nextKey, pts;
    if      (key === 'krish1') { nextKey = 'shroo1'; pts = 5; }
    else if (key === 'shroo1') { nextKey = 'krish2'; pts = 10; }
    else if (key === 'krish2') { nextKey = 'shroo2'; pts = 15; }
    else if (key === 'shroo2') { nextKey = 'krish3'; pts = 20; }
    else { return; }
    
    const winner = Phaser.Math.RND.pick([a, b]);
    const loser  = winner === a ? b : a;
    loser.destroy();
    
    winner.setTexture(nextKey);
    winner.setScale(1.2);
    winner.body.setVelocity(0, -200);
    const rNew = this.radiusMap[nextKey];
    const offsetNew = winner.width / 2 - rNew;
    winner.body.setCircle(rNew, offsetNew, offsetNew);
    winner.setBounce(0.2);
    winner.setCollideWorldBounds(true);
    this.tweens.add({ targets: winner, scale: 1, duration: 200, ease: 'Bounce' });
    
    this.score += pts;
    this.scoreText.setText(this.score.toString());
    
    const { height } = this.scale;
    if (winner.y + rNew > height) {
      winner.y = height - rNew;
    }
  }
  
  spawnFruit(x, y, type) {
    const sprite = this.items.create(x, y, type);
    const r = this.radiusMap[type];
    const offset = sprite.width / 2 - r;
    sprite.setCircle(r, offset, offset);
    sprite.setBounce(0.2);
    sprite.setCollideWorldBounds(true);
  }
  
  FruitCatchOver() {
    this.physics.pause();
    this.scene.start('FruitCatchOver', { score: this.score });
  }
}
