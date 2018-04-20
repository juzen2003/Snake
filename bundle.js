/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Food = function () {
  function Food() {
    _classCallCheck(this, Food);

    this.unitSize = 20;
    this.foodPos;
  }

  _createClass(Food, [{
    key: "drawFood",
    value: function drawFood(ctx) {
      var foodRadius = this.unitSize / 2;
      ctx.beginPath();
      // make it circle, can change later
      ctx.arc(this.foodPos.x * this.unitSize + this.unitSize / 2, this.foodPos.y * this.unitSize + this.unitSize / 2, foodRadius, 0, Math.PI * 2);
      // ctx.fillStyle = "#3D9728";
      // ctx.fillStyle = "#f1f1f1";
      ctx.fillStyle = "#9FE6AC";
      ctx.fill();

      // ctx.strokeStyle = "#FFF";
      ctx.strokeStyle = "#808080";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.closePath();
    }
  }, {
    key: "drawfoodPic",
    value: function drawfoodPic(ctx) {
      var img = new Image();
      img.src = 'p1.jpg';
      // img = ctx.drawImage(img, 0, 0, this.unitSize, this.unitSize);
      var that = this;
      img.onload = function () {
        var pattern = ctx.createPattern(img, '');
        ctx.fillStyle = pattern;
        ctx.fillRect(that.foodPos.x * that.unitSize, that.foodPos.y * that.unitSize, that.unitSize, that.unitSize);
      };
    }
  }, {
    key: "validFood",
    value: function validFood(snake, x, y) {
      for (var i = 0; i < snake.length; i++) {
        if (snake[i].x === x || snake[i].y === y || snake[i].x === x && snake[i].y === y) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "drawRandomFood",
    value: function drawRandomFood(canvasWidth, canvasHeight, snake) {
      var randomX = Math.floor(Math.random() * (canvasWidth / this.unitSize - 1));
      var randomY = Math.floor(Math.random() * (canvasHeight / this.unitSize - 1));
      // debugger
      //make sure food is not generated at snake's position
      while (!this.validFood(snake, randomX, randomY)) {
        randomX = Math.floor(Math.random() * (canvasWidth / this.unitSize - 1));
        randomY = Math.floor(Math.random() * (canvasHeight / this.unitSize - 1));
      }
      // for(let i = 0; i < snake.length; i++) {
      //   if (snake[i].x === randomX || snake[i].y === randomY || snake[i].x === randomX && snake[i].y === randomY) {
      //     randomX = Math.floor( Math.random() * (canvasWidth / this.unitSize));
      //     randomY = Math.floor( Math.random() * (canvasHeight / this.unitSize));
      //   }
      // }

      this.foodPos = { x: randomX, y: randomY };
    }
  }]);

  return Food;
}();

exports.default = Food;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _playerGame = __webpack_require__(2);

var _playerGame2 = _interopRequireDefault(_playerGame);

var _aiGame = __webpack_require__(4);

var _aiGame2 = _interopRequireDefault(_aiGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var human = new _playerGame2.default();
var ai = new _aiGame2.default();
var count = 0;
var winner = void 0;
var gameRun = void 0;

function countDown(initTime, total) {
  var timeText = document.getElementById("timer");
  // let initTime = 10;
  timeText.innerHTML = 'TIME LEFT: ' + (total - initTime);
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
  // 910 ~ 1 min
  if (count % 15 === 0) {
    countDown(count / 15, Math.floor(910 / 15));
  }
  time();
  // 460 for 30s
  // 45
  if (count === 910) {
    // document.location.reload();
    // this would stop the game, isntead of reload
    clearInterval(gameRun);
    var result = document.getElementsByClassName("result-area");
    for (var i = 0; i < result.length; i++) {
      if (!result[i].classList.contains("is-open")) {
        result[i].classList.add("is-open");
      }
    }

    if (human.score > ai.score) {
      winner = "YOW WIN";
    } else if (human.score < ai.score) {
      winner = "YOU LOSE";
    } else {
      winner = "TIED";
    }

    // result[0].innerHTML = `<p>${winner}</p>
    //                        <p>YOUR SCORE: ${human.score} POINTS</p>
    //                        <p>AI SCORE: ${ai.score} POINTS</p>
    //                        <button id="reset-button">OK</button>`;
    result[0].innerHTML = '<p>' + winner + '</p>\n                           <p>' + human.score + ' POINTS : ' + ai.score + ' POINTS</p>\n                           <button id="reset-button">OK</button>';

    var okButton = document.getElementById("reset-button");
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

var speed = 100;
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

function startGame() {
  count = 0;
  // countDown(10);
  startButton.disabled = true;
  gameRun = setInterval(game, 80);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snake = __webpack_require__(3);

var _snake2 = _interopRequireDefault(_snake);

var _food = __webpack_require__(0);

var _food2 = _interopRequireDefault(_food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerGame = function () {
  function PlayerGame() {
    _classCallCheck(this, PlayerGame);

    this.snakeCanvas = document.getElementById("human-game-canvas");
    this.ctx = this.snakeCanvas.getContext("2d");

    this.gameViewHeight = this.snakeCanvas.height;
    this.gameViewWidth = this.snakeCanvas.width;

    this.score = 0;
    this.speed = 100;
    // document.addEventListener("keydown", this.keyDownHandler, false);
    // document.addEventListener("keyup", this.keyUpHandler, false);
    // this.direction = "down";
    // this.rightPressed = false;
    // this.leftPressed = false;
    // this.upPressed = false;
    // this.downPressed = false;
    //
    // this.snake = new Snake();
    // this.food = new Food();
    // this.food.drawRandomFood(this.gameViewWidth, this.gameViewHeight, this.snake);

    // need to bind eventhandler
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.init();
  }

  // init direction


  _createClass(PlayerGame, [{
    key: 'init',
    value: function init() {
      this.direction = "down";
      this.rightPressed = false;
      this.leftPressed = false;
      this.upPressed = false;
      this.downPressed = false;

      this.snake = new _snake2.default();
      this.food = new _food2.default();
      this.food.drawRandomFood(this.gameViewWidth, this.gameViewHeight, this.snake);
    }

    // check wall collision

  }, {
    key: 'wallCollisionCheck',
    value: function wallCollisionCheck(x, y) {
      // debugger;
      if (x === -1 || y === -1 || x === this.gameViewWidth / this.snake.unitSize || y === this.gameViewHeight / this.snake.unitSize) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'willTouchWall',
    value: function willTouchWall(x, y) {
      if (x === 0 || y === 0 || x === this.gameViewWidth / this.snake.unitSize - 1 || y === this.gameViewHeight / this.snake.unitSize - 1) {
        return true;
      } else {
        return false;
      }
      // debugger
    }

    // check body collision

  }, {
    key: 'bodyCollisionCheck',
    value: function bodyCollisionCheck(x, y) {
      for (var i = 1; i < this.snake.snakeArr.length; i++) {
        if (this.snake.snakeArr[i].x === x && this.snake.snakeArr[i].y === y) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: 'drawScore',
    value: function drawScore() {
      this.ctx.beginPath();
      this.ctx.font = "16px classic-font";
      // this.ctx.fillStyle = "#0095DD";
      this.ctx.fillStyle = "#fff";
      this.ctx.fillText("YOUR SCORE: " + this.score, 8, 20);
      this.ctx.closePath();
    }
  }, {
    key: 'gameForPlayer',
    value: function gameForPlayer() {
      document.addEventListener("keydown", this.keyDownHandler, false);
      document.addEventListener("keyup", this.keyUpHandler, false);
      // clear the screen;
      this.ctx.clearRect(0, 0, this.snakeCanvas.width, this.snakeCanvas.height);

      // collision check
      // if (this.bodyCollisionCheck(this.snake.headX, this.snake.headY) || this.wallCollisionCheck(this.snake.headX, this.snake.headY)) {
      if (this.bodyCollisionCheck(this.snake.headX, this.snake.headY)) {
        // debugger;
        // comment this back later
        // alert("GAME OVER");
        // document.location.reload();
        if (this.score > 0) {
          this.score--;
        }
        this.snake.snakeArr.pop();
      }

      this.food.drawFood(this.ctx);
      // food.drawfoodPic(ctx);
      this.snake.drawSnake(this.ctx);
      this.drawScore();

      // debugger
      if (this.rightPressed) {
        // debugger
        if (this.direction !== "left" && this.direction !== "right" && this.snake.headX < this.gameViewWidth / this.snake.unitSize - 1) {
          this.direction = "right";
        }
      } else if (this.leftPressed) {
        if (this.direction !== "right" && this.direction !== "left" && this.snake.headX > 0) {
          this.direction = "left";
        }
      } else if (this.upPressed) {
        if (this.direction !== "down" && this.direction !== "up" && this.snake.headY > 0) {
          this.direction = "up";
        }
      } else if (this.downPressed) {
        if (this.direction !== "up" && this.direction !== "down" && this.snake.headY < this.gameViewHeight / this.snake.unitSize - 1) {
          this.direction = "down";
        }
      } else {
        // this is when snake hit the wall:
        // turn around if no key is pressed
        if (this.direction === "right" && this.snake.headX >= this.gameViewWidth / this.snake.unitSize - 1) {
          this.direction = "left";
          this.snake.snakeArr = this.snake.snakeArr.reverse();
          this.snake.headX = this.snake.snakeArr[0].x;
          this.snake.headY = this.snake.snakeArr[0].y;
          if (this.score > 0) {
            this.score--;
          }
          this.snake.snakeArr.pop();
        } else if (this.direction === "up" && this.snake.headY <= 0) {
          this.direction = "down";
          this.snake.snakeArr = this.snake.snakeArr.reverse();
          this.snake.headX = this.snake.snakeArr[0].x;
          this.snake.headY = this.snake.snakeArr[0].y;
          if (this.score > 0) {
            this.score--;
          }
          this.snake.snakeArr.pop();
        } else if (this.direction === "down" && this.snake.headY >= this.gameViewHeight / this.snake.unitSize - 1) {
          // debugger
          this.direction = "up";
          this.snake.snakeArr = this.snake.snakeArr.reverse();
          this.snake.headX = this.snake.snakeArr[0].x;
          this.snake.headY = this.snake.snakeArr[0].y;
          if (this.score > 0) {
            this.score--;
          }
          this.snake.snakeArr.pop();
        } else if (this.direction === "left" && this.snake.headX <= 0) {
          // debugger
          this.direction = "right";
          this.snake.snakeArr = this.snake.snakeArr.reverse();
          this.snake.headX = this.snake.snakeArr[0].x;
          this.snake.headY = this.snake.snakeArr[0].y;
          if (this.score > 0) {
            this.score--;
          }
          this.snake.snakeArr.pop();
        }
      }

      this.snake.snakeMovement(this.direction);
      if (this.snake.eat(this.food)) {
        this.score++;
        // this.speed -= 5;
        this.food.drawRandomFood(this.gameViewWidth, this.gameViewHeight, this.snake);
      }
    }

    // x === 0 || y === 0 || (x === this.gameViewWidth / this.snake.unitSize - 1) || (y === this.gameViewHeight / this.snake.unitSize -
    // Use a w s d to control

  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(e) {
      // debugger
      if (e.keyCode === 68 && this.direction !== "right" && this.snake.headX !== this.gameViewWidth / this.snake.unitSize - 1) {
        // debugger
        this.rightPressed = true;
      } else if (e.keyCode === 65 && this.direction !== "left") {
        this.leftPressed = true;
      } else if (e.keyCode === 87 && this.direction !== "up") {
        this.upPressed = true;
      } else if (e.keyCode === 83 && this.direction !== "down") {
        this.downPressed = true;
      }
      // debugger
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler(e) {
      if (e.keyCode === 68) {
        this.rightPressed = false;
      } else if (e.keyCode === 65) {
        this.leftPressed = false;
      } else if (e.keyCode === 87) {
        this.upPressed = false;
      } else if (e.keyCode === 83) {
        this.downPressed = false;
      }
    }
  }]);

  return PlayerGame;
}();

exports.default = PlayerGame;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
  function Snake() {
    _classCallCheck(this, Snake);

    this.snakeArr = [];
    this.unitSize = 20;
    this.headX = 0;
    this.headY = 0;
    this.initSnake();
  }

  _createClass(Snake, [{
    key: "initSnake",
    value: function initSnake() {
      var length = 5;
      for (var i = 0; i < length; i++) {
        // snake head at index 0
        this.snakeArr.unshift({ x: i, y: 0 });
      }
      this.headX = this.snakeArr[0].x;
      this.headY = this.snakeArr[0].y;
      // debugger;
    }
  }, {
    key: "drawAUnitSquare",
    value: function drawAUnitSquare(ctx, x, y) {
      ctx.beginPath();
      ctx.rect(x * this.unitSize, y * this.unitSize, this.unitSize, this.unitSize);
      // ctx.fillStyle = "#F5FA30";
      // ctx.fillStyle = "#000";
      // ctx.fillStyle = "#585858";
      ctx.fillStyle = "#315BCB";

      ctx.fill();
      // border
      // ctx.strokeStyle = "red";
      ctx.strokeStyle = "#FFF";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
    }

    // draw snake body (build up by unit square)

  }, {
    key: "drawSnake",
    value: function drawSnake(ctx) {
      for (var i = 0; i < this.snakeArr.length; i++) {
        this.drawAUnitSquare(ctx, this.snakeArr[i].x, this.snakeArr[i].y);
      }
    }
  }, {
    key: "snakeMovement",
    value: function snakeMovement(direction) {
      // update the head to get the new head
      switch (direction) {
        case "up":
          this.headY--;
          break;
        case "down":
          this.headY++;
          break;
        case "left":
          this.headX--;
          break;
        case "right":
          this.headX++;
          break;
        // default:
        //   this.headX = this.headX;
        //   this.headY = this.headY;
        //   break;
      }
    }

    // does snake eat?

  }, {
    key: "eat",
    value: function eat(food) {
      // new head after updating headX & headY
      if (this.headX === food.foodPos.x && this.headY === food.foodPos.y) {
        var newHead = { x: this.headX, y: this.headY };
        this.snakeArr.unshift(newHead);
        return true;
      } else {
        // unshift new head to snakeArr
        this.snakeArr.pop();
        this.snakeArr.unshift({ x: this.headX, y: this.headY });
        return false;
      }
      // debugger
    }
  }]);

  return Snake;
}();

exports.default = Snake;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snakeAI = __webpack_require__(5);

var _snakeAI2 = _interopRequireDefault(_snakeAI);

var _food = __webpack_require__(0);

var _food2 = _interopRequireDefault(_food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AIGame = function () {
  function AIGame() {
    _classCallCheck(this, AIGame);

    this.snakeCanvas = document.getElementById("ai-game-canvas");
    this.ctx = this.snakeCanvas.getContext("2d");

    this.gameViewHeight = this.snakeCanvas.height;
    this.gameViewWidth = this.snakeCanvas.width;

    this.score = 0;
    this.speed = 100;
    this.init();
  }
  // init direction


  _createClass(AIGame, [{
    key: 'init',
    value: function init() {
      this.direction = "down";
      this.rightPressed = false;
      this.leftPressed = false;
      this.upPressed = false;
      this.downPressed = false;

      this.snake = new _snakeAI2.default();
      this.food = new _food2.default();
      this.food.drawRandomFood(this.gameViewWidth, this.gameViewHeight, this.snake);
    }
    // check wall collision

  }, {
    key: 'wallCollisionCheck',
    value: function wallCollisionCheck(x, y) {
      // debugger;
      if (x === -1 || y === -1 || x === this.gameViewWidth / this.snake.unitSize || y === this.gameViewHeight / this.snake.unitSize) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'willTouchWall',
    value: function willTouchWall(x, y) {
      if (x === 0 || y === 0 || x === this.gameViewWidth / this.snake.unitSize - 1 || y === this.gameViewHeight / this.snake.unitSize - 1) {
        return true;
      } else {
        return false;
      }
      // debugger
    }

    // check body collision

  }, {
    key: 'bodyCollisionCheck',
    value: function bodyCollisionCheck(x, y) {
      for (var i = 1; i < this.snake.snakeArr.length; i++) {
        if (this.snake.snakeArr[i].x === x && this.snake.snakeArr[i].y === y) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: 'drawScore',
    value: function drawScore() {
      this.ctx.beginPath();
      this.ctx.font = "16px classic-font";
      // this.ctx.fillStyle = "#0095DD";
      this.ctx.fillStyle = "#fff";
      this.ctx.fillText("AI SCORE: " + this.score, 8, 20);
      this.ctx.closePath();
    }
  }, {
    key: 'gameForAI',
    value: function gameForAI() {
      // clear the screen;
      this.ctx.clearRect(0, 0, this.snakeCanvas.width, this.snakeCanvas.height);
      // food.drawFood(ctx, 24, 0);

      // collision check
      if (this.bodyCollisionCheck(this.snake.headX, this.snake.headY) || this.wallCollisionCheck(this.snake.headX, this.snake.headY)) {
        // debugger;
        // comment this back later
        // alert("GAME OVER");
        //
        // document.location.reload();
        if (this.score > 0) {
          // this.score--;
          this.score -= 2;
        }
        this.snake.snakeArr.pop();
        this.snake.snakeArr.pop();
      }

      this.food.drawFood(this.ctx);
      // food.drawfoodPic(ctx);
      this.snake.drawSnake(this.ctx);
      this.drawScore();
      // Need to implement here
      // snake.snakeMovement(direction);
      this.snake.move(this.food);
      if (this.snake.eat(this.food)) {
        this.score++;
        // this.speed -= 5;
        // let randomWidthX = gameViewWidth / (Math.floor( Math.random() * 4 + 1));
        // let randomHeightY = gameViewWidth / (Math.floor( Math.random() * 4 + 1));
        this.food.drawRandomFood(this.gameViewWidth, this.gameViewWidth, this.snake);
      }
    }
  }]);

  return AIGame;
}();

exports.default = AIGame;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
  function Snake() {
    _classCallCheck(this, Snake);

    this.snakeArr = [];
    this.unitSize = 20;
    this.headX = 0;
    this.headY = 0;
    this.pos = [];
    this.initSnake();
    this.dir = "down";
  }

  _createClass(Snake, [{
    key: "initSnake",
    value: function initSnake() {
      var length = 5;
      for (var i = 0; i < length; i++) {
        // snake head at index 0
        this.snakeArr.unshift({ x: i, y: 0 });
        // init pos
        this.pos.unshift([i, 0]);
      }
      this.headX = this.snakeArr[0].x;
      this.headY = this.snakeArr[0].y;
      // debugger;
    }
  }, {
    key: "drawAUnitSquare",
    value: function drawAUnitSquare(ctx, x, y) {
      ctx.beginPath();
      ctx.rect(x * this.unitSize, y * this.unitSize, this.unitSize, this.unitSize);
      // ctx.fillStyle = "#F5FA30";
      // ctx.fillStyle = "#000";
      // ctx.fillStyle = "#585858";
      ctx.fillStyle = "#C33D2C";
      ctx.fill();
      // border
      // ctx.strokeStyle = "red";
      ctx.strokeStyle = "#FFF";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
    }

    // draw snake body (build up by unit square)

  }, {
    key: "drawSnake",
    value: function drawSnake(ctx) {
      for (var i = 0; i < this.snakeArr.length; i++) {
        this.drawAUnitSquare(ctx, this.snakeArr[i].x, this.snakeArr[i].y);
      }
    }
  }, {
    key: "snakeMovement",
    value: function snakeMovement(direction) {
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      // update the head to get the new head
      this.dir = direction;
      switch (direction) {
        case "up":
          this.headY -= step;
          break;
        case "down":
          this.headY += step;
          break;
        case "left":
          this.headX -= step;
          break;
        case "right":
          this.headX += step;
          break;
        // default:
        //   this.headX = this.headX;
        //   this.headY = this.headY;
        //   break;
      }
    }
  }, {
    key: "wallRight",
    value: function wallRight() {
      return this.headX === 24;
    }
  }, {
    key: "wallLeft",
    value: function wallLeft() {
      return this.headX === 0;
    }
  }, {
    key: "wallTop",
    value: function wallTop() {
      return this.headY === 0;
    }
  }, {
    key: "wallBottom",
    value: function wallBottom() {
      return this.headY === 24;
    }

    // check if body at right

  }, {
    key: "bodyAtRight",
    value: function bodyAtRight(food) {
      // debugger
      for (var i = 1; i < this.snakeArr.length; i++) {
        // check body right
        if (this.snakeArr[i].x <= food.foodPos.x && this.snakeArr[i].x >= this.headX) {
          // if(this.snakeArr[i].x <= food.foodPos.x && this.snakeArr[i].x === this.headX+1) {
          // if(this.snakeArr[i].x >= this.headX) {
          if (this.snakeArr[i].y === this.headY) {
            // debugger
            return true;
          }
        }
      }
      return false;
    }

    // check if body at left

  }, {
    key: "bodyAtLeft",
    value: function bodyAtLeft(food) {
      // debugger
      for (var i = 1; i < this.snakeArr.length; i++) {
        // check body left
        if (this.snakeArr[i].x >= food.foodPos.x && this.snakeArr[i].x <= this.headX) {
          // if(this.snakeArr[i].x >= food.foodPos.x && this.snakeArr[i].x === this.headX-1) {
          // if(this.snakeArr[i].x <= this.headX) {
          if (this.snakeArr[i].y === this.headY) {
            return true;
          }
        }
      }
      return false;
    }

    // check if body at top

  }, {
    key: "bodyAtTop",
    value: function bodyAtTop(food) {
      // debugger
      for (var i = 1; i < this.snakeArr.length; i++) {
        // check body top
        if (this.snakeArr[i].y >= food.foodPos.y && this.snakeArr[i].y <= this.headY) {
          // if(this.snakeArr[i].y >= food.foodPos.y && this.snakeArr[i].y === this.headY-1) {
          // if(this.snakeArr[i].y <= this.headY) {
          if (this.snakeArr[i].x === this.headX) {
            return true;
          }
        }
      }
      return false;
    }

    // check if body at bottom

  }, {
    key: "bodyAtBottom",
    value: function bodyAtBottom(food) {
      // debugger
      for (var i = 1; i < this.snakeArr.length; i++) {
        // check body bottom
        if (this.snakeArr[i].y <= food.foodPos.y && this.snakeArr[i].y >= this.headY) {
          // if(this.snakeArr[i].y <= food.foodPos.y && this.snakeArr[i].y === this.headY+1) {
          // if(this.snakeArr[i].y >= this.headY) {
          if (this.snakeArr[i].x === this.headX) {
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: "bounceBack",
    value: function bounceBack() {}

    // move for AI

  }, {
    key: "move",
    value: function move(food) {
      if (food.foodPos.x > this.headX) {
        // food at right
        // debugger
        // moving right
        if (this.dir === "right") {
          if (!this.bodyAtRight(food) && !this.wallRight()) {
            this.snakeMovement("right");
          } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
            this.snakeMovement("down");
          } else if (!this.bodyAtTop(food) && !this.wallTop()) {
            this.snakeMovement("up");
          }
        } else if (this.dir === "left") {
          // moving left
          if (!this.bodyAtTop(food) && !this.wallTop()) {
            this.snakeMovement("up");
          } else if (!this.bodyAtLeft(food) && !this.wallLeft()) {
            this.snakeMovement("left");
          } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
            this.snakeMovement("down");
          }
        } else if (this.dir === "up") {
          // moving up
          if (!this.bodyAtRight(food) && !this.wallRight()) {
            this.snakeMovement("right");
          } else if (!this.bodyAtTop(food) && !this.wallTop()) {
            this.snakeMovement("up");
          } else if (!this.bodyAtLeft(food) && !this.wallLeft()) {
            this.snakeMovement("left");
          }
        } else if (this.dir === "down") {
          // moving down
          if (!this.bodyAtRight(food) && !this.wallRight()) {
            this.snakeMovement("right");
          } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
            this.snakeMovement("down");
          } else if (!this.bodyAtLeft(food) && !this.wallLeft()) {
            this.snakeMovement("left");
          }
        }
        // } else {
        //   this.snakeMovement("down");
        // }
      } else if (food.foodPos.x < this.headX) {
        // food at left
        // debugger
        // moving left
        if (this.dir === "left") {
          if (!this.bodyAtLeft(food) && !this.wallLeft()) {
            this.snakeMovement("left");
          } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
            this.snakeMovement("down");
          } else if (!this.bodyAtTop(food) && !this.wallTop()) {
            this.snakeMovement("up");
          }
        } else if (this.dir === "right") {
          // moving right
          if (!this.bodyAtTop(food) && !this.wallTop()) {
            this.snakeMovement("up");
          } else if (!this.bodyAtRight(food) && !this.wallRight()) {
            this.snakeMovement("right");
          } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
            this.snakeMovement("down");
          }
        } else if (this.dir === "up") {
          // moving up
          if (!this.bodyAtLeft(food) && !this.wallLeft()) {
            this.snakeMovement("left"); //33
          } else if (!this.bodyAtTop(food) && !this.wallTop()) {
            this.snakeMovement("up");
          } else if (!this.bodyAtRight(food) && !this.wallRight()) {
            this.snakeMovement("right");
          }
        } else if (this.dir === "down") {
          // moving down
          if (!this.bodyAtLeft(food) && !this.wallLeft()) {
            this.snakeMovement("left");
          } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
            this.snakeMovement("down");
          } else if (!this.bodyAtRight(food) && !this.wallRight()) {
            this.snakeMovement("right");
          }
        }
      } else if (food.foodPos.x === this.headX) {
        // food at the same x
        if (food.foodPos.y > this.headY) {
          // food at bottom

          if (this.dir === "down") {
            // moving down
            if (!this.bodyAtBottom(food) && !this.wallBottom()) {
              this.snakeMovement("down");
            } else if (!this.bodyAtRight(food) && !this.wallRight()) {
              this.snakeMovement("right");
            } else if (!this.bodyAtLeft(food) && !this.wallLeft()) {
              this.snakeMovement("left");
            }
          } else if (this.dir === "up") {
            // moving up
            if (!this.bodyAtLeft(food) && !this.wallLeft()) {
              this.snakeMovement("left");
            } else if (!this.bodyAtRight(food) && !this.wallRight()) {
              this.snakeMovement("right");
            } else if (!this.bodyAtTop(food) && !this.wallTop()) {
              this.snakeMovement("up");
            }
          }if (this.dir === "left") {
            // moving left
            if (!this.bodyAtBottom(food) && !this.wallBottom()) {
              this.snakeMovement("down");
            } else if (!this.bodyAtLeft(food) && !this.wallLeft()) {
              this.snakeMovement("left");
            } else if (!this.bodyAtTop(food) && !this.wallTop()) {
              this.snakeMovement("up");
            }
          } else if (this.dir === "right") {
            // moving right
            if (!this.bodyAtBottom(food) && !this.wallBottom()) {
              this.snakeMovement("down");
            } else if (!this.bodyAtRight(food) && !this.wallRight()) {
              this.snakeMovement("right");
            } else if (!this.bodyAtTop(food) && !this.wallTop()) {
              this.snakeMovement("up");
            }
          }
        } else {
          // food at top       if(food.foodPos.y <= this.headY)

          if (this.dir === "up") {
            //moving up
            if (!this.bodyAtTop(food) && !this.wallTop()) {
              this.snakeMovement("up");
            } else if (!this.bodyAtRight(food) && !this.wallRight()) {
              this.snakeMovement("right");
            } else if (!this.bodyAtLeft(food) && !this.wallLeft()) {
              this.snakeMovement("left");
            }
          } else if (this.dir === "down") {
            // moving down
            if (!this.bodyAtLeft(food) && !this.wallLeft()) {
              this.snakeMovement("left");
            } else if (!this.bodyAtRight(food) && !this.wallRight()) {
              this.snakeMovement("right");
            } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
              this.snakeMovement("down");
            }
          } else if (this.dir === "left") {
            // moving left
            if (!this.bodyAtTop(food) && !this.wallTop()) {
              this.snakeMovement("up");
            } else if (!this.bodyAtLeft(food) && !this.wallLeft()) {
              this.snakeMovement("left");
            } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
              this.snakeMovement("down");
            }
          } else if (this.dir === "right") {
            // moving right
            if (!this.bodyAtTop(food) && !this.wallTop()) {
              this.snakeMovement("up");
            } else if (!this.bodyAtRight(food) && !this.wallRight()) {
              this.snakeMovement("right");
            } else if (!this.bodyAtBottom(food) && !this.wallBottom()) {
              this.snakeMovement("down");
            }
          }
        }
      }
    }

    // does snake eat?

  }, {
    key: "eat",
    value: function eat(food) {
      // this.move(food);
      // new head after updating headX & headY
      if (this.headX === food.foodPos.x && this.headY === food.foodPos.y) {
        var newHead = { x: this.headX, y: this.headY };
        this.snakeArr.unshift(newHead);
        this.pos.unshift([this.headX, this.headY]);
        return true;
      } else {
        // unshift new head to snakeArr
        this.snakeArr.pop();
        this.pos.pop();
        this.snakeArr.unshift({ x: this.headX, y: this.headY });
        this.pos.unshift([this.headX, this.headY]);
        return false;
      }
      // debugger
    }
  }]);

  return Snake;
}();

exports.default = Snake;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map