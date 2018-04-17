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

  // check body collision
  avoidBodyCollision() {

    for (let i = 1; i < this.snakeArr.length; i++) {
      // body at right
      if(this.snakeArr[i].x === this.headX + 1 && this.snakeArr[i].y === this.headY) {
        // coming from left
        // debugger
        if(this.headX === this.snakeArr[1].x + 1) {
          for (let j = 1; j < this.snakeArr.length; j++) {
            if(this.snakeArr[j].y === this.headY - 1 && this.snakeArr[j].x === this.headX) {
              this.snakeMovement("down");
            } else {
              this.snakeMovement("up");
            }
          }
        }
      } // body at left
      else if(this.snakeArr[i].x === this.headX + 1 && this.snakeArr[i].y === this.headY) {
        // coming from right
        // debugger
        if(this.headX === this.snakeArr[1].x - 1) {
          for (let j = 1; j < this.snakeArr.length; j++) {
            if(this.snakeArr[j].y === this.headY - 1 && this.snakeArr[j].x === this.headX) {
              this.snakeMovement("down");
            } else {
              this.snakeMovement("up");
            }
          }
        }
      } // body at top
      else if(this.snakeArr[i].x === this.headX && this.snakeArr[i].y === this.headY - 1) {
        // coming from bottom
        // debugger
        if(this.headY === this.snakeArr[1].y - 1) {
          for (let j = 1; j < this.snakeArr.length; j++) {
            if(this.snakeArr[j].x === this.headX - 1 && this.snakeArr[j].y === this.headY) {
              this.snakeMovement("right");
            } else {
              this.snakeMovement("left");
            }
          }
        }
      } // body at bottom
      else if(this.snakeArr[i].x === this.headX && this.snakeArr[i].y === this.headY + 1) {
        // coming from top
        // debugger
        if(this.headY === this.snakeArr[1].y + 1) {
          for (let j = 1; j < this.snakeArr.length; j++) {
            if(this.snakeArr[j].x === this.headX - 1 && this.snakeArr[j].y === this.headY) {
              this.snakeMovement("right");
            } else {
              this.snakeMovement("left");
            }
          }
        }
      }
    }
  }

  // move for AI
  move(food) {
    if(food.foodPos.x > this.headX) {
      // this.avoidBodyCollision();
      if(this.headX !== this.snakeArr[1].x - 1) {
        this.snakeMovement("right");
      }
    } else if(food.foodPos.x < this.headX) {
      // this.avoidBodyCollision();
      if(this.headX !== this.snakeArr[1].x + 1) {
        this.snakeMovement("left");
      }
    } else {
      if(food.foodPos.y > this.headY) {
        // this.avoidBodyCollision();
        if(this.headY !== this.snakeArr[1].y - 1) {
          this.snakeMovement("down");
        }
      } else if(food.foodPos.y < this.headY) {
        // this.avoidBodyCollision();
        if(this.headY !== this.snakeArr[1].y + 1) {
          this.snakeMovement("up");
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
