import React from 'react';
import './App.css';

import { PlayGrid } from './PlayGrid';
import { nbCards, colors } from './../utils/Constantes';

class App extends React.Component {
  state = {
    grid: [...colors, ...colors],
    counterOfTries: 0,
    score: '',
    returnedCard: [],
    winCards: [],
  };
  gridRef = null;
  timeOutId = null;

  whenACardIsClicked = index => {
    if (this.state.returnedCard.length === 2) {
      clearTimeout(this.timeOutId);
    }
    this.setState(prevState => {
      const oldCards =
        prevState.returnedCard.length === 2 ? [] : prevState.returnedCard;
      return {
        returnedCard: [...oldCards, index],
      };
    }, this.whenTheSecondCardIsClicked);
  };

  whenTheSecondCardIsClicked = () => {
    if (this.state.returnedCard.length === 2) {
      const [firstCard, secondCard] = this.state.returnedCard;
      if (this.state.grid[firstCard] === this.state.grid[secondCard]) {
        this.setState(prevState => {
          return {
            counterOfTries: prevState.counterOfTries + 1,
            returnedCard: [],
            winCards: [...prevState.returnedCard, ...prevState.winCards],
          };
        }, this.whenAllCardsAreReturned);
      } else {
        this.setState(prevState => {
          return {
            counterOfTries: prevState.counterOfTries + 1,
          };
        }, this.returnAllCardsAfterDelay);
      }
    }
  };

  returnAllCardsAfterDelay = () => {
    this.timeOutId = setTimeout(() => {
      this.setState({
        returnedCard: [],
      });
    }, 1000);
  };

  whenAllCardsAreReturned = () => {
    const {
      state: { grid, counterOfTries },
    } = this;
    if (this.state.winCards.includes(this.state.grid)) {
      switch (this.state.counterOfTries) {
        case this.state.counterOfTries === { nbCards } / 2:
          this.setState({
            score: 'GG vous avez tout trouvé du 1er coup!',
          });
          break;
        default:
          this.setState({
            score: 'Essaie encore ! ',
          });
      }
    }
  };

  render() {
    console.log(this.state.counterOfTries);
    console.log(this.state.winCards);
    const {
      state: { score, counterOfTries, grid, returnedCard, winCards },
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
        <div>Essais : {counterOfTries}</div>
        <PlayGrid
          onClick={this.whenACardIsClicked}
          grid={grid}
          returnedCard={returnedCard}
          winCards={winCards}
        />
        <div>{score}</div>
      </div>
    );
  }
}

export default App;
