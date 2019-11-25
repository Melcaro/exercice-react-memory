export const nbCards = 8;

export const generateColors = () => {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
};

export const colors = Array(nbCards / 2)
  .fill(0)
  .map(generateColors);

// if(nbCards<colors.length){

// }

//     const frontColorCard =

// }
//export const whenACardIsClicked = e => {};
