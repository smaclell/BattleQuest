export const CREATE = 'CREATE_PLAYER';

export function create(settings) {
  const required = ['name', 'strength'];
  const missing = required.filter(r => typeof(settings[r]) === 'undefined').join(', ');
  if (missing !== '') {
    throw Error(`Missing the following required settings ${missing}`);
  }

  return {
    type: CREATE,
    settings,
  };
}
