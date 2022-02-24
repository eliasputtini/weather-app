import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {Button} from 'react-native-elements';

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
  justify-content: space-evenly;
  align-items: center;
`;

export const LogoView = styled.View`
  width: 60%;
  align-items: flex-start;
`;

export const InputContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  height: 150px;
  width: 300px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  height: 150px;
`;
export const FormContainer = styled.View`
  display: flex;
  justify-content: space-between;
`;

export const StyledInput = styled.TextInput`
  background-color: #caf0f8;
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  border-bottom-width: 0;
  padding: 15px;
  color: black;
`;

export const Text = styled.Text`
  color: black;
  font-size: 25px;
`;

export const Title = styled.Text`
  color: #001219;
  font-size: 45px;
  font-family: 'RockSalt-Regular';
`;

export const StyledButton = styled(Button).attrs(props => ({
  buttonStyle: {
    width: '100%',
    borderRadius: 50,
    padding: 20,
    backgroundColor: '#0077B6',
  },
}))``;
