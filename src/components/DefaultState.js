import { colors } from './../utils/Constantes';
import shuffle from 'lodash.shuffle';

export const DefaultState = {
  grid: shuffle([...colors, ...colors]),
  counterOfTries: 0,
  score: '',
  returnedCard: [],
  winCards: [],
};
