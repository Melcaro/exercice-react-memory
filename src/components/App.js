import React from 'react';

import { DefaultState } from './DefaultState';
import { PlayGrid } from './PlayGrid';
import { nbCards } from './../utils/Constantes';

import { AppStyle, RestartButton, TriesInfo } from './Styles';

class App extends React.Component {
  state = DefaultState;
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
      state: { grid, winCards, counterOfTries },
    } = this;
    if (winCards.length === grid.length) {
      if (counterOfTries === nbCards / 2) {
        this.setState({
          score: 'GG you found it all!',
        });
      } else if (counterOfTries > nbCards / 2 && counterOfTries < nbCards) {
        this.setState({
          score: "Not bad but I'm sure you can do better!",
        });
      } else if (counterOfTries >= nbCards) {
        this.setState({
          score: 'That was hard... Try again! ',
        });
      } else {
        this.setState({
          score: 'Try again! ',
        });
      }
    }
  };

  restartTheGame = () => {
    this.setState(DefaultState);
  };

  render() {
    const {
      state: { score, counterOfTries, grid, returnedCard, winCards },
    } = this;
    return (
      <AppStyle>
        <h1>MEMORY GAME</h1>
        <TriesInfo>Tries : {counterOfTries}</TriesInfo>
        <div>{score}</div>
        <RestartButton onClick={this.restartTheGame}>PLAY AGAIN</RestartButton>
        <PlayGrid
          onClick={this.whenACardIsClicked}
          grid={grid}
          returnedCard={returnedCard}
          winCards={winCards}
        />
      </AppStyle>
    );
  }
}

export default App;
