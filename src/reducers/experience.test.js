import * as actions from '../actions/player';
import reducer from './experience';

describe('defaults', () => {
  const result = reducer(undefined, {type: 'any'});

  it('has level 1', () => expect(result.level).toEqual(1));
  it('has current experience 0', () => expect(result.current).toEqual(0));
  it('has next be greater than zero', () => expect(result.next).toBeGreaterThan(0));
});

describe('killed', () => {

  const action = {type: actions.KILLED, monster: {name: 'monster'}};

  it('increases current experience', () => {
    const initial = {
      current: 0,
      next: 100,
    };

    const result = reducer(initial, action);

    expect(result.current).toEqual(10);
  });

  it('increases current experience past next', () => {
    const initial = {
      current: 99,
      next: 100,
    };

    const result = reducer(initial, action);

    expect(result.current).toEqual(109);
  });

});

describe('level', () => {
  const action = {type: actions.LEVEL_UP};

  it('does nothing if the experience is not enough', () => {
    const initial = {
      current: 0,
      next: 100,
    };

    const result = reducer(initial, action);

    expect(result).toBe(initial);
  });

  it('increases the next goal and level when current is equal to next', () => {
    const initial = {
      increment: 100,
      current: 100,
      next: 100,
      level: 1,
    };

    const result = reducer(initial, action);

    expect(result.level).toEqual(2);
    expect(result.current).toEqual(initial.current);
    expect(result.next).toBeGreaterThan(initial.next);
    expect(result.increment).toBeGreaterThan(initial.increment);
  });

  it('increases the next goal and level when current is over next', () => {
    const initial = {
      increment: 100,
      current: 101,
      next: 100,
      level: 1,
    };

    const result = reducer(initial, action);

    expect(result.level).toEqual(2);
    expect(result.current).toEqual(initial.current);
    expect(result.next).toBeGreaterThan(initial.next);
    expect(result.increment).toBeGreaterThan(initial.increment);
  });
});
