import React, {useState} from 'react';
import {Text} from 'react-native-elements';
import {useTasks} from '../../providers/TasksProvider';
import {ActionSheet} from '../ActionSheet';
import {useNavigation} from '@react-navigation/native';

import {InfoContainer} from './styles';

import LottieView from 'lottie-react-native';

export function CarouselItem({cityWeather}) {
  const navigation = useNavigation();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [data, setData] = useState();

  const {deleteTask} = useTasks();
  const actions = [
    {
      title: 'Deletar',
      action: () => {
        deleteTask(data);
      },
    },
    {
      title: 'Detalhes',
      action: () => {
        navigation.navigate('Details', {
          city: cityWeather.name,
        });
      },
    },
  ];

  const images = {
    Clear: require('../../assets/animations/clima/clear.json'),
    Clouds: require('../../assets/animations/clima/cloud.json'),
    Thunderstorm: require('../../assets/animations/clima/thunderstorm.json'),
    Rain: require('../../assets/animations/clima/rain.json'),
    Snow: require('../../assets/animations/clima/snow.json'),
  };

  return (
    <>
      <ActionSheet
        visible={actionSheetVisible}
        closeOverlay={() => {
          setActionSheetVisible(false);
        }}
        actions={actions}
      />
      <InfoContainer
        onPress={() => {
          setData(cityWeather);
          setActionSheetVisible(true);
        }}>
        <LottieView
          autoPlay
          loop={true}
          speed={1.7}
          source={images[cityWeather.main]}
          style={{width: 200, height: 200, marginBottom: 50}}
        />
        <Text h3>
          {cityWeather.name} {~~cityWeather.temp}°
        </Text>
        <Text h4>{cityWeather.description}</Text>
      </InfoContainer>
    </>
  );
}
