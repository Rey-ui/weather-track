function getCurrentWeather(weather) {
  const weatherArr = {
    // Clear:,
    Clouds: '#icon-cloud',
    // 'Rain',
    // 'Drizzle',
    // 'Thunderstorm',
    // 'Snow',
    // 'Mist',
    // 'Smoke',
    // 'Haze',
    // 'Dust',
    // 'Fog',
    // 'Sand',
    // 'Ash',
    // 'Squall',
    // 'Tornado',
  };
  //   const choseWeather = weatherArr.find(el => el.key === weather);
  console.log(weatherArr[weather]);
}

// main	Что значит
// Clear	Ясно
// Clouds	Облачно
// Rain	Дождь
// Drizzle	Морось
// Thunderstorm	Гроза
// Snow	Снег
// Mist	Дымка
// Smoke	Дым
// Haze	Мгла
// Dust	Пыль
// Fog	Туман
// Sand	Песок
// Ash	Вулканический пепел
// Squall	Шквал
// Tornado	Торнадо
export default getCurrentWeather;
