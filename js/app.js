import PlayerGame from './playerGame';
import AIGame from './aiGame';

let human = new PlayerGame();
let ai = new AIGame();
let count = 0;
let winner;
let gameRun;

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
    countDown(count / 15, Math.floor(920/15));
  }
  time();
  // 460 for 30s
  // 45
  if(count === 920) {
    // document.location.reload();
    // this would stop the game, isntead of reload
    clearInterval(gameRun);
    let result = document.getElementsByClassName("result-area");
    for(let i = 0; i < result.length; i++) {
      if(!result[i].classList.contains("is-open")) {
        result[i].classList.add("is-open");
      }
    }

    if(human.score > ai.score) {
      winner = "YOW WIN";
    } else if(human.score < ai.score) {
      winner = "YOU LOSE";
    } else {
      winner = "TIED";
    }

    // result[0].innerHTML = `<p>${winner}</p>
    //                        <p>YOUR SCORE: ${human.score} POINTS</p>
    //                        <p>AI SCORE: ${ai.score} POINTS</p>
    //                        <button id="reset-button">OK</button>`;
    result[0].innerHTML = `<p>${winner}</p>
                           <p>${human.score} POINTS : ${ai.score} POINTS</p>
                           <button id="reset-button">OK</button>`;

    const okButton = document.getElementById("reset-button");
    okButton.addEventListener("click", reload);

    // alert(`You score ${human.score} points vs AI: ${ai.score} points!`);
  }
}

function reload() {
  document.location.reload();
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
  gameRun = setInterval(game, 80);

}
