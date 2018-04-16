var snakeCanvas = document.getElementById("game-canvas");
var ctx = snakeCanvas.getContext("2d");

const gameViewHeight = snakeCanvas.height;
const gameViewWidth = snakeCanvas.width;
const unitSize = 20; // the unit square size of snake
let score = 0;
// testing init position
let x = 0;
let y = 0;
// unit move
let dx = 1;
let dy = 0;

// draw a unit square (will be used to build a snake)
function drawAUnitSquare() {
  ctx.beginPath();
  ctx.rect(x * unitSize, y * unitSize, unitSize, unitSize);
  ctx.fillStyle = "#F5FA30";
  ctx.fill();
  ctx.stroke(); // border
  ctx.closePath();
}

function draw() {
  // clear the screen;
  ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);

  // drawAUnitSquare(1,0);
  drawAUnitSquare();
  x += dx;
  y += dy;
}

setInterval(draw, 100);
