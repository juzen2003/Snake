import Snake from './snake';
import * as lodashName from 'lodash';

var snakeCanvas = document.getElementById("game-canvas");
var ctx = snakeCanvas.getContext("2d");

const gameViewHeight = snakeCanvas.height;
const gameViewWidth = snakeCanvas.width;
// const unitSize = 20; // the unit square size of snake
// snake array, an array of squares, keep track of snake size
// let snakeArr = [];
// keep track of head of snack
// let headx;
// let heady;

let score = 0;
// testing init position
// let x = 0;
// let y = 0;
// unit move
let dx = 1;
let dy = 0;

let snake = new Snake();

// function initSnake() {
//   let length = 5;
//   for(let i = 0; i < length; i++) {
//     // snake head at index 0
//     snakeArr.unshift({x: i, y: 0});
//   }
//   // debugger;
//   headx = snakeArr[0].x;
//   heady = snakeArr[0].y;
//
// }

// draw a unit square (will be used to build a snake)
// function drawAUnitSquare(x, y) {
//   ctx.beginPath();
//   ctx.rect(x * unitSize, y * unitSize, unitSize, unitSize);
//   ctx.fillStyle = "#F5FA30";
//   ctx.fill();
//   // border
//   ctx.strokeStyle = "red";
//   ctx.stroke();
//   ctx.closePath();
// }

// function drawSnake() {
//   for(let i = 0; i < snakeArr.length; i++) {
//     drawAUnitSquare(snakeArr[i].x, snakeArr[i].y);
//   }
// }

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

// test the movement
// function snakeMovement(direction) {
//   // update the head to get the new head
//   switch (direction) {
//     case "up":
//       snake.headY--;
//       break;
//     case "down":
//       snake.headY++;
//       break;
//     case "left":
//       snake.headX--;
//       break;
//     case "right":
//       snake.headX++;
//       break;
//     default:
//        snake.headX = snake.headX;
//        snake.headY = snake.headY;
//       break;
//   }
//
//   // unshift new head to snakeArr
//   snake.snakeArr.pop();
//   snake.snakeArr.unshift({x: snake.headX, y: snake.headY});
// }

function draw() {
  // clear the screen;
  ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);

  // drawAUnitSquare(1,0);
  // drawAUnitSquare();

  snake.drawSnake(ctx);
  // testing clockwise movement
  // debugger;
  if (snake.headX === 0 && snake.headY === 0) {
    snake.snakeMovement("right");
  } else if (snake.headX === 0) {
    snake.snakeMovement("up");
  } else if (snake.headY === gameViewHeight / snake.unitSize - 1) {
    snake.snakeMovement("left");
  } else if(snake.headX === gameViewWidth / snake.unitSize - 1) {
      snake.snakeMovement("down");
  } else if (snake.headY === 0) {
    snake.snakeMovement("right");
  } else {
    snake.snakeMovement("right");
  }

  snake.drawSnake(ctx);
  // if (bodyCollisionCheck() || wallCollisionCheck()) {
  //   alert("GAME OVER");
  //   document.location.reload();
  // }
  // x += dx;
  // y += dy;
}

// initSnake();
setInterval(draw, 300);
