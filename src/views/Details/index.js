import React, {useEffect, useState} from 'react';
import {Background} from './styles';
import {searchCityWeatherWeek, searchCity} from '../../services/api';

import WeatherList from './components/WeatherList';

export function Details({route}) {
  const [weatherData, setWeatherData] = useState('');

  const searchWeatherWeek = () => {
    searchCity(route.params.city).then(response => {
      searchCityWeatherWeek(response.data[0].lat, response.data[0].lon).then(
        response2 => {
          const {data} = response2;
          let weatherResponse = {};
          console.log(data);

          weatherResponse['dayWeather'] = data.daily;
          weatherResponse['cityName'] = response.data[0].name;
          setWeatherData(weatherResponse);
          console.log(weatherResponse);
        },
      );
    });
  };
  useEffect(() => {
    searchWeatherWeek();
  }, []);

  return (
    <Background>
      <WeatherList dayWeather={weatherData?.dayWeather} />
    </Background>
  );
}
