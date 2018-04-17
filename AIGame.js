import Snake from './snake';
import Food from './food.js';

var snakeCanvas = document.getElementById("ai-game-canvas");
var ctx = snakeCanvas.getContext("2d");

const gameViewHeight = snakeCanvas.height;
const gameViewWidth = snakeCanvas.width;

let score = 0;
// init direction
let direction = "down";
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let snake = new Snake();
let food = new Food();
food.drawRandomFood(gameViewWidth, gameViewHeight, snake);

// check wall collision
function wallCollisionCheck(x, y) {
  // debugger;
  if(x === -1 || y === -1 || (x === gameViewWidth / snake.unitSize) || (y === gameViewHeight / snake.unitSize)) {
    return true;
  } else {
    return false;
  }
}

// check body collision
function bodyCollisionCheck(x, y) {
  for (let i = 1; i < snake.snakeArr.length; i++) {
    if(snake.snakeArr[i].x === x && snake.snakeArr[i].y === y) {
      return true;
    }
  }

  return false;
}

function drawScore() {
  ctx.beginPath();
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
  ctx.closePath();
}

export function gameForAI() {
  // clear the screen;
  ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
  // food.drawFood(ctx, 24, 0);

  // collision check
  if (bodyCollisionCheck(snake.headX, snake.headY) || wallCollisionCheck(snake.headX, snake.headY)) {
    // debugger;
    // comment this back later
    // alert("GAME OVER");
    // document.location.reload();
  }

  food.drawFood(ctx);
  // food.drawfoodPic(ctx);
  snake.drawSnake(ctx);
  drawScore();


  if(rightPressed) {
    if (direction !== "left") {
      direction = "right";
    }
  } else if (leftPressed) {
    if (direction !== "right") {
      direction = "left";
    }
  } else if (upPressed) {
    if (direction !== "down") {
      direction = "up";
    }
  } else if (downPressed) {
    if (direction !== "up") {
      direction = "down";
    }
  }
  snake.snakeMovement(direction);
  if (snake.eat(food)) {
    score++;
    food.drawRandomFood(gameViewWidth, gameViewHeight, snake);
  }

}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode === 39) {
      rightPressed = true;
  } else if(e.keyCode === 37) {
      leftPressed = true;
  } else if(e.keyCode === 38) {
      upPressed = true;
  } else if(e.keyCode === 40) {
      downPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode === 39) {
      rightPressed = false;
  } else if(e.keyCode === 37) {
      leftPressed = false;
  } else if(e.keyCode === 38) {
      upPressed = false;
  } else if(e.keyCode === 40) {
      downPressed = false;
  }
}
