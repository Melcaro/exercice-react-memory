import React from 'react';
import { MemoryCard } from './MemoryCard';

export const PlayGrid = ({ grid, onClick, returnedCard, winCards }) => {
  return (
    <div
      style={{
        flex: '1 1 auto',
        width: '95vw',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        border: '1px solid black',
      }}
    >
      {grid.map((card, i) => (
        <MemoryCard
          colorCard={card}
          onClick={onClick}
          index={i}
          returnedCard={returnedCard}
          winCards={winCards}
        />
      ))}
    </div>
  );
};
