function createPopularCityCardMarkup({ name, main: { temp } }) {
  return `<li name="${name}" class="gallery__item">${name} <span>${temp}</span><a href="../../parcials/city-info.html?name=${name}">hjhj</a></li>`;
}
export default createPopularCityCardMarkup;
