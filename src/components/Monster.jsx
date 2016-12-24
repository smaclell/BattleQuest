import React from 'react';
import Stats from './Stats';

const Monster = props => (
  <div className="monster">
    <h2>{props.name}</h2>
    <Stats {...props} />
  </div>
);

Monster.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Monster;
