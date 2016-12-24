import {combineReducers} from 'redux';
import monster from './monster';
import player from './player';

// Store
/*
{
  player: {
    name: string,
    strength: number,
  },
  monster: {
    name: string,
    // No damage for now
    health: number
  },
}
*/

export default combineReducers({
  monster,
  player,
});
