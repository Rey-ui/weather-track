import { getCurrentWeather } from '../actions.js';

function createCityCardMarkup(cities, list) {
  const markup = cities
    .map(({ id, name, main: { humidity, temp }, weather, wind: { speed } }) => {
      const weatherIcon = weather[0].main;
      const weatherIconText = getCurrentWeather(weatherIcon);
      return `<li id="${id}" class="our-cities__item">
                  <a href="../../parcials/city-info.html?name=${name}">
                    <h3>${name}</h3>
                    <div>
                      <div>
                        <div>
                          <svg class="header__svg" width="35" height="30">
                              <use href="./img/svg/symbol-defs.svg#${weatherIconText}"></use>
                          </svg>
                          <span>${weatherIcon}</span>
                        </div>
                        <p>${Math.ceil(temp - 273.15)}°</p>
                      </div>
                      <div>
                          <div>
                            <svg class="header__svg" width="15" height="15">
                                <use href="./img/svg/symbol-defs.svg#icon-droplet"></use>
                            </svg>
                            <span>${humidity}%</span>
                          </div>
                          <div>
                            <svg class="header__svg" width="35" height="30">
                                <use href="./img/svg/symbol-defs.svg#icon-wind"></use>
                            </svg>
                            <span>${speed}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="item-btn">
                    <svg class="header__svg" width="35" height="30">
                      <use href="../../img/svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

export default createCityCardMarkup;
