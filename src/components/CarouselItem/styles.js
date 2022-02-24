import styled from 'styled-components/native';

export const InfoContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: floralwhite;
  border-radius: 5px;
  height: 300px;
  padding: 50px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const CityName = styled.Text`
  font-size: 25px;
  font-weight: 800;
  color: ${props => (props.color ? props.color : '#000')};
  text-transform: uppercase;
`;

export const WeatherContainer = styled.View`
  flex-direction: row;
  margin-top: 7%;
`;

export const ContainerFlex = styled.View`
  flex: 1;
  background-color: #fff;
  width: 100%;
`;
