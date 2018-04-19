import Snake from './snakeAI';
import Food from './food';

class AIGame {
  constructor() {
  this.snakeCanvas = document.getElementById("ai-game-canvas");
  this.ctx = this.snakeCanvas.getContext("2d");

  this.gameViewHeight = this.snakeCanvas.height;
  this.gameViewWidth = this.snakeCanvas.width;

  this.score = 0;
  this.speed = 100;
  this.init();
  }
  // init direction
  init() {
    this.direction = "down";
    this.rightPressed = false;
    this.leftPressed = false;
    this.upPressed = false;
    this.downPressed = false;

    this.snake = new Snake();
    this.food = new Food();
    this.food.drawRandomFood(this.gameViewWidth, this.gameViewHeight, this.snake);
  }
  // check wall collision
  wallCollisionCheck(x, y) {
    // debugger;
    if(x === -1 || y === -1 || (x === this.gameViewWidth / this.snake.unitSize) || (y === this.gameViewHeight / this.snake.unitSize)) {
      return true;
    } else {
      return false;
    }
  }

  willTouchWall(x, y) {
    if(x === 0 || y === 0 || (x === this.gameViewWidth / this.snake.unitSize - 1) || (y === this.gameViewHeight / this.snake.unitSize -1)) {
      return true;
    } else {
      return false;
    }
    // debugger
  }

  // check body collision
  bodyCollisionCheck(x, y) {
    for (let i = 1; i < this.snake.snakeArr.length; i++) {
      if(this.snake.snakeArr[i].x === x && this.snake.snakeArr[i].y === y) {
        return true;
      }
    }

    return false;
  }

  drawScore() {
    this.ctx.beginPath();
    this.ctx.font = "16px classic-font";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("AI SCORE: " + this.score, 8, 20);
    this.ctx.closePath();
  }

  gameForAI() {
    // clear the screen;
    this.ctx.clearRect(0, 0, this.snakeCanvas.width, this.snakeCanvas.height);
    // food.drawFood(ctx, 24, 0);

    // collision check
    if (this.bodyCollisionCheck(this.snake.headX, this.snake.headY) || this.wallCollisionCheck(this.snake.headX, this.snake.headY)) {
      // debugger;
      // comment this back later
      // alert("GAME OVER");
      //
      // document.location.reload();
      this.score--;
    }

    this.food.drawFood(this.ctx);
    // food.drawfoodPic(ctx);
    this.snake.drawSnake(this.ctx);
    this.drawScore();
    // Need to implement here
    // snake.snakeMovement(direction);
    this.snake.move(this.food);
    if (this.snake.eat(this.food)) {
      this.score++;
      // this.speed -= 5;
      // let randomWidthX = gameViewWidth / (Math.floor( Math.random() * 4 + 1));
      // let randomHeightY = gameViewWidth / (Math.floor( Math.random() * 4 + 1));
      this.food.drawRandomFood(this.gameViewWidth, this.gameViewWidth, this.snake);
    }

  }
}

export default AIGame;
