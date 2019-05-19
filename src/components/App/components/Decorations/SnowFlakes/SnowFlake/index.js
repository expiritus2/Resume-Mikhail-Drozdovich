import SnowFlakes from '..';

class SnowFlake {
  constructor(x, y, ctx, changeDirection) {
    this.startX = x;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.changeDirection = changeDirection;
    this.size = SnowFlakes.getRandomInt(2, 5);
  }

  move() {
    this.y = this.y + Math.random();

    if (this.changeDirection) {
      this.x = this.x + Math.random();
    } else {
      this.x = this.x - Math.random();
    }

    if (this.changeDirection && this.startX - this.x <= -150) {
      this.changeDirection = !this.changeDirection;
    }

    if (!this.changeDirection && this.startX - this.x >= 150) {
      this.changeDirection = !this.changeDirection;
    }

    return this;
  }

  draw() {
    const centerX = this.x - (this.size / 2);
    const centerY = this.y - (this.size / 2);
    const radius = this.size / 2;

    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = '#f3f3f3';
    this.ctx.fill();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#f3f3f3';
    this.ctx.stroke();
  }
}

export default SnowFlake;
