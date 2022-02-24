import React, {useEffect, useState} from 'react';
import {View, Alert} from 'react-native';
import {useAuth} from '../../providers/AuthProvider';
import LottieView from 'lottie-react-native';

import {
  Background,
  InputContainer,
  ButtonContainer,
  StyledInput,
  StyledButton,
  FormContainer,
  Text,
  Title,
  LogoView,
} from './styles';

export function Auth({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp, signIn} = useAuth();

  useEffect(() => {
    if (user != null) {
      navigation.navigate('Projects');
    }
  }, [user]);

  const onPressSignIn = async () => {
    console.log('Press sign in');
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  const onPressSignUp = async () => {
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
  };

  return (
    <Background>
      <LogoView>
        <Title>Weather</Title>
        <LottieView
          autoPlay
          loop={true}
          speed={1.7}
          source={require('../../assets/animations/cloud.json')}
          style={{
            width: 360,
            height: 200,
            left: 20,
            top: 10,
            position: 'absolute',
          }}
        />
      </LogoView>

      <FormContainer>
        <Text>Login ou Cadastro:</Text>
        <InputContainer>
          <StyledInput
            onChangeText={setEmail}
            value={email}
            placeholder="email"
            style={{}}
            placeholderTextColor={'#000'}
            autoCapitalize="none"
          />
          <StyledInput
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="password"
            placeholderTextColor={'#000'}
            secureTextEntry
          />
        </InputContainer>
        <ButtonContainer>
          <StyledButton onPress={onPressSignIn} title="Logar" />
          <StyledButton onPress={onPressSignUp} title="Cadastrar" />
        </ButtonContainer>
      </FormContainer>
    </Background>
  );
}
