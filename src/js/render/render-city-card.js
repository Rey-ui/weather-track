import { getCurrentWeather } from '../actions.js';
//const alternativeEl = '<p class="alternative">There are no cities yet</p>';
function createCityCardMarkup(cities, list) {
  if (cities.length > 0) {
    const markup = cities
      .map(
        ({ id, name, main: { humidity, temp }, weather, wind: { speed } }) => {
          const weatherIcon = weather[0].main;
          const weatherIconText = getCurrentWeather(weatherIcon);
          return `<li id="${id}" class="our-cities__item">
                  <a class="our-cities__item-link" href="./city-details.html?name=${name}">
                    <div class="our-cities__item-up">
                      <img
                        src="./img/city-card-img.jpg"
                        alt="city-card-img"
                        width="200"
                        height="200"
                      />
                      <p class="our-cities__item-name">${name}</p>
                    </div>
                    <div class="our-cities__item-content">
                      <div class="our-cities__item-weather">
                        <svg width="35" height="30">
                            <use href="./svg/symbol-defs.svg#${weatherIconText}"></use>
                        </svg>
                        <span>${weatherIcon}</span>
                      </div>
                      <h3 class="our-cities__item-temp">${Math.ceil(temp - 273.15)}°</h3>
                    </div>
                      <div class="our-cities__item-down">
                          <div class="our-cities__item-down-info">
                            <svg class="our-cities__item-down-humid"  width="16" height="16">
                                <use href="./svg/symbol-defs.svg#icon-droplet"></use>
                            </svg>
                            <span class="our-cities__item-down-text">${humidity}%</span>
                          </div>
                          <div class="our-cities__item-down-info">
                            <svg  width="16" height="16">
                                <use href="./svg/symbol-defs.svg#icon-wind"></use>
                            </svg>
                            <span class="our-cities__item-down-text">${speed}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="our-cities__item-btn">
                    <svg  width="22" height="22">
                      <use href="./svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`;
        }
      )
      .join('');
    list.insertAdjacentHTML('beforeend', markup);
  } else {
    list.innerHTML = '<p class="alternative">There are no cities yet</p>';
  }
}

export default createCityCardMarkup;
