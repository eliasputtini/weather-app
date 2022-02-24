import React from 'react';
import {useAuth} from '../../providers/AuthProvider';
import {View} from 'react-native';
import {Background, StyledButton} from './styles';
import LottieView from 'lottie-react-native';

export function ProjectsView({navigation}) {
  const {projectData} = useAuth();

  const onClickProject = async project => {
    navigation.navigate('Task List', {
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
          source={require('../../assets/animations/cow.json')}
          style={{width: 300, height: 140, left: 30, bottom: 30}}
        />
        <StyledButton
          onPress={() => onClickProject(projectData)}
          title="Administrar dados da fazenda"
        />
      </View>
    </Background>
  );
}
