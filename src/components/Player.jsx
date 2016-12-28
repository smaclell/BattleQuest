import React from 'react';
import Stats from './Stats';
import Experience from './Experience';

const Player = props => (
  <div className="player">
    <h2>{props.name}</h2>
    <Experience {...props.experience} />
    <Stats {...props} exclude={['name', 'experience']} />
  </div>
);

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Player;
