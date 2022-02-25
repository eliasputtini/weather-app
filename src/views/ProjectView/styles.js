import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {Button} from 'react-native-elements';

export const Background = styled(LinearGradient).attrs({
  colors: ['#0077B6', '#caf0f8'],
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

export const StyledButton = styled(Button).attrs(props => ({
  buttonStyle: {
    width: '100%',
    borderRadius: 50,
    padding: 20,
    backgroundColor: '#0077B6',
  },
}))``;
