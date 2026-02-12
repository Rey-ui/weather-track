import axios from 'axios';
const API_KEY = '169e2d2ec6f9ef07a3c4e60acede402f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
async function searchCityWeather(query) {
  const responce = await axios.get(
    `${BASE_URL}/weather?q=${query}&appid=${API_KEY}`
  );
  return responce.data;
}
export default searchCityWeather;
