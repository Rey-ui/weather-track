import axios from 'axios';
const API_KEY = '169e2d2ec6f9ef07a3c4e60acede402f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export async function searchCityWeather(query) {
  const responce = await axios.get(`${BASE_URL}/weather`, {
    params: {
      appid: API_KEY,
      q: query,
    },
  });
  console.log(responce.data);
  return responce.data;
}
export async function searchCityForecastWeather(query) {
  const responce = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      appid: API_KEY,
      q: query,
    },
  });
  console.log(responce.data);
  return responce.data.list;
}
