import * as m from './monster';
import * as p from './player';
import random from '../data/random';

export function start() {
  return (dispatch, getState) => {
    dispatch(p.create({
      name: 'scott',
      strength: 3,
      intelligence: 1,
      speed: 1,
      vitality: 1,
    }));

    function createMonster() {
      const {player} = getState();
      dispatch(m.create({...player.experience, ...player}));
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

        const normal = () => Math.floor((random.next() + 0.25) * player.strength);
        const magic = () => random.between(1, 5) * player.intelligence;
        const damage = random.between(0,5) === 1 ? magic() : normal();

        dispatch(m.attack({
          damage,
        }));
      }

      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  };
}
