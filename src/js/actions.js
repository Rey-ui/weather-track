import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchCityWeather } from './services/weather-api.js';
import createCityCardMarkup from './render/render-city-card.js';
import { saveCities } from './storage.js';

import {
  citiesListEl,
  refreshBtn,
  ourCitiesLoader,
  db,
} from './services/refs.js';

export function getCurrentWeather(weather) {
  const weatherArr = {
    Clear: 'icon-sun',
    Clouds: 'icon-cloud',
    Rain: 'icon-cloud-rain',
    Drizzle: 'icon-cloud-drizzle',
    Thunderstorm: 'icon-cloud-lightning',
    Snow: 'icon-cloud-snow',
    Mist: 'icon-weather-windy',
    Smoke: 'icon-weather-windy',
    Haze: 'icon-weather-windy-cloudy',
    Dust: 'icon-triangle',
    Fog: 'icon-eye-off',
    Sand: 'icon-chart-area',
    Ash: 'icon-chart-area',
    Squall: 'icon-warning',
    Tornado: 'icon-warning',
  };
  return weatherArr[weather] || 'icon-cloud';
}

export async function handleSearchCity(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const cityValue = form.elements.city.value.trim();

  if (!cityValue) {
    iziToast.error({
      title: 'Error',
      message: `❌Please enter the correct city name!`,
    });
    return;
  }

  try {
    showLoader();
    const city = await searchCityWeather(cityValue);
    console.log(city.weather[0].main);
    if (!city || city.length === 0) {
      return;
    } else {
      citiesListEl.innerHTML = '';
      const cities = addCity(city);
      createCityCardMarkup(cities, citiesListEl);
      refreshBtn.classList.add('active-btn');
    }
  } catch (err) {
    console.log(err);
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, nothing was found for your request!`,
    });
    return;
  } finally {
    hideLoader();
    form.reset();
  }
}

function renderCities(citiesArr, list) {
  list.innerHTML = '';
  createCityCardMarkup(citiesArr, list);
  if (db.getAll().length) {
    refreshBtn.classList.add('active-btn');
  }
}

export function handleDeleteCity(e) {
  const btn = e.target.closest('.our-cities__item-btn');
  if (!btn) return;
  const li = btn.closest('li');
  const cityId = Number(li.id);
  db.remove(cityId);
  if (db.getAll().length) {
    refreshBtn.classList.add('active-btn');
  } else {
    refreshBtn.classList.remove('active-btn');
  }
  renderCities(db.getAll(), citiesListEl);
}

export function handleClearCitiesList() {
  citiesListEl.innerHTML = '<p class="alternative">There are no cities yet</p>';
  db.clear();
  refreshBtn.classList.remove('active-btn');
}
function addCity(city) {
  const isAdded = db.add(city);

  if (!isAdded) {
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, already exists!`,
    });
  }

  return db.getAll();
}
export async function handleRefreshBtnCities() {
  const citiesNames = db.getAll().map(({ name }) => name);
  db.clear();
  showLoader();
  try {
    for (let cityName of citiesNames) {
      const CityItem = await searchCityWeather(cityName);
      citiesListEl.innerHTML = '';
      const newCity = addCity(CityItem);
      createCityCardMarkup(newCity, citiesListEl);
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
}

function hideLoader() {
  ourCitiesLoader.classList.add('hidden');
}
function showLoader() {
  ourCitiesLoader.classList.remove('hidden');
}
function visibleRefreshBtn() {
  if (!refreshBtn) return;
  if (db.getAll().length) {
    refreshBtn.classList.add('active-btn');
  } else {
    refreshBtn.classList.remove('active-btn');
  }
}
visibleRefreshBtn();
