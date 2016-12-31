import * as actions from '../actions/monster';
import Monsters from '../data/monsters';

export default function monster(state = null, action) {
  const {type} = action;

  if (type === actions.CREATE) {
    return Monsters.next(action.stats);
  }

  if (type === actions.ATTACK) {
    const {damage} = action;
    return {
      ...state,
      health: state.health - damage,
    }
  }

  return state;
}
