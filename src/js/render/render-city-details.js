// const loader = document.querySelector('.loader');
// export function hideLoader() {
//   loader.classList.add('hidden');
// }
// export function showLoader() {
//   loader.classList.remove('hidden');
// }
// export function clearGallery(listEl) {
//   listEl.innerHTML = '';
// }

// export function createMurkap(pictures, list) {
//   const markup = pictures
//     .map(
//       ({
//         views,
//         likes,
//         comments,
//         downloads,
//         tags,
//         largeImageURL,
//         webformatURL,
//       }) => {
//         const tag = tags.split(',');
//         return `<li class="gallery__item">
//         <a href="${largeImageURL}" class="gallery__item-link">
//           <img src="${webformatURL}" alt="${tag[0]}">
//           <div class="gallery__item-content">
//             <div class="gallery__item-info">
//               <h3 class="gallery__item-title">Likes</h3>
//               <span class="gallery__item-text">${likes}</span>
//             </div>
//             <div class="gallery__item-info">
//               <h3 class="gallery__item-title">Views</h3>
//               <span class="gallery__item-text">${views}</span>
//             </div>
//             <div class="gallery__item-info">
//               <h3 class="gallery__item-title">Comments</h3>
//               <span class="gallery__item-text">${comments}</span>
//             </div>
//             <div class="gallery__item-info">
//               <h3 class="gallery__item-title">Downloads</h3>
//               <span class="gallery__item-text">${downloads}</span>
//             </div>
//           </div>
//         </a>
//       </li>`;
//       }
//     )
//     .join('');
//   list.insertAdjacentHTML('beforeend', markup);
// }
function createCityInfoMurkap(pictures, list) {
  const markup = pictures
    .map(({ id, name, main: { temp } }) => {
      //   const tag = tags.split(',');
      return `<li id="${id}" class="gallery__item">${name} <span>${temp}</span><a href="../../parcials/city-info.html"></a></li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}
export default createCityInfoMurkap;
