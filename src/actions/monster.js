export const CREATE = 'CREATE_MONSTER';
export const ATTACK = 'ATTACK_MONSTER';

export function create(stats) {
  return {
    type: CREATE,
    stats,
  };
}

export function attack({damage}) {
  return {
    type: ATTACK,
    damage,
  };
}
