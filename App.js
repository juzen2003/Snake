import PlayerGame from './playerGame';
import AIGame from './aiGame';

let human = new PlayerGame();
let ai = new AIGame();
let count = 0;

function countDown() {
  let timeText = document.getElementById("timer");
  let initTime = 10;
  timeText.innerHTML = initTime;

}

function game() {
  human.gameForPlayer();
  ai.gameForAI();
  // debugger

  // timer here, 10000 ms = 10s
  // console.log(count);
  // setInterval(time, 10000);
  setTimeout(time, 60000);
  console.log(`After: ${count}`);
  if(count === 10) {
    document.location.reload();

    alert(`You score ${human.score} points vs AI: ${ai.score} points!`);
  }
}

function time() {
  // console.log(count);
  count++;
}

const speed = 100;
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

function startGame() {
  count = 0;
  countDown();
  startButton.disabled = true;
  setInterval(game, 80);

}
