import Snake from './snake';
import Food from './food.js';

var snakeCanvas = document.getElementById("game-canvas");
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
// testing init position
// let x = 0;
// let y = 0;
// unit move
let dx = 1;
let dy = 0;

let snake = new Snake();
let food = new Food();
food.drawRandomFood(gameViewWidth, gameViewHeight);

// check wall collision
function wallCollisionCheck(x, y) {
  if(x === -1 || y === -1 || x === gameViewWidth / snake.unitSize || y === gameViewHeight / snake.unitSize) {
    return true;
  } else {
    return false;
  }
}

// check body collision
function bodyCollisionCheck(x, y) {
  for (let i = 0; i < snake.snakeArr.length; i++) {
    if(snake.snakeArr[i].x === x && snake.snakeArr[i].y === y) {
      return true;
    }
  }

  return false;
}

function draw() {
  // clear the screen;
  ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
  // food.drawFood(ctx, 24, 0);
  food.drawFood(ctx);
  snake.drawSnake(ctx);
  // testing clockwise movement
  // debugger;
  // if (snake.headX === 0 && snake.headY === 0) {
  //   snake.snakeMovement("right");
  // } else if (snake.headX === 0) {
  //   snake.snakeMovement("up");
  // } else if (snake.headY === gameViewHeight / snake.unitSize - 1) {
  //   snake.snakeMovement("left");
  // } else if(snake.headX === gameViewWidth / snake.unitSize - 1) {
  //     snake.snakeMovement("down");
  // } else if (snake.headY === 0) {
  //   snake.snakeMovement("right");
  // } else {
  //   snake.snakeMovement("right");
  // }
  //
  // snake.drawSnake(ctx);
  // if (bodyCollisionCheck() || wallCollisionCheck()) {
  //   alert("GAME OVER");
  //   document.location.reload();
  // }
  // x += dx;
  // y += dy;
  // requestAnimationFrame(draw);
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

setInterval(draw, 100);
