import styled from 'styled-components';

export const Container = styled.View`
  align-items: center;
  justify-content: space-around;
`;

export const WeatherBlock = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const WeatherInfoText = styled.Text`
  margin-bottom: 5px;
  color: black;
`;

export const WeatherInfoTemp = styled.Text`
  font-size: 40px;
  color: black;
`;
