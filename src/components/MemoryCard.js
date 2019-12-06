import React from 'react';

import { CardStyle } from './Styles';
export const MemoryCard = ({
  colorCard,
  onClick,
  returnedCard,
  winCards,
  index,
}) => {
  const returnCard = [...returnedCard, ...winCards].includes(index)
    ? colorCard
    : '#F08080';

  return (
    <CardStyle
      style={{
        backgroundColor: returnCard,
      }}
      onClick={onClick.bind(null, index)}
    ></CardStyle>
  );
};
