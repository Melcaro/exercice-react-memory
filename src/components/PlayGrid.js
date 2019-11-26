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
        border: '#F08080 solid 1px',
        borderRadius: '5px',
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
