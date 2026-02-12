function createCityCardMarkup(pictures, list) {
  const markup = pictures
    .map(({ id, name, main: { temp } }) => {
      return `<li id="${id}" class="gallery__item">
                  ${name} <span>${temp}</span><a href="../../parcials/city-info.html"></a>
                  <button class="item-btn">X</button>
      </li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}
export default createCityCardMarkup;
