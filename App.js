import PlayerGame from './playerGame';
import {gameForAI} from './AIGame';

let humanGame = new PlayerGame();
function game() {

  humanGame.gameForPlayer();
  gameForAI();
}
const speed = 100;
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);


function startGame() {
  // debugger
  setInterval(game, speed);
}
