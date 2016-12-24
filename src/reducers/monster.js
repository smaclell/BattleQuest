import * as actions from '../actions/monster';

export default function monster(state = null, action) {
  const {type} = action;

  if (type === actions.CREATE) {
    return {
      name: action.name,
      health: 10,
    }
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
