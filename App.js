import PlayerGame from './playerGame';
import AIGame from './aiGame';

let human = new PlayerGame();
let ai = new AIGame();
let count = 0;

function countDown(initTime) {
  let timeText = document.getElementById("timer");
  // let initTime = 10;
  timeText.innerHTML = `TIME LEFT: ${30-initTime}`;
  // debugger

}

function game() {
  human.gameForPlayer();
  ai.gameForAI();
  // debugger

  // timer here, 10000 ms = 10s
  // console.log(count);
  // setInterval(time, 10000);
  // setTimeout(time, 0);
  time();
  // console.log(`After: ${count}`);
  // every 10 count as 1s
  if(count % 15 === 0) {
    countDown(count / 15);
  }
  if(count === 450) {
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
  // countDown(10);
  startButton.disabled = true;
  setInterval(game, 80);

}
