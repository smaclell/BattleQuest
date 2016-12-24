import React from 'react';

const allowed = k => k !== 'name';

const Stats = props => (
  <ul className='stats'>
    {Object.keys(props).filter(allowed).map(k => (
      <li key={k}>
        <strong>{k}</strong>: {props[k]}
      </li>
    ))}
  </ul>
);

export default Stats;
