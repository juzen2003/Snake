class Food {
  constructor() {
    this.unitSize = 20;

  }

  drawFood(ctx, x, y) {
    const foodRadius = this.unitSize / 2;
    ctx.beginPath();
    // make it circle, can change later
    ctx.arc(x * this.unitSize + this.unitSize/2 , y * this.unitSize + this.unitSize/2, foodRadius, 0, Math.PI*2);
    ctx.fillStyle = "#3D9728";
    ctx.fill();
    ctx.closePath();
  }
}

export default Food;
