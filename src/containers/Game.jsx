import React from 'react';
import { connect } from 'react-redux';
import Fight from '../components/Fight';

const Game = ({monster, player}) => (
  monster && player ? <Fight monster={monster} player={player} /> : <div>Hello World</div>
);

export default connect(s => s)(Game);
