import PlayerGame from './playerGame';
import AIGame from './aiGame';

let human = new PlayerGame();
let ai = new AIGame();
function game() {
  human.gameForPlayer();
  ai.gameForAI();
  // debugger
  // console.log(human.speed);
}
const speed = 100;
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startEasyGame);

// 100/50/25
function startEasyGame() {
  startButton.disabled = true;
  setInterval(game, 80);
}
