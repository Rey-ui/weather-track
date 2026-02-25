import { citiesListEl, citiesArr } from './services/refs.js';
import createCityCardMarkup from './render/render-city-card.js';
function getSortValue(city, option) {
  switch (option) {
    case 'temperature':
      return city.main.temp;
    case 'humidity':
      return city.main.humidity;
    case 'windSpeed':
      return city.wind.speed;
    case 'name':
    default:
      return city.name;
  }
}
let switchIndicator = true;
let currentSortOption = null;

function handleFilterWeather(e) {
  const btn = e.target.closest('.our-cities__bar-sorts-btn');
  if (!btn) return;
  const svgEl = btn.querySelector('.our-cities__bar-sorts-svg');
  console.log(btn);
  console.log(svgEl);
  document.querySelectorAll('.our-cities__bar-sorts-btn').forEach(b => {
    b.classList.remove('active');
    const svg = b.querySelector('.our-cities__bar-sorts-svg');
    if (svg) {
      svg.innerHTML = '<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>';
    }
  });
  const option = btn.name;

  btn.classList.add('active');
  if (currentSortOption === option) {
    switchIndicator = !switchIndicator;
  } else {
    currentSortOption = option;
    switchIndicator = true;
  }
  svgEl.innerHTML = switchIndicator
    ? '<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>'
    : '<use href="./svg/symbol-defs.svg#icon-arrow-down"></use>';
  const sortedCities = [...citiesArr].sort((a, b) => {
    const valueA = getSortValue(a, option);
    const valueB = getSortValue(b, option);

    if (typeof valueA === 'string') {
      return switchIndicator
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return switchIndicator ? valueB - valueA : valueA - valueB;
  });

  citiesListEl.innerHTML = '';
  createCityCardMarkup(sortedCities, citiesListEl);
}
export default handleFilterWeather;
