import React from 'react';
import { MemoryCard } from './MemoryCard';

export const PlayGrid = ({ onClick, colors, returnedCard }) => {
  const colorsCopy = colors.slice(0);
  const colorsCards = colors.concat(colorsCopy);

  console.log(colorsCards);

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
      {colorsCards.map((card, i) => (
        <MemoryCard
          colorCard={card}
          onClick={onClick}
          index={i}
          returnedCard={returnedCard}
        />
      ))}
    </div>
  );
};
