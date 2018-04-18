import Snake from './snake';
import Food from './food';

class PlayerGame {

  constructor() {
    this.snakeCanvas = document.getElementById("human-game-canvas");
    this.ctx = this.snakeCanvas.getContext("2d");

    this.gameViewHeight = this.snakeCanvas.height;
    this.gameViewWidth = this.snakeCanvas.width;

    this.score = 0;
    this.speed = 100;
    // document.addEventListener("keydown", this.keyDownHandler, false);
    // document.addEventListener("keyup", this.keyUpHandler, false);
    // this.direction = "down";
    // this.rightPressed = false;
    // this.leftPressed = false;
    // this.upPressed = false;
    // this.downPressed = false;
    //
    // this.snake = new Snake();
    // this.food = new Food();
    // this.food.drawRandomFood(this.gameViewWidth, this.gameViewHeight, this.snake);

    // need to bind eventhandler
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
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
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Score: " + this.score, 8, 20);
    this.ctx.closePath();
  }

  gameForPlayer() {
    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
    // clear the screen;
    this.ctx.clearRect(0, 0, this.snakeCanvas.width, this.snakeCanvas.height);

    // collision check
    if (this.bodyCollisionCheck(this.snake.headX, this.snake.headY) || this.wallCollisionCheck(this.snake.headX, this.snake.headY)) {
      // debugger;
      // comment this back later
      // alert("GAME OVER");
      document.location.reload();
    }

    this.food.drawFood(this.ctx);
    // food.drawfoodPic(ctx);
    this.snake.drawSnake(this.ctx);
    this.drawScore();

    // debugger
    if(this.rightPressed) {
      // debugger
      if (this.direction !== "left") {
        this.direction = "right";
      }
    } else if (this.leftPressed) {
      if (this.direction !== "right") {
        this.direction = "left";
      }
    } else if (this.upPressed) {
      if (this.direction !== "down") {
        this.direction = "up";
      }
    } else if (this.downPressed) {
      if (this.direction !== "up") {
        this.direction = "down";
      }
    }
    this.snake.snakeMovement(this.direction);
    if (this.snake.eat(this.food)) {
      this.score++;
      // this.speed -= 5;
      this.food.drawRandomFood(this.gameViewWidth, this.gameViewHeight, this.snake);
    }

  }

  // Use a w s d to control
  keyDownHandler(e) {
    if(e.keyCode === 68) {
        this.rightPressed = true;
    } else if(e.keyCode === 65) {
        this.leftPressed = true;
    } else if(e.keyCode === 87) {
        this.upPressed = true;
    } else if(e.keyCode === 83) {
        this.downPressed = true;
    }
    // debugger
  }

  keyUpHandler(e) {
    if(e.keyCode === 68) {
        this.rightPressed = false;
    } else if(e.keyCode === 65) {
        this.leftPressed = false;
    } else if(e.keyCode === 87) {
        this.upPressed = false;
    } else if(e.keyCode === 83) {
        this.downPressed = false;
    }
  }



}

export default PlayerGame;
