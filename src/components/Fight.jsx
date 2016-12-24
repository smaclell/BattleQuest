import React from 'react';
import Monster from './Monster';
import Player from './Player';

const Fight = ({monster, player}) => (
  <div className='fight'>
    <Player {...player} />
    <Monster {...monster} />
  </div>
);

Fight.propTypes = {
  monster: React.PropTypes.object.isRequired,
  player: React.PropTypes.object.isRequired,
};

export default Fight;
