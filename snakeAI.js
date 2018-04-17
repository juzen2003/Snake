class Snake {
  constructor() {
    this.snakeArr = [];
    this.unitSize = 20;
    this.headX = 0;
    this.headY = 0;
    this.pos = [];
    this.initSnake();
    this.dir = "down";
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

  // check if body at right
  bodyAtRight(food) {
    for (let i = 1; i < this.snakeArr.length; i++) {
      // check body right
      if(this.snakeArr[i].x < food.foodPos.x && this.snakeArr[i].x > this.headX) {
        if(this.snakeArr[i].y === this.headY) {
          // debugger
          return true;
        }
      }
    }
    return false;
  }

  // check if body at left
  bodyAtLeft(food) {
    for (let i = 1; i < this.snakeArr.length; i++) {
      // check body left
      if(this.snakeArr[i].x > food.foodPos.x && this.snakeArr[i].x < this.headX) {
        if(this.snakeArr[i].y === this.headY) {
          return true;
        }
      }
    }
    return false;
  }

  // check if body at top
  bodyAtTop(food) {
    for (let i = 1; i < this.snakeArr.length; i++) {
      // check body top
      if(this.snakeArr[i].y > food.foodPos.y && this.snakeArr[i].y < this.headY) {
        if(this.snakeArr[i].x === this.headx) {
          return true;
        }
      }
    }
    return false;
  }

  // check if body at bottom
  bodyAtBottom(food) {
    for (let i = 1; i < this.snakeArr.length; i++) {
      // check body bottom
      if(this.snakeArr[i].y < food.foodPos.y && this.snakeArr[i].y > this.headY) {
        if(this.snakeArr[i].x === this.headx) {
          return true;
        }
      }
    }
    return false;
  }

  // move for AI
  move(food) {
    if(food.foodPos.x > this.headX) { // food at right
      // debugger
      // moving right
      if(this.dir === "right") {
        if(!this.bodyAtRight(food)) {
          this.snakeMovement("right");
        } else if (!this.bodyAtTop(food)) {
          this.snakeMovement("up");
        } else if (!this.bodyAtBottom(food)) {
          this.snakeMovement("down");
        }
      } else if(this.dir === "left") { // moving left
        if (!this.bodyAtTop(food)) {
          this.snakeMovement("up");
        } else if (!this.bodyAtBottom(food)) {
          this.snakeMovement("down");
        } else if (!this.bodyAtLeft(food)) {
          this.snakeMovement("left");
        }
      } else if (this.dir === "up") { // moving up
        if (!this.bodyAtRight(food)) {
          this.snakeMovement("right");
        } else if (!this.bodyAtTop(food)) {
          this.snakeMovement("up");
        } else if (!this.bodyAtLeft(food)) {
          this.snakeMovement("left");
        }
      } else if (this.dir === "down") { // moving down
        if (!this.bodyAtRight(food)) {
          this.snakeMovement("right");
        } else if (!this.bodyAtBottom(food)) {
          this.snakeMovement("down");
        } else if (!this.bodyAtLeft(food)) {
          this.snakeMovement("left");
        }
      }
      // } else {
      //   this.snakeMovement("down");
      // }
    } else if(food.foodPos.x < this.headX) { // food at left
      // debugger
      // moving left
      if(this.dir === "left") {
        if(!this.bodyAtLeft(food)) {
          this.snakeMovement("left");
        } else if (!this.bodyAtTop(food)) {
          this.snakeMovement("up");
        } else if (!this.bodyAtBottom(food)) {
          this.snakeMovement("down");
        }
      } else if(this.dir === "right") { // moving right
        if (!this.bodyAtTop(food)) {
          this.snakeMovement("up");
        } else if (!this.bodyAtBottom(food)) {
          this.snakeMovement("down");
        } else if (!this.bodyAtRight(food)) {
          this.snakeMovement("right");
        }
      } else if (this.dir === "up") { // moving up
        if (!this.bodyAtLeft(food)) {
          this.snakeMovement("left");
        } else if (!this.bodyAtTop(food)) {
          this.snakeMovement("up");
        } else if (!this.bodyAtRight(food)) {
          this.snakeMovement("right");
        }
      } else if (this.dir === "down") { // moving down
        if (!this.bodyAtLeft(food)) {
          this.snakeMovement("left");
        } else if (!this.bodyAtBottom(food)) {
          this.snakeMovement("down");
        } else if (!this.bodyAtRight(food)) {
          this.snakeMovement("right");
        }
      }

    } else if(food.foodPos.x === this.headX) {// food at the same x
      if(food.foodPos.y > this.headY) { // food at bottom

        if (this.dir === "down") { // moving down
          if (!this.bodyAtBottom(food)) {
            this.snakeMovement("down");
          } else if (!this.bodyAtLeft(food)) {
            this.snakeMovement("left");
          }  else if (!this.bodyAtRight(food)) {
            this.snakeMovement("right");
          }
        } else if(this.dir === "up") { // moving up
          if (!this.bodyAtLeft(food)) {
            this.snakeMovement("left");
          } else if (!this.bodyAtRight(food)) {
            this.snakeMovement("right");
          } else if (!this.bodyAtTop(food)) {
            this.snakeMovement("up");
          }
        } if(this.dir === "left") { // moving left
          if (!this.bodyAtBottom(food)) {
            this.snakeMovement("down");
          } else if(!this.bodyAtLeft(food)) {
            this.snakeMovement("left");
          } else if (!this.bodyAtTop(food)) {
            this.snakeMovement("up");
          }
        } else if(this.dir === "right") { // moving right
          if (!this.bodyAtBottom(food)) {
            this.snakeMovement("down");
          } else if (!this.bodyAtRight(food)) {
            this.snakeMovement("right");
          } else if (!this.bodyAtTop(food)) {
            this.snakeMovement("up");
          }
        }

      } else  { // food at top if(food.foodPos.y < this.headY)

        if(this.dir === "up") { //moving up
          if (!this.bodyAtTop(food)) {
            this.snakeMovement("up");
          } else if (!this.bodyAtLeft(food)) {
            this.snakeMovement("left");
          } else if (!this.bodyAtRight(food)) {
            this.snakeMovement("right");
          }
        } else if (this.dir === "down") { // moving down
          if (!this.bodyAtLeft(food)) {
            this.snakeMovement("left");
          }  else if (!this.bodyAtRight(food)) {
            this.snakeMovement("right");
          } else if (!this.bodyAtBottom(food)) {
            this.snakeMovement("down");
          }
        } else if(this.dir === "left") { // moving left
          if (!this.bodyAtTop(food)) {
            this.snakeMovement("up");
          } else if(!this.bodyAtLeft(food)) {
            this.snakeMovement("left");
          } else if (!this.bodyAtBottom(food)) {
            this.snakeMovement("down");
          }
        } else if(this.dir === "right") { // moving right
          if (!this.bodyAtTop(food)) {
            this.snakeMovement("up");
          } else if (!this.bodyAtRight(food)) {
            this.snakeMovement("right");
          } else if (!this.bodyAtBottom(food)) {
            this.snakeMovement("down");
          }
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
