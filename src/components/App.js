import React from 'react';
import './App.css';

import { PlayGrid } from './PlayGrid';
import { nbCards } from './../utils/Constantes';
import { colors } from './../utils/Constantes';

class App extends React.Component {
  state = {
    grid: Array(nbCards).fill(Array(nbCards).fill('Card')),
    counterClick: 0,
    score: 0,
    returnedCard: [],
  };
  gridRef = null;

  whenACardIsClicked = index => {
    console.log(index);
    this.setState(prevState => {
      return {
        counterClick: prevState.counterClick + 1,
        returnedCard: [...prevState.returnedCard, index],
      };
    });
  };

  whenTheSecondCardIsClicked = index =>{
    
  }

  render() {
    console.log(this.state.counterClick);
    const {
      state: { score, returnedCard },
    } = this;
    return (
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
        }}
      >
        <h1>MEMORY GAME</h1>
        <div>Score : {score}</div>
        <PlayGrid
          onClick={this.whenACardIsClicked}
          colors={colors}
          returnedCard={returnedCard}
        />
      </div>
    );
  }
}

export default App;
