class Snake {
  constructor() {
    this.snakeArr = [];
    this.unitSize = 20;
    this.headX = 0;
    this.headY = 0;
    this.initSnake();
  }

  initSnake() {
    let length = 5;
    for(let i = 0; i < length; i++) {
      // snake head at index 0
      this.snakeArr.unshift({x: i, y: 0});
    }
    this.headX = this.snakeArr[0].x;
    this.headY = this.snakeArr[0].y;
    // debugger;
  }

  drawAUnitSquare(ctx, x, y) {
    ctx.beginPath();
    ctx.rect(x * this.unitSize, y * this.unitSize, this.unitSize, this.unitSize);
    // ctx.fillStyle = "#F5FA30";
    // ctx.fillStyle = "#000";
    // ctx.fillStyle = "#585858";
    ctx.fillStyle = "#315BCB";

    ctx.fill();
    // border
    // ctx.strokeStyle = "red";
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth=3;
    ctx.stroke();
    ctx.closePath();
  }

  // draw snake body (build up by unit square)
  drawSnake(ctx) {
    for(let i = 0; i < this.snakeArr.length; i++) {
      this.drawAUnitSquare(ctx, this.snakeArr[i].x, this.snakeArr[i].y);
    }
  }

  snakeMovement(direction) {
    // update the head to get the new head
    switch (direction) {
      case "up":
        this.headY--;
        break;
      case "down":
        this.headY++;
        break;
      case "left":
        this.headX--;
        break;
      case "right":
        this.headX++;
        break;
      // default:
      //   this.headX = this.headX;
      //   this.headY = this.headY;
      //   break;
    }
  }

  // does snake eat?
  eat(food) {
    // new head after updating headX & headY
    if(this.headX === food.foodPos.x && this.headY === food.foodPos.y) {
      let newHead = {x: this.headX, y: this.headY};
      this.snakeArr.unshift(newHead);
      return true;
    } else {
    // unshift new head to snakeArr
      this.snakeArr.pop();
      this.snakeArr.unshift({x: this.headX, y: this.headY});
      return false;
    }
    // debugger
  }

}
export default Snake;
