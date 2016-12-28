import * as actions from '../actions/player';
import experience from './experience';

function actual(state = null, action) {
  if (action.type === actions.CREATE) {
    return action.settings;
  }

  return state;
}

export default function player(state, action) {
  let result = actual(state, action);
  if (!result) {
    return result;
  }

  const exp = experience(result.experience, action);
  if (exp !== result.experience) {
    if (result === state) {
      result = {
        ...state,
        experience: exp,
      };
    } else {
      result.experience = exp;
    }
  }

  return result;
}
