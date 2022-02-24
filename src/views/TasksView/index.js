import React, {useState} from 'react';

import {Dimensions} from 'react-native';

import {useTasks} from '../../providers/TasksProvider';
import {CarouselItem} from '../../components/CarouselItem';

import Carousel from 'react-native-snap-carousel';

import {CarouselContainer} from './styles';
import {
  Background,
  SearchLocationButton,
  SearchLocationContainer,
  SearchLocationInput,
  SearchLocationButtonText,
} from './styles';

import {searchCityWeather} from '../../services/api';

export function TasksView() {
  const [searchText, setSearchText] = useState('');
  const {tasks, createTask} = useTasks();

  const searchWeather = () => {
    searchCityWeather(searchText).then(response => {
      console.log('x');
      let {data} = response;

      createTask(
        data.name,
        data.main.temp,
        data.weather[0].main,
        data.weather[0].description,
      );
    });
  };

  return (
    <Background>
      <SearchLocationContainer>
        <SearchLocationInput
          autoCapitalize="words"
          placeholderTextColor={'#000'}
          autoCompleteType="off"
          autoCorrect={false}
          numberOfLines={1}
          multiline
          placeholder="Procure uma cidade"
          onChangeText={text => {
            setSearchText(text);
          }}
          value={searchText}
        />
        <SearchLocationButton
          onPress={() => {
            searchWeather();
          }}>
          <SearchLocationButtonText>Buscar</SearchLocationButtonText>
        </SearchLocationButton>
      </SearchLocationContainer>

      <CarouselContainer>
        <Carousel
          data={tasks}
          enableSnap={false}
          layout={'default'}
          itemWidth={300}
          renderItem={info => (
            <CarouselItem key={`${info.item._id}`} cityWeather={info.item} />
          )}
          sliderWidth={Dimensions.get('screen').width}
        />
      </CarouselContainer>
    </Background>
  );
}
