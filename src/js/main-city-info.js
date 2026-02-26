import {
  searchCityWeather,
  searchCityForecastWeather,
} from './services/weather-api.js';
const params = new URLSearchParams(window.location.search);
const cityId = params.get('name');
console.log(cityId);

searchCityWeather(cityId).then(data => {
  console.log(data);
});
searchCityForecastWeather(cityId).then(data => {
  console.log(data);
});
