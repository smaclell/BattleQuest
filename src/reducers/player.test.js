import * as actions from '../actions/player';
import reducer from './player';

it('defaults to null', () => {
  expect(reducer(undefined, {type: 'any'})).toBeNull();
});

it('returns created players', () => {
  const settings = {name: 'scott', strength: 1};
  const action = actions.create(settings);
  const result = reducer({}, action);

  expect(result).toBe(settings);
});

