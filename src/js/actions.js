import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import searchCityWeather from './services/weather-api.js';
import createCityCardMarkup from './render/render-city-card.js';
import { getSavedCities, saveCities } from './storage.js';

import { citiesListEl } from './services/refs.js';

const LOCAL_KEY = 'citiesList';
let citiesArr = getSavedCities(LOCAL_KEY) || [];
createCityCardMarkup(citiesArr, citiesListEl);

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
      message: `❌Sorry, already exist!`,
    });
    return;
  }
  try {
    const city = await searchCityWeather(cityValue);
    console.log(city.weather[0].main);
    if (!city || city.length === 0) {
      return;
    } else {
      citiesListEl.innerHTML = '';
      const cities = addCity(city);
      console.log(citiesArr);
      createCityCardMarkup(cities, citiesListEl);
    }
  } catch (err) {
    console.log(err);
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, there are no images matching your search query. Please, try again!`,
    });
  } finally {
    form.reset();
  }
}

function renderCities(citiesArr, list) {
  list.innerHTML = '';
  createCityCardMarkup(citiesArr, list);
}

export function handleDeleteTask(e) {
  const btn = e.target.closest('.item-btn');
  if (!btn) return;
  const li = btn.closest('li');
  const cityId = Number(li.id);
  citiesArr = citiesArr.filter(city => city.id !== cityId);
  saveCities(citiesArr, LOCAL_KEY);
  renderCities(citiesArr, citiesListEl);
}

export function handleClearCitiesList() {
  citiesListEl.innerHTML = '';
  citiesArr = [];
  localStorage.removeItem(LOCAL_KEY);
}
function addCity(city) {
  const isExist = citiesArr.some(item => item.id === city.id);
  if (isExist) {
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, already exist!`,
    });
    return citiesArr;
  }

  citiesArr = [...citiesArr, city];
  saveCities(citiesArr, LOCAL_KEY);
  return citiesArr;
}
