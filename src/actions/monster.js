export const CREATE = 'CREATE_MONSTER';
export const ATTACK = 'ATTACK_MONSTER';

export function create({name}) {
  return {
    type: CREATE,
    name,
  };
}

export function attack({damage}) {
  return {
    type: ATTACK,
    damage,
  };
}
