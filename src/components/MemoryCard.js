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
        flex: '0 1 20%',
        height: '20vh',
        margin: '1%',
        borderRadius: '5%',
        backgroundColor: returnCard,
      }}
      onClick={onClick.bind(null, index)}
    ></CardStyle>
  );
};
