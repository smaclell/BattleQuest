import React from 'react';

const allowed = exclude => {
  exclude = exclude || ['name'];
  exclude.push('exclude');

  return k => !exclude.includes(k)
};

const Stat = ({label, value}) => {
  let text = value;
  if (typeof value === 'object') {
    text = [value.current, ' / ', value.max || value.next];
  }

  return (
    <li>
      <strong>{label}</strong>: {text}
    </li>
  );
};

const Stats = props => (
  <ul className='stats'>
    {Object.keys(props).filter(allowed(props.exclude)).map(k => (
      <Stat key={k} label={k} value={props[k]} />
    ))}
  </ul>
);

export default Stats;
