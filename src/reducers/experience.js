import * as actions from '../actions/player';

const factor = 1.25;

export default function experience(state = {level: 1, current: 0, next: 100, increment: 100}, action) {
  if (action.type === actions.KILLED) {
    return {
      ...state,
      current: state.current + 10,
    };
  }

  if (action.type === actions.LEVEL_UP && state.current >= state.next) {
    return {
      ...state,
      level: state.level + 1,
      increment: factor * state.increment,
      next: state.increment + state.next,
    };
  }

  return state;
}
