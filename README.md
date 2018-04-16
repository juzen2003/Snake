# Snake
## Overview
A classic game allows user to control a moving snake and collect food. Every time the snake collects the food, it would score a point, and the length of its body would increase. It would get more difficult for a snake to move as its body grows longer. Whenever the snake hits the wall or its own body, the game is over.

## Technologies
The project would be built with:
* HTML5  Canvas for general layout rendering
* CSS for styling
* Vanilla Javascript for game logic and dynamic component movement
* Webpack to bundle up different script

## MVP
Basic game function:
* User can control the snake, and enjoy the game with flawless game logic (wall or body collision detection, etc)
* User can modify the snake speed (difficulty of the game)

User interface:
* Proper gaming layout
* A modal page with controlling info and allow user to start the game

Possible extra features & improvement if time is allowed:
* Extra random walls in between the main canvas to increase the difficulty of the game
* Add moving bullets to the game to increase the difficulty
* Sound effect whenever collision happened (hit the wall , body, or eat the food)
* Allow two players or a demo player

## Wireframes
### Welcome
![Welcome Page](https://github.com/juzen2003/Snake/blob/master/proposal_wireframes/snake.png)

### Game
![Game Page](https://github.com/juzen2003/Snake/blob/master/proposal_wireframes/snake_game.png)


## Timeline
### Weekend
- [x] Completed MDN tutorial to get basic understanding of building game with Javascript.
- [ ] Draw out different version of game layout, and pick proper layout of the game.

### Day 1
- [ ] Setup all files necessary for the game, including index.html, webpack, package.json, etc.
- [ ] Complete layout of the game, including drawing objects (snake, food, etc).

### Day 2
- [ ] Complete game logic, make sure wall and body collision are implemented correctly.
- [ ] Implement user control to the game.

### Day 3
- [ ] Implement the speed bar
- [ ] Test to confirm the game logic is thorough.
- [ ] Pick and research one of extra features if schedule is ahead.

### Day 4
- [ ] Create welcome modal page.
- [ ] Implement one of extra features if timeline is ahead.
