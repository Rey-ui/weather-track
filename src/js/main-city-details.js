import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  searchCityWeather,
  searchCityForecastWeather,
} from './services/weather-api.js';
import { cityDetailsEl } from './services/refs.js';
import createCityDetailsMarkup from './render/render-city-details.js';
const params = new URLSearchParams(window.location.search);
const cityName = params.get('name');

// const forcastList = document.querySelector('.city-forcast__list');
async function showCityDetails() {
  // showLoader();

  try {
    const cityInfo = await searchCityWeather(cityName);
    console.log(cityInfo);
    if (!cityInfo || cityInfo.length === 0) {
      return;
    } else {
      //createCityCardMarkup(cityInfo, cityDetailsEl);
      cityDetailsEl.innerHTML = createCityDetailsMarkup(cityInfo);
    }
  } catch (err) {
    console.log(err);
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, nothing was found for your request!`,
    });
  } finally {
    //hideLoader();
  }
}
showCityDetails();
// searchCityWeather(cityName).then(data => {
//   console.log(data);
// });

// searchCityForecastWeather(cityName).then(data => {
//   const grouped = {};

//   data.forEach(item => {
//     const date = item.dt_txt.split(' ')[0];

//     if (!grouped[date]) {
//       grouped[date] = [];
//     }

//     grouped[date].push(item);
//   });

//   Object.entries(grouped)
//     .slice(0, 5)
//     .forEach(([date, items]) => {
//       const temps = items.map(i => i.main.temp);

//       const tempMin = Math.min(...temps);
//       const tempMax = Math.max(...temps);

//       const midday = items.find(i => i.dt_txt.includes('12:00:00')) || items[0];

//       const weather = midday.weather;

//       forcastList.insertAdjacentHTML(
//         'beforeend',
//         createForcastCityCardMarkup(weather, date, tempMin, tempMax)
//       );
//     });
// });
// import { getCurrentWeather } from './actions.js';

// function createForcastCityCardMarkup(weather, date, tempMin, tempMax) {
//   const weatherIcon = weather[0].main;
//   const weatherIconText = getCurrentWeather(weatherIcon);
//   return `<li  class="">
//                       <div class="">
//                         <h3  class="">${date}</h3>
//                         <p class="">${Math.ceil(tempMax - 273.15)}°</p>
//                         <p class="">${Math.ceil(tempMin - 273.15)}°</p>
//                       </div>
//                       <div class="">
//                           <svg class="" width="35" height="30">
//                               <use href="./svg/symbol-defs.svg#${weatherIconText}"></use>
//                           </svg>
//                           <span>${weatherIcon}</span>
//                         </div>
//                 </li>`;
// }
