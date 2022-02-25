import axios from 'axios';
import {baseURL, appid} from '../config';

export const api = axios.create({baseURL});

export const searchCityWeather = async city => {
  try {
    const response = await api.get('data/2.5/weather', {
      params: {
        appid,
        q: city,
        units: 'metric',
        lang: 'pt_br',
      },
    });

    return response;
  } catch (err) {
    console.error('error => ', err);
  }
};

export const searchCityWeatherWeek = async (lat, lon) => {
  try {
    const response = await api.get('data/2.5/onecall', {
      params: {
        appid,
        lat: lat,
        lon: lon,
        exclude: 'hourly,minutely,alerts,current',
        units: 'metric',
        lang: 'pt_br',
      },
    });

    return response;
  } catch (err) {
    console.error('error => ', err);
  }
};

export const searchCity = async city => {
  try {
    const response = await api.get('geo/1.0/direct', {
      params: {
        appid,
        q: city,
        limit: 1,
        units: 'metric',
        lang: 'pt_br',
      },
    });

    return response;
  } catch (err) {
    console.error('error => ', err);
  }
};
