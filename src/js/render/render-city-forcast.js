import { getCurrentWeather } from '../actions.js';

function createForcastCityCardMarkup(weather, date, tempMin, tempMax) {
  const weatherIcon = weather[0].main;
  const weatherIconText = getCurrentWeather(weatherIcon);
  return `<li  class="city-forcast__item">
                      <h3  class="city-forcast__title">${date}</h3>
                      <div class="city-forcast__weather">
                          <span>${weatherIcon}</span>
                          <svg class="city-forcast__weather-svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${weatherIconText}"></use>
                          </svg>
                      </div>
                      <div class="city-forcast__temps">
                        <p class="city-forcast__temp">${Math.ceil(tempMax - 273.15)}°</p><span>/</span>
                        <p class="city-forcast__temp">${Math.ceil(tempMin - 273.15)}°</p>
                      </div>
                </li>`;
}
export default createForcastCityCardMarkup;
