import React from 'react';
import Stats from './Stats';
import classnames from 'classnames';
import './monster.css';

const Monster = props => (
  <div className={classnames({monster: true, dead: props.health <= 0})}>
    <h2>{props.name}</h2>
    <Stats {...props} />
  </div>
);

Monster.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Monster;
