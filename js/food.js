class Food {
  constructor() {
    this.unitSize = 20;
    this.foodPos;
  }

  drawFood(ctx) {
    const foodRadius = this.unitSize / 2;
    ctx.beginPath();
    // make it circle, can change later
    ctx.arc(this.foodPos.x * this.unitSize + this.unitSize/2 , this.foodPos.y * this.unitSize + this.unitSize/2, foodRadius, 0, Math.PI*2);
    // ctx.fillStyle = "#3D9728";
    // ctx.fillStyle = "#f1f1f1";
    ctx.fillStyle = "#9FE6AC";
    ctx.fill();

    // ctx.strokeStyle = "#FFF";
    ctx.strokeStyle = "#808080";
    ctx.lineWidth=3;
    ctx.stroke();

    ctx.closePath();
  }

  drawfoodPic(ctx) {
    const img = new Image();
    img.src = 'p1.jpg';
    // img = ctx.drawImage(img, 0, 0, this.unitSize, this.unitSize);
    const that = this;
    img.onload = function() {
    var pattern = ctx.createPattern(img, '');
    ctx.fillStyle = pattern;
    ctx.fillRect(that.foodPos.x * that.unitSize, that.foodPos.y * that.unitSize, that.unitSize, that.unitSize);
    };
  }

  validFood(snake, x, y) {
    for(let i = 0; i < snake.length; i++) {
      if(snake[i].x === x || snake[i].y === y || (snake[i].x === x && snake[i].y === y)) {
        return false;
      }
    }

    return true;
  }

  drawRandomFood(canvasWidth, canvasHeight, snake) {
    let randomX = Math.floor( Math.random() * (canvasWidth / this.unitSize));
    let randomY = Math.floor( Math.random() * (canvasHeight / this.unitSize));
    // debugger
    //make sure food is not generated at snake's position
    while(!this.validFood(snake, randomX, randomY)) {
      randomX = Math.floor( Math.random() * (canvasWidth / this.unitSize));
      randomY = Math.floor( Math.random() * (canvasHeight / this.unitSize));
    }
    // for(let i = 0; i < snake.length; i++) {
    //   if (snake[i].x === randomX || snake[i].y === randomY || snake[i].x === randomX && snake[i].y === randomY) {
    //     randomX = Math.floor( Math.random() * (canvasWidth / this.unitSize));
    //     randomY = Math.floor( Math.random() * (canvasHeight / this.unitSize));
    //   }
    // }

    this.foodPos = {x: randomX, y: randomY};
  }
}

export default Food;
