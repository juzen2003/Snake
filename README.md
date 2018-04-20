# Snake vs Snake
[Live Demo](https://juzen2003.github.io/)  
[Design Doc](https://github.com/juzen2003/Snake-vs-Snake/wiki)

[Snake vs Snake](https://juzen2003.github.io/), a spin of the classic [Snake](https://www.google.com/search?q=classic+snake+game&oq=classic+snake+game&aqs=chrome..69i57j69i60j0l4.3008j0j7&sourceid=chrome&ie=UTF-8), is a one minute food competition game between human player and customized AI snake.

### Rules
+ Within 1 minute, user controls a snake to compete for food with the ai snake, and whoever gets the higher points will win.
+ Whenever the snake gets the good, it would increase the points and its length by 1 pixel.
+ Whenever the snake hits the wall or it's own body, it would shrink and lose 1 points
+ To compensate the fairness and also keep the difficulty of the game, AI snake would lose 2 points whenever it hits walls or its own body.

### Technologies

Snake vs Snake is built with JavaScript for DOM manipulation and user interaction.

## Feature
### AI Snake
On the right screen, customized AI snake is running for food to compete with Human player. It's an own-made AI which is not always going for shortest path, and could make some mistakes to make the game fair but challenged.

![AI Snake on the Right Screen](https://github.com/juzen2003/Snake-vs-Snake/blob/master/images/gameRunning.png)

### Easy-to-Use UI
By clicking play button, user can start the game.

![Init Page ](https://github.com/juzen2003/Snake-vs-Snake/blob/master/images/gamePage.png)

When time is up after 1 minutes, an summary screen would pop out.

![Summary Page ](https://github.com/juzen2003/Snake-vs-Snake/blob/master/images/gameRunning.png)

## Application Structure
1. Canvas Game Screens
 + 2 Snakes and Games
2. Middle info section
 + Title
 + Brief control menu
 + Count down timer
 + Play button
3. Summary Page
 + Display results and final score
 + Reset button


## Challenges
* AI snake is not perfect, some of corner cases would make it go into corner and loses all points, temporarily implementing the bounce back feature to make the AI bounce back whenever it hits that corner case.
* Body collision logic for AI snake is not perfect as long as it grows super long.
* Key input detection, sometimes when user inputs two directions sequentially in a very short second when the snake is reaching the wall, it could cause the snake to move out of the board.

## Future Features and Improvement
### Snake
* For experimental purpose, AI snake moving logic can be improved with algorithm (BFS, DFS, etc), but it would cause the game impossible to beat.
* Improve the collision logic when AI snake grows super long.

### Instruction page
* Add a separate instruction menu or page to provide more details of the game.

### MISC
* Allow user to switch difficulty or change level.
