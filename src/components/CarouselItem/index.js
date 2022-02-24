import React, {useState} from 'react';
import {Text} from 'react-native-elements';
import {useTasks} from '../../providers/TasksProvider';
import {ActionSheet} from '../ActionSheet';

import {InfoContainer} from './styles';

import LottieView from 'lottie-react-native';

export function CarouselItem({cityWeather}) {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  console.log(cityWeather);
  const [data, setData] = useState();

  const {deleteTask} = useTasks();
  const actions = [
    {
      title: 'Delete',
      action: () => {
        deleteTask(data);
      },
    },
  ];

  return (
    <>
      <ActionSheet
        visible={actionSheetVisible}
        closeOverlay={() => {
          if (cityWeather?.status) {
            setActionSheetVisible(false);
          }
        }}
        actions={actions}
      />
      <InfoContainer
        onPress={() => {
          setData(cityWeather);
          console.log(data);
          setActionSheetVisible(true);
        }}>
        <LottieView
          autoPlay
          loop={true}
          speed={1.7}
          source={require('../../assets/animations/cow.json')}
          style={{width: 300, height: 140}}
        />
        <Text h4>{cityWeather.name}</Text>
        <Text h4>{~~cityWeather.temp}°</Text>
      </InfoContainer>
    </>
  );
}
