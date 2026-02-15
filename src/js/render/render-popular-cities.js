import { getCurrentWeather } from '../actions.js';

function createPopularCityCardMarkup({ id, name, main: { temp }, weather }) {
  const weatherIcon = weather[0].main;
  const weatherIconText = getCurrentWeather(weatherIcon);
  return `<li id="${id}" class="our-cities__item">
                    <a href="../../parcials/city-info.html?name=${name}">
                      <h3>${name}</h3>
                      <div>
                        <div>
                          <svg class="header__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${weatherIconText}"></use>
                          </svg>
                          <span>${weatherIcon}</span>
                        </div>
                        <p>${Math.ceil(temp - 273.15)}°</p>
                      </div>
                    </a>
                </li>`;
}
export default createPopularCityCardMarkup;
