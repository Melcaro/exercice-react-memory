import styled from 'styled-components';

// APP.JS STYLES

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const RestartButton = styled.button`
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 5px;
`;

// PLAYGRID.JS STYLES

export const PlayGridStyle = styled.div`
  flex: 1 1 auto;
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: #f08080 solid 1px;
  border-radius: 5px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

// MEMORYCARD.JS STYLES

export const CardStyle = styled.div`
  flex: 0 1 20%;
  height: 20vh;
  margin: 1%;
  border-radius: 5%;
`;
