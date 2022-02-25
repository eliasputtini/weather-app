import React from 'react';
import moment from 'moment';

import {
  Container,
  WeatherBlock,
  WeatherInfoText,
  WeatherInfoTemp,
} from './styles';
import LottieView from 'lottie-react-native';

const images = {
  Clear: require('../../../../assets/animations/clima/clear.json'),
  Clouds: require('../../../../assets/animations/clima/cloud.json'),
  Thunderstorm: require('../../../../assets/animations/clima/thunderstorm.json'),
  Rain: require('../../../../assets/animations/clima/rain.json'),
  Snow: require('../../../../assets/animations/clima/snow.json'),
};

export default function WeatherInfo({data}) {
  const formatDateWeatherReceived = () => {
    return moment.unix(data.dt).format('DD/MM/YYYY, HH:mm');
  };
  console.log(data);

  return (
    <Container>
      <WeatherBlock>
        <LottieView
          autoPlay
          loop={true}
          speed={1.7}
          source={images[data.weather[0].main]}
          style={{width: 200, height: 200}}
        />
        <Container>
          <WeatherInfoTemp>{~~data.temp.day}°</WeatherInfoTemp>
          <WeatherInfoText>{formatDateWeatherReceived()}</WeatherInfoText>
        </Container>
      </WeatherBlock>
    </Container>
  );
}
