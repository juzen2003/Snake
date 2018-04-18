import PlayerGame from './playerGame';
import AIGame from './aiGame';

let human = new PlayerGame();
let ai = new AIGame();
let count = 0;

function game() {
  human.gameForPlayer();
  ai.gameForAI();
  // debugger

  // timer here, 10000 ms = 10s
  setInterval(time, 10000);
  if(count === 10) {
    document.location.reload();
    alert(`You score ${human.score} points vs AI: ${ai.score} points!`);
  }
}

function time() {
  count++;

}

const speed = 100;
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

function startGame() {
  count = 0;
  startButton.disabled = true;
  setInterval(game, 80);
}
