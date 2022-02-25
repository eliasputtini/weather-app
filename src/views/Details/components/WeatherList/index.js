import React from 'react';

import WeatherInfo from '../WeatherInfo';

import {WeatherFlatList} from './styles';
import LottieView from 'lottie-react-native';

export default function WeatherList({dayWeather}) {
  console.log(dayWeather);
  return (
    <>
      {dayWeather ? (
        <WeatherFlatList
          data={dayWeather}
          keyExtractor={item => item.dt.toString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <WeatherInfo data={item} />}
        />
      ) : (
        <LottieView
          autoPlay
          loop={true}
          speed={1.7}
          source={require('../../../../assets/animations/load.json')}
          style={{width: 200, height: 300, bottom: 40}}
        />
      )}
    </>
  );
}
