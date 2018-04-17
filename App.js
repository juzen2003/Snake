import {gameForPlayer} from './playerGame';
import {gameForAI} from './AIGame';

function game() {
  // gameForPlayer();
  gameForAI();
}
setInterval(game, 130);
