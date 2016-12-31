import * as actions from '../actions/monster';
import reducer from './monster';

it('defaults to null', () => {
  expect(reducer(undefined, {type: 'any'})).toBeNull();
});

describe('create', () => {
  it('sets the up a basic monster', () => {
    const action = actions.create({
      level: 1,
      strength: 1,
      intelligence: 1,
    });

    const result = reducer(undefined, action);

    expect(result.name).toBeDefined();
    expect(result.health).toBeDefined();
  });
});

describe('attack', () => {
  it('loses heath when attacked', () => {
    const initial = {
      other: 'derp',
      health: 12,
    };

    const action = actions.attack({damage: 10});
    const result = reducer(initial, action);

    expect(result).toEqual({
      other: 'derp',
      health: 2
    });
  });

  it('causes health to go negative when attacked enough', () => {
    const initial = {
      other: 'derp',
      health: 8,
    };

    const action = actions.attack({damage: 10});
    const result = reducer(initial, action);

    expect(result).toEqual({
      other: 'derp',
      health: -2
    });
  });
});
