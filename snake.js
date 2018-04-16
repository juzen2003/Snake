var snakeCanvas = document.getElementById("game-canvas");
var ctx = snakeCanvas.getContext("2d");

const gameViewHeight = snakeCanvas.height;
const gameViewWidth = snakeCanvas.width;
const unitSize = 20; // the unit square size of snake
// snake array, an array of squares
let snakeArr = [];
let score = 0;
// testing init position
// let x = 0;
// let y = 0;
// unit move
let dx = 1;
let dy = 0;

function initSnake() {
  let length = 5;
  for(let i = 0; i < length; i++) {
    // put head to be the last of the array
    snakeArr.unshift({x: i, y: 0});
  }
  // debugger;

}

// draw a unit square (will be used to build a snake)
function drawAUnitSquare(x, y) {
  ctx.beginPath();
  ctx.rect(x * unitSize, y * unitSize, unitSize, unitSize);
  ctx.fillStyle = "#F5FA30";
  ctx.fill();
  // border
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();
}

function drawSnake() {
  for(let i = 0; i < snakeArr.length; i++) {
    drawAUnitSquare(snakeArr[i].x, snakeArr[i].y);
  }
}

function draw() {
  // clear the screen;
  ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);

  initSnake();
  // drawAUnitSquare(1,0);
  // drawAUnitSquare();

  drawSnake();
  // x += dx;
  // y += dy;
}

setInterval(draw, 100);
