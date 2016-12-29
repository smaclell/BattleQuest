import * as actions from '../actions/player';
import reducer from './player';

it('defaults to null', () => {
  expect(reducer(undefined, {type: 'any'})).toBeNull();
});

describe('create', () => {
  it('returns created players', () => {
    const settings = {
      name: 'scott',
      strength: 2,
      vitality: 1,
      intelligence: 1,
      speed: 1,
    };

    const action = actions.create(settings);
    const result = reducer({}, action);

    expect(result).toBe(settings);
  });
});

describe('level', () => {

  // http://www.diablowiki.net/Experience
  it('increases the main stat +3, vitality +2 and others +1', () => {
    const initial = {
      strength: 9,
      vitality: 5,
      intelligence: 2,
      speed: 1,

      experience: {
        increment: 1,
        level: 1,
        next: 1,
        current: 1
      },
    };

    const result = reducer(initial, {type: actions.LEVEL_UP});

    expect(result.strength).toEqual(12);
    expect(result.vitality).toEqual(7);
    expect(result.intelligence).toEqual(3);
    expect(result.speed).toEqual(2);
  });
});
