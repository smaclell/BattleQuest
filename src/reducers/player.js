import * as actions from '../actions/player';

export default function player(state = null, action) {
  if (action.type === actions.CREATE) {
    action.settings.experience = action.settings.experience || 0;
    action.settings.level = action.settings.level || 1;
    return action.settings;
  }

  if (action.type === actions.KILLED) {
    return {
      ...state,
      experience: (state.experience || 0) + 10,
    };
  }

  return state;
}
