import createPopularCityCardMarkup from './render/render-popular-cities.js';
import searchCityWeather from './services/weather-api.js';
const popularCities = [
  'London',
  'Tokio',
  'Paris',
  'Berlin',
  'Kyiv',
  'Seoul',
  'Pekin',
  'Toronto',
];

async function showPopularCities(popularCitiesListEl) {
  try {
    for (let popularCity of popularCities) {
      const popularCityItem = await searchCityWeather(popularCity);

      popularCitiesListEl.insertAdjacentHTML(
        'beforeend',
        createPopularCityCardMarkup(popularCityItem)
      );
    }
  } catch (err) {
    console.log(err);
  }
}
export default showPopularCities;
