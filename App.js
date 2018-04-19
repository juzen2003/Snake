import PlayerGame from './playerGame';
import AIGame from './aiGame';

let human = new PlayerGame();
let ai = new AIGame();
let count = 0;

function countDown(initTime, total) {
  let timeText = document.getElementById("timer");
  // let initTime = 10;
  timeText.innerHTML = `TIME LEFT: ${total-initTime}`;
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
  // console.log(`After: ${count}`);
  // every 10 count as 1s
  if(count % 15 === 0) {
    countDown(count / 15, Math.floor(46/15));
  }
  time();
  // 460 for 30s
  // 45
  if(count === 46) {
    document.location.reload();

    let result = document.getElementById("result-area");

    // alert(`You score ${human.score} points vs AI: ${ai.score} points!`);
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
