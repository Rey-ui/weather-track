export function getSavedCities(LOCAL_KEY) {
  return JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
}
export function saveCities(cities, LOCAL_KEY) {
  return localStorage.setItem(LOCAL_KEY, JSON.stringify(cities));
}
