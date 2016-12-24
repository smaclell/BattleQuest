import {combineReducers} from 'redux';
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
  player,
});
