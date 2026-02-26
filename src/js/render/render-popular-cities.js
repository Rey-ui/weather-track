import { getCurrentWeather } from '../actions.js';

function createPopularCityCardMarkup({ id, name, main: { temp }, weather }) {
  const weatherIcon = weather[0].main;
  const weatherIconText = getCurrentWeather(weatherIcon);
  return `<li id="${id}" class="popular-cities__item">
                    <a class="popular-cities__item-link" href="./city-info.html?name=${name}">
                      <div class="popular-cities__item-content">
                        <h3  class="popular-cities__item-title">${name}</h3>
                        <p class="popular-cities__item-text">${Math.ceil(temp - 273.15)}°</p>
                      </div>
                      <div class="popular-cities__item-icon">
                          <svg class="popular-cities__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${weatherIconText}"></use>
                          </svg>
                          <span>${weatherIcon}</span>
                        </div>
                    </a>
                </li>`;
}
export default createPopularCityCardMarkup;
