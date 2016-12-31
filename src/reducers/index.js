import {combineReducers} from 'redux';
import monster from './monster';
import player from './player';

export default combineReducers({
  monster,
  player,
});
