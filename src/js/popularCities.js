import createPopularCityCardMarkup from './render/render-popular-cities.js';
import searchCityWeather from './services/weather-api.js';
import { loader } from './services/refs.js';
const popularCities = [
  'London',
  'Tokio',
  'Paris',
  'Berlin',
  'Kyiv',
  'Seoul',
  'Toronto',
];

function hideLoader() {
  loader.classList.add('hidden');
}
function showLoader() {
  loader.classList.remove('hidden');
}
async function showPopularCities(popularCitiesListEl) {
  showLoader();
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
  } finally {
    hideLoader();
  }
}
export default showPopularCities;
