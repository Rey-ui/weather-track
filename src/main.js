import showPopularCities from './js/popularCities.js';
import handleFilterWeather from './js/filters.js';
import createCityCardMarkup from './js/render/render-city-card.js';
import {
  handleSearchCity,
  handleDeleteTask,
  handleClearCitiesList,
  handleRefreshBtnCities,
} from './js/actions.js';
import {
  formEl,
  citiesListEl,
  popularCitiesListEl,
  btnClear,
  refreshBtn,
  sortContainer,
  citiesArr,
} from './js/services/refs.js';

formEl.addEventListener('submit', handleSearchCity);
citiesListEl.addEventListener('click', handleDeleteTask);
btnClear.addEventListener('click', handleClearCitiesList);
refreshBtn.addEventListener('click', handleRefreshBtnCities);
sortContainer.addEventListener('click', handleFilterWeather);
showPopularCities(popularCitiesListEl);
createCityCardMarkup(citiesArr, citiesListEl);
