import showPopularCities from './js/popularCities.js';
import {
  handleSearchCity,
  handleDeleteTask,
  handleClearCitiesList,
} from './js/actions.js';
import {
  formEl,
  citiesListEl,
  popularCitiesListEl,
  btnClear,
} from './js/services/refs.js';

formEl.addEventListener('submit', handleSearchCity);
citiesListEl.addEventListener('click', handleDeleteTask);
btnClear.addEventListener('click', handleClearCitiesList);

showPopularCities(popularCitiesListEl);
