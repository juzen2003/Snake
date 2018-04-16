var snakeCanvas = document.getElementById("game-canvas");
var ctx = snakeCanvas.getContext("2d");

const gameViewHeight = snakeCanvas.height;
const gameViewWidth = snakeCanvas.width;
const unitSize = 20; // the unit square size of snake
let score = 0;

// draw a unit square (will be used to build a snake)
function drawAUnitSquare(x, y) {
  ctx.beginPath();
  ctx.rect(x * unitSize, y * unitSize, unitSize, unitSize);
  ctx.fillStyle = "#F5FA30";
  ctx.fill();
  ctx.stroke(); // border
  ctx.closePath();
}

function draw() {
  // drawAUnitSquare(1,0);
  drawAUnitSquare(0,0);
}

setInterval(draw, 10);
