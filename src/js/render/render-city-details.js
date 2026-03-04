import { getCurrentWeather } from '../actions.js';
function formatCityTime(unixTime, timezoneOffset) {
  const date = new Date((unixTime + timezoneOffset) * 1000);

  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}
function createCityDetailsMarkup({
  name,
  coord: { lon, lat },
  main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
  timezone,
  sys: { sunrise, sunset },
  weather,
  wind: { speed },
}) {
  const weatherIcon = weather[0].main;
  const weatherDescription = weather[0].description;
  const weatherIconText = getCurrentWeather(weatherIcon);
  return `
            <div class="city-details__hero">
              <div class="city-details__hero-info">
                <div class="city-details__hero-up">
                  <h2 class="city-details__hero-name">${name}</h2>
                  <h1 class="city-details__hero-temp">
                    ${Math.ceil(temp - 273.15)}°
                  </h1>
                </div>
                <h3 class="city-details__hero-text">${weatherDescription}</h3>
              </div>
              <div class="city-details__weather">
                <span>${weatherIcon}</span>
                <svg width="35" height="30">
                  <use href="./svg/symbol-defs.svg#${weatherIconText}"></use>
                </svg>
              </div>
              <div  class="city-details__coords"><span>${lon.toFixed(1)}</span><span>${lat.toFixed(1)}</span></div>
            </div>
            <ul class="city-details__list">
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="our-cities__item-down-humid" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-droplet"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Humidity</span>
                  <h3 class="city-details__item-text">${humidity}%</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-wind-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-wind"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Wind Speed</span>
                  <h3 class="city-details__item-text">${speed}mph</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-temp-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-thermometer"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Feels Like</span>
                  <h3 class="city-details__item-text">${Math.ceil(feels_like - 273.15)}°</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-pressure-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-pressure"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Pressure</span>
                  <h3 class="city-details__item-text">${pressure}hPa</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-temp-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-thermometer"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Temp-max</span>
                  <h3 class="city-details__item-text">${Math.ceil(temp_max - 273.15)}°</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-temp-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-thermometer"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Temp-min</span>
                  <h3 class="city-details__item-text">${Math.ceil(temp_min - 273.15)}°</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-sun-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-sunrise"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Sunrise</span>
                  <h3 class="city-details__item-text">${formatCityTime(sunrise, timezone)}</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-sun-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-sunset"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Sunset</span>
                  <h3 class="city-details__item-text">${formatCityTime(sunset, timezone)}</h3>
                </div>
              </li>
            </ul>
    `;
}

export default createCityDetailsMarkup;
