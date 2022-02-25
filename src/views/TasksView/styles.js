import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const CarouselContainer = styled.View`
  margin-top: 50px;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#0077B6', '#caf0f8'],
  start: {x: 1, y: 0},
  end: {x: 0, y: 1},
  useAngle: true,
  angle: 45,
  angleCenter: {x: 0.5, y: 0.5},
})`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-vertical: 30px;
`;

export const SearchLocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
`;

export const SearchLocationInput = styled.TextInput`
  flex: 3;
  background-color: #caf0f8;
  border-radius: 10px;
  color: #000;
  padding: 10px;
`;

export const SearchLocationButton = styled.TouchableOpacity`
  flex: 1;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  border: 1px #0077b6;
  height: 40px;
  border-radius: 10px;
`;

export const SearchLocationButtonText = styled.Text`
  color: blue;
`;
