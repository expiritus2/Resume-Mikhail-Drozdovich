import SnowFlake from './SnowFlake';

let startTime = null;

class SnowFlakes {
  constructor(ctx, amountFlakes, fieldSize) {
    this.ctx = ctx;
    this.amountFlakes = amountFlakes;
    this.fieldSize = fieldSize;
    this.snowFlakes = [];
    this.startSnowFlakePos = { x: 0, y: 0 };
  }

  defineStartPosition() {
    const randomX = this.constructor.getRandomInt(0, this.fieldSize.width + 150);
    const randomY = this.constructor.getRandomInt(0, this.fieldSize.height);

    this.startSnowFlakePos = { x: randomX, y: randomY };

    return this;
  }

  createSnowFlakes() {
    for (let i = 0; i < this.amountFlakes; i++) {
      this.defineStartPosition();
      const half = i % 2 === 0;

      let changeDirection = false;

      if (half) {
        changeDirection = true;
      }

      const snowFlake = new SnowFlake(this.startSnowFlakePos.x, this.startSnowFlakePos.y, this.ctx, changeDirection);
      this.snowFlakes.push(snowFlake);
    }

    return this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.fieldSize.width, this.fieldSize.height);
    this.snowFlakes.forEach((snowFlake) => {
      snowFlake.draw();
    });

    return this;
  }

  move() {
    this.snowFlakes.forEach((snowFlake, index) => {
      const randomSnowFlake = this.constructor.getRandomInt(0, this.snowFlakes.length);

      snowFlake.move();
      if (randomSnowFlake > index) {
        snowFlake.move();
      }

      if (snowFlake.y > this.fieldSize.height) {
        snowFlake.y = 0; // eslint-disable-line
      }

      if (snowFlake.x > this.fieldSize.width) {
        snowFlake.x = -150; // eslint-disable-line
      }

      if (snowFlake.x < 0) {
        snowFlake.x = this.fieldSize.width + 150; // eslint-disable-line
      }
    });

    return this;
  }

  run(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = startTime - timestamp;

    this.move();
    this.draw();

    if (progress < 2000) {
      window.requestAnimationFrame(this.run.bind(this));
    }

    return this;
  }


  start() {
    this.createSnowFlakes();
    this.draw();
    window.requestAnimationFrame(this.run.bind(this));

    return this;
  }

  static getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFlor = Math.floor(max);
    return Math.floor(Math.random() * (maxFlor - minCeil)) + minCeil;
  }
}

export default SnowFlakes;
