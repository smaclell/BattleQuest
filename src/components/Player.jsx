import React from 'react';
import Stats from './Stats';

const Player = props => (
  <div className="player">
    <h2>{props.name}</h2>
    <Stats {...props} />
  </div>
);

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Player;
