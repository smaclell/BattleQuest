import * as actions from '../actions/player';
import experience from './experience';

function actual(state = null, action) {
  if (action.type === actions.CREATE) {
    return action.settings;
  }

  if (action.type === actions.LEVEL_UP) {
    let {strength, vitality, intelligence, speed} = state;

    vitality += 2;
    if (strength > intelligence && strength > speed) {
      strength += 3;
      intelligence++;
      speed++;
    } else if (intelligence > strength && intelligence > speed) {
      intelligence += 3;
      speed++;
      strength++;
    } else if (speed > strength && speed > intelligence) {
      speed += 3;
      intelligence++;
      strength++;
    }

    return {
      ...state,
      strength,
      vitality,
      intelligence,
      speed,
    };
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
