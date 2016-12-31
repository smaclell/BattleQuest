import * as m from './monster';
import * as p from './player';
import random from '../data/random';

export function start() {
  return (dispatch, getState) => {
    dispatch(p.create({
      name: 'scott',
      strength: 2,
      intelligence: 2,
      speed: 3,
      vitality: 2,
    }));

    function createMonster() {
      const {player} = getState();
      dispatch(m.create({...player.experience, ...player}));
    };

    createMonster();

    let accumulator;
    let lastTimestamp = -1;
    const loop = timestamp => {
      window.requestAnimationFrame(loop);
      if (lastTimestamp < 0) {
        accumulator = 0;
        lastTimestamp = timestamp;
        return;
      }

      const {player} = getState();

      // Treat the accumulator like a duty cycle based on the players speed
      const delta = timestamp - lastTimestamp;
      accumulator += delta * 0.25;
      accumulator += delta * (1 - Math.exp(-player.speed / 25.0));
      lastTimestamp = timestamp;

      const wait = 1000;
      for (;accumulator > wait; accumulator -= wait) {
        const {monster} = getState();
        if (monster.health <= 0) {
          accumulator = 0;
          dispatch(p.killed(monster));
          createMonster();
          break;
        }

        const normal = () => Math.floor((random.next() + 0.25) * player.strength);
        const magic = () => random.between(1, 5) * player.intelligence;
        const damage = random.between(0,9) === 1 ? magic() : normal();

        dispatch(m.attack({
          damage,
        }));
      }
    };

    window.requestAnimationFrame(loop);
  };
}
