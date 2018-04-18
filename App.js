import {gameForPlayer} from './playerGame';
import {gameForAI} from './AIGame';

function game() {
  // gameForPlayer();
  gameForAI();
}
const speed = 100;
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);


function startGame() {
  // debugger
  setInterval(game, speed);
}
