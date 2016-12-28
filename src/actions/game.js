import * as m from './monster';
import * as p from './player';

let i = 0;
const names = [
  'larry',
  'moe',
  'curly',
];

export function start() {
  return (dispatch, getState) => {
    dispatch(p.create({name: 'scott', strength: 1}));

    function createMonster() {
      const name = names[i++];
      i %= names.length;

      dispatch(m.create({name}));
    };

    createMonster();

    let accumulator;
    let lastTimestamp = -1;
    const loop = timestamp => {
      if (lastTimestamp < 0) {
        accumulator = 0;
        lastTimestamp = timestamp;
        window.requestAnimationFrame(loop);
        return;
      }

      accumulator += timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const wait = 500;
      for (;accumulator > wait; accumulator -= wait) {
        const {monster, player} = getState();
        if (monster.health <= 0) {
          accumulator = 0;
          dispatch(p.killed(monster));
          createMonster();
          break;
        }

        dispatch(m.attack({
          damage: player.strength,
        }));
      }

      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  };
}