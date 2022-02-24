import React from 'react';
import moment from 'moment';

import {Container, WeatherBlock, WeatherInfoText} from './styles';
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
    return moment(data.dt_txt).format('HH:mm');
  };

  return (
    <Container>
      <WeatherBlock>
        <WeatherInfoText>{~~data.main.temp}°</WeatherInfoText>
        <LottieView
          autoPlay
          loop={true}
          speed={1.7}
          source={images[data.main]}
          style={{width: 200, height: 200, marginBottom: 50}}
        />
        <WeatherInfoText>{formatDateWeatherReceived()}</WeatherInfoText>
      </WeatherBlock>
    </Container>
  );
}
