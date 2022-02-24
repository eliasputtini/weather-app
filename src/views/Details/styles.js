import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const WeatherFlatList = styled.FlatList`
  height: 100px;
  width: 100px;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#48CAE4', '#caf0f8'],
  start: {x: 1, y: 0},
  end: {x: 0, y: 1},
  useAngle: true,
  angle: 45,
  angleCenter: {x: 0.5, y: 0.5},
})`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
