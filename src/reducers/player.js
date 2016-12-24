import * as actions from '../actions/player';

export default function player(state = null, action) {
  if (action.type === actions.CREATE) {
    return action.settings;
  }

  return state;
}
