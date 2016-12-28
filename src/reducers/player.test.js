import * as actions from '../actions/player';
import reducer from './player';

it('defaults to null', () => {
  expect(reducer(undefined, {type: 'any'})).toBeNull();
});

describe('create', () => {
  it('returns created players', () => {
    const settings = {name: 'scott', strength: 1};
    const action = actions.create(settings);
    const result = reducer({}, action);

    expect(result).toBe(settings);
  });

  it('adds experience', () => {
    const settings = {name: 'scott', strength: 1};
    const action = actions.create(settings);
    const result = reducer({}, action);

    expect(result.experience).toEqual(0);
  });

  it('adds initial level', () => {
    const settings = {name: 'scott', strength: 1};
    const action = actions.create(settings);
    const result = reducer({}, action);

    expect(result.level).toEqual(1);
  });
});

describe('killed', () => {
  it('updates player experience', () => {
    const initial = {
      name: 'scott',
      strength: 1,
      experience: 10,
    };

    const action = actions.killed({name: 'monster'});
    const result = reducer(initial, action);

    expect(result).toEqual({
      name: 'scott',
      strength: 1,
      experience: 20,
    });
  });
});
