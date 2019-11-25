import React from 'react';

export const MemoryCard = ({ colorCard, onClick, returnedCard, index }) => {
  console.log(colorCard);
  console.log(returnedCard);
  console.log(index);

  const returnCard = returnedCard.includes(index) ? colorCard : 'white';

  return (
    <div
      style={{
        flex: '0 1 20%',
        height: '20vh',
        border: '1px solid blue',
        margin: '1%',
        borderRadius: '5%',
        backgroundColor: returnCard,
      }}
      onClick={onClick.bind(null, index)}
    >
      Card
    </div>
  );
};
