import random from './random';

const list = [
  {
    name: 'Vampire',
    health: ({level}) => random.between(1.5 * level, 4.5 * level),
    level: 5,
  },
  {
    name: 'Zombie',
    health: ({level}) => 10 + random.between(2 * level, 2.5 * level),
    level: 2,
  },
  {
    name: 'Ghost',
    health: ({level}) => 5 + random.between(level, 2 * level),
  },
  {
    name: 'Werewolf',
    health: ({level}) => 15 + random.between(2 * level, 3 * level),
    level: 3,
  },
  {
    name: 'Gnome',
    health: () => 10,
  },
  {
    name: 'Troll',
    health: ({level, strength}) => 3 * strength + level * random.between(level / 2, level / 2 + 10),
    level: 15,
  },
  {
    name: 'Ogre',
    health: ({level}) => 12 + random.between(level, 1.2 * level),
    level: 10,
  },
  {
    name: 'Dragon',
    health: ({level, strength}) => 1000 + random.between(4 * (strength + level), 10 * (strength + level)),
    level: 50,
  },
  {
    name: 'Unicorn',
    health: ({level, intelligence}) => 640 + intelligence * random.between(level, 4 * level),
    level: 40,
  },
  {
    name: 'Harpy',
    health: ({level}) => 10 + random.between(level, 1.2 * level),
    level: 8,
  },
];

const Monsters = {
  next(stats) {
    const {level} = stats;
    let pattern = null;
    do {
      pattern = random.pick(list);
      if (pattern.level && pattern.level >= level) {
        pattern = null;
      }
    } while(pattern == null);

    return {
      name: pattern.name,
      health: pattern.health(stats),
    }
  }
}

export default Monsters;
