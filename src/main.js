import showPopularCities from './js/popularCities.js';
import {
  handleSearchCity,
  handleDeleteTask,
  handleClearCitiesList,
  handleRefreshBtnCities,
  // handleFilterWeather,
} from './js/actions.js';
import {
  formEl,
  citiesListEl,
  popularCitiesListEl,
  btnClear,
  refreshBtn,
} from './js/services/refs.js';

formEl.addEventListener('submit', handleSearchCity);
citiesListEl.addEventListener('click', handleDeleteTask);
btnClear.addEventListener('click', handleClearCitiesList);
refreshBtn.addEventListener('click', handleRefreshBtnCities);

showPopularCities(popularCitiesListEl);

// export const sortContainer = document.querySelector(
//   '.our-cities__bar-sorts-btns'
// );
// sortContainer.addEventListener('click', handleFilterWeather);
