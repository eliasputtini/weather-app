import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {Background, WeatherFlatList} from './styles';
import LottieView from 'lottie-react-native';
import {searchCityWeatherWeek} from '../../services/api';

import {WheaterInfo} from './components/WheaterInfo';

export function Details({route}) {
  const [weatherData, setWeatherData] = useState('');

  const searchWeatherWeek = () => {
    searchCityWeatherWeek(route.params.city).then(response => {
      console.log('x');
      const {data} = response;
      let weatherResponse = {};

      weatherResponse['latestWeather'] = data.list[0];
      weatherResponse['dayWeather'] = data.list.splice(1, 5);
      weatherResponse['cityName'] = data.city.name;
      setWeatherData(weatherResponse);
    });
  };
  useEffect(() => {
    searchWeatherWeek();
  }, []);

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
      </View>
      <WeatherFlatList
        data={weatherData}
        keyExtractor={item => item.dt.toString()}
        horizontal={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <WheaterInfo data={item} />}
      />
    </Background>
  );
}
