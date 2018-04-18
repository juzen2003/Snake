import PlayerGame from './playerGame';
import AIGame from './aiGame';

let human = new PlayerGame();
let ai = new AIGame();
function game() {
  human.gameForPlayer();
  ai.gameForAI();
}
const speed = 100;
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);


function startGame() {
  // debugger
  setInterval(game, speed);
}
