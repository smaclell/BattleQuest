import React from 'react';
import './experience.css';

const Experience = ({level, current, next}) => (
  <div className='experience'>
    <div className='level'>
      LEVEL: {level}
    </div>
    <div className='progress'>
      <span className='amount' style={{width: 100.0 * (current / next) + '%'}} />
    </div>
  </div>
);

export default Experience;
