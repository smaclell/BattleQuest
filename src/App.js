import React, { Component } from 'react';
import './App.css';

import Game from './containers/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>BattleQuest</h1>
          <p className="App-swords">&#x2694;</p>
        </div>
        <Game />
        <div className="App-footer">
          <h2 className="App-intro">Introduction</h2>
          <p>This is a game so simple it plays itself. Open your browser to destroy the monsters in your way!</p>
          <p>Inspired by <a href="http://progressquest.com/">Progress Quest</a></p>
        </div>
      </div>
    );
  }
}

export default App;
