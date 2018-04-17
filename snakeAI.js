class Snake {
  constructor() {
    this.snakeArr = [];
    this.unitSize = 20;
    this.headX = 0;
    this.headY = 0;
    this.pos = [];
    this.initSnake();
    this.dir;
  }

  initSnake() {
    let length = 5;
    for(let i = 0; i < length; i++) {
      // snake head at index 0
      this.snakeArr.unshift({x: i, y: 0});
      // init pos
      this.pos.unshift([i, 0]);
    }
    this.headX = this.snakeArr[0].x;
    this.headY = this.snakeArr[0].y;
    // debugger;
  }

  drawAUnitSquare(ctx, x, y) {
    ctx.beginPath();
    ctx.rect(x * this.unitSize, y * this.unitSize, this.unitSize, this.unitSize);
    ctx.fillStyle = "#F5FA30";
    ctx.fill();
    // border
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();
  }

  // draw snake body (build up by unit square)
  drawSnake(ctx) {
    for(let i = 0; i < this.snakeArr.length; i++) {
      this.drawAUnitSquare(ctx, this.snakeArr[i].x, this.snakeArr[i].y);
    }
  }

  snakeMovement(direction, step=1) {
    // update the head to get the new head
    this.dir = direction;
    switch (direction) {
      case "up":
        this.headY -= step;
        break;
      case "down":
        this.headY += step;
        break;
      case "left":
        this.headX -= step;
        break;
      case "right":
        this.headX += step;
        break;
      // default:
      //   this.headX = this.headX;
      //   this.headY = this.headY;
      //   break;
    }
  }

  // check body collision
  avoidBodyCollision() {
    for (let i = 1; i < this.snakeArr.length; i++) {

    }
  }

  // move for AI
  move(food) {
    if(food.foodPos.x > this.headX) {
      // this.avoidBodyCollision();
      if(this.dir !== "left") {
        this.snakeMovement("right");
      } else {
        this.snakeMovement("down");
      }
    } else if(food.foodPos.x < this.headX) {
      // this.avoidBodyCollision();
      if(this.dir !== "right") {
        this.snakeMovement("left");
      } else {
        this.snakeMovement("down");
      }
    } else {
      if(food.foodPos.y > this.headY) {
        // this.avoidBodyCollision();
        if(this.dir !== "up") {
          this.snakeMovement("down");
        } else {
          this.snakeMovement("right");
        }
      } else if(food.foodPos.y < this.headY) {
        // this.avoidBodyCollision();
        if(this.dir !== "down") {
          this.snakeMovement("up");
        } else {
          this.snakeMovement("right");
        }
      }
    }
  }

  // does snake eat?
  eat(food) {
    this.move(food);
    // new head after updating headX & headY
    if(this.headX === food.foodPos.x && this.headY === food.foodPos.y) {
      let newHead = {x: this.headX, y: this.headY};
      this.snakeArr.unshift(newHead);
      this.pos.unshift([this.headX, this.headY]);
      return true;
    } else {
    // unshift new head to snakeArr
      this.snakeArr.pop();
      this.pos.pop();
      this.snakeArr.unshift({x: this.headX, y: this.headY});
      this.pos.unshift([this.headX, this.headY]);
      return false;
    }
    // debugger
  }

}
export default Snake;
