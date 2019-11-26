import React from 'react';
import { MemoryCard } from './MemoryCard';

import { PlayGridStyle } from './Styles';

export const PlayGrid = ({ grid, onClick, returnedCard, winCards }) => {
  return (
    <PlayGridStyle>
      {grid.map((card, i) => (
        <MemoryCard
          colorCard={card}
          onClick={onClick}
          index={i}
          returnedCard={returnedCard}
          winCards={winCards}
        />
      ))}
    </PlayGridStyle>
  );
};
