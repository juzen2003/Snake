class Food {
  constructor() {
    this.unitSize = 20;
    this.food;
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

  drawRandomFood(canvasWidth, canvasHeight) {
    const randomX = Math.floor( Math.random() * (canvasWidth / this.unitSize));
    const randomY = Math.floor( Math.random() * (canvasHeight / this.unitSize));
    // debugger
    return {x: randomX, y: randomY};
  }
}

export default Food;
