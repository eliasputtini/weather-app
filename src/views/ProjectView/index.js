import React from 'react';
import {useAuth} from '../../providers/AuthProvider';
import {View} from 'react-native';
import {Background, StyledButton} from './styles';
import LottieView from 'lottie-react-native';

export function ProjectsView({navigation}) {
  const {projectData} = useAuth();

  const onClickProject = async project => {
    navigation.navigate('Climas', {
      name: project.name,
      projectPartition: project.partition,
    });
  };

  return (
    <Background>
      <View>
        <LottieView
          autoPlay
          loop={true}
          speed={1.7}
          source={require('../../assets/animations/load.json')}
          style={{width: 200, height: 300, bottom: 40}}
        />
        <StyledButton
          onPress={() => onClickProject(projectData)}
          title="Bem-vindo"
        />
      </View>
    </Background>
  );
}
