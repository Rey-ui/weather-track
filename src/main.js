import showPopularCities from './js/popularCities.js';
import handleFilterWeather from './js/filters.js';
import createCityCardMarkup from './js/render/render-city-card.js';
import {
  handleSearchCity,
  handleDeleteCity,
  handleClearCitiesList,
  handleRefreshBtnCities,
} from './js/actions.js';
import {
  formEl,
  citiesListEl,
  popularCitiesListEl,
  btnClear,
  refreshBtn,
  sortContainer,
  CitiesDatabase,
  LOCAL_KEY,
  db,
} from './js/services/refs.js';
import { searchCityWeather } from './js/services/weather-api.js';

formEl.addEventListener('submit', handleSearchCity);
citiesListEl.addEventListener('click', handleDeleteCity);
btnClear.addEventListener('click', handleClearCitiesList);
refreshBtn.addEventListener('click', handleRefreshBtnCities);
sortContainer.addEventListener('click', handleFilterWeather);
showPopularCities(popularCitiesListEl);
createCityCardMarkup(db.getAll(), citiesListEl);
// const testCities = [
//   'Kyiv',
//   'London',
//   'Paris',
//   'Berlin',
//   'Rome',
//   'Madrid',
//   'Warsaw',
//   'Prague',
//   'Vienna',
//   'Oslo',
//   'Stockholm',
//   'Helsinki',
//   'Tallinn',
//   'Riga',
//   'Vilnius',
//   'Athens',
//   'Lisbon',
//   'Dublin',
//   'Brussels',
//   'Amsterdam',
//   'Tokyo',
//   'Seoul',
//   'Beijing',
//   'Bangkok',
//   'Singapore',
//   'Sydney',
//   'Cairo',
//   'Nairobi',
//   'Dubai',
//   'Istanbul',
//   'New York',
//   'Chicago',
//   'Miami',
//   'Toronto',
//   'Mexico City',
//   'Lima',
//   'Bogota',
//   'Santiago',
//   'Lviv',
//   'Odesa',
//   'Kharkiv',
//   'Dnipro',
//   'Munich',
//   'Milan',
//   'Barcelona',
//   'Lyon',
//   'Geneva',
//   'Zurich',
//   'Budapest',
//   'Sofia',
// ];
// async function fillDatabase() {
//   console.log(' Починаю заповнення бази 50 містами...');
//   for (const city of testCities) {
//     try {
//       const data = await searchCityWeather(city);
//       db.add(data);
//     } catch (e) {
//       console.error(`Помилка для міста ${city}`);
//     }
//   }
//   console.log('База заповнена. Можна переходити до тесту.');
// }
// fillDatabase();
// async function runStabilityTest() {
//   const iterations = 5;
//   const stats = [];

//   for (let i = 1; i <= iterations; i++) {
//     console.log(` Початок ітерації №${i}...`);

//     const start = performance.now(); // Точний замір часу

//     // Викликаємо твою існуючу функцію рефрешуІ
//     await handleRefreshBtnCities();

//     const end = performance.now();
//     const duration = ((end - start) / 1000).toFixed(2); // Час у секундах

//     stats.push(Number(duration));
//     console.log(` Ітерація №${i} завершена за ${duration} сек.`);

//     if (i < iterations) {
//       console.log('Очікування 60 сек для скидання лімітів API...');
//       await new Promise(resolve => setTimeout(resolve, 60000));
//     }
//   }

//   console.log('ФІНАЛЬНІ ДАНІ ДЛЯ ГРАФІКА:', stats);
// }
// runStabilityTest();
