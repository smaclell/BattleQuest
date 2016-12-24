import * as actions from './player';

const valid = {
  name: 'tony stark',
  strength: 10,
};

it('explodes when required settings are missing', () => {
  const player = {
    ...valid,
  };

  delete player.name;

  expect(() => actions.create(player)).toThrow();
});

it('passes through what it receives if valid', () => {
  const result = actions.create(valid);

  expect(result.settings).toBe(valid);
});
