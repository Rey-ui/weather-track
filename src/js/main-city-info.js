// import createCityInfoMurkap from '../js/render/render-city-details.js';
import searchCityWeather from '../js/services/weather-api.js';
// // const params = new URLSearchParams(window.location.search);
// const cityListEl = document.querySelector('.city-details__list');
// // const cityId = params.get('id');
// const cityId = localStorage.getItem('selectedCityId');

// searchCityWeather(cityId).then(data => {
//   createCityInfoMurkap(data, cityListEl);
// });
const params = new URLSearchParams(window.location.search);
const cityId = params.get('name');
console.log(cityId);

searchCityWeather(cityId).then(data => {
  console.log(data);
});
