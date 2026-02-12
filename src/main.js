// import searchPictures from './js/pixabay-api.js';
// import {
//   hideLoader,
//   showLoader,
//   clearGallery,
//   createMurkap,
// } from './js/render-functions.js';
import iziToast from 'izitoast';
// // Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const formEl = document.querySelector('.form');
// const listEl = document.querySelector('.gallery');
// const loadMoreBtn = document.querySelector('.load-more');
// const preLoader = document.querySelector('.pre-loader');
// const queryParams = {
//   page: 1,
//   query: '',
//   maxPage: 0,
//   per_page: 15,
// };
// const lightbox = new SimpleLightbox('.gallery .gallery__item a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });

// formEl.addEventListener('submit', handleSearch);

// async function handleSearch(e) {
//   e.preventDefault();
//   queryParams.page = 1;
//   const form = e.currentTarget;
//   const imageValue = form.elements.searchText.value.trim();
//   queryParams.query = imageValue;
//   clearGallery(listEl);
//   if (!imageValue) {
//     iziToast.error({
//       title: 'Error',
//       message: `❌Enter the text`,
//     });
//     return;
//   }
//   showLoader();
//   loadMoreBtn.classList.add('hidden');
//   try {
//     const { hits, totalHits } = await searchPictures(queryParams);
//     queryParams.maxPage = Math.ceil(totalHits / queryParams.per_page);
//     if (!hits || hits.length === 0) {
//       clearGallery(listEl);
//       iziToast.error({
//         title: 'Error',
//         message: `❌Sorry, there are no images matching your search query. Please, try again!`,
//       });
//     } else {
//       createMurkap(hits, listEl);
//       lightbox.refresh();
//       if (hits.length > 0 && totalHits != hits.length) {
//         showLoadMoreButton();
//       } else {
//         hideLoadMoreButton();
//       }
//     }
//   } catch (err) {
//     console.error(err);
//     return err;
//   } finally {
//     form.reset();
//     hideLoader();
//   }
// }
// async function handleLoadMore() {
//   queryParams.page += 1;
//   showPreLoader();
//   try {
//     const { hits } = await searchPictures(queryParams);

//     createMurkap(hits, listEl);
//     const cardHeight = listEl
//       .querySelector('.gallery__item-link')
//       .getBoundingClientRect().height;
//     window.scrollBy({ top: cardHeight * 3, behavior: 'smooth' });
//     lightbox.refresh();
//   } catch (err) {
//     console.error(err);
//     return err;
//   } finally {
//     hidePreLoader();
//     if (queryParams.page >= queryParams.maxPage) {
//       iziToast.error({
//         title: 'Message',
//         message: `We're sorry, but you've reached the end of search results.
// `,
//       });
//       hideLoadMoreButton();
//     }
//   }
// }
// function showPreLoader() {
//   loadMoreBtn.disabled = true;
//   preLoader.classList.remove('hidden');
// }
// function hidePreLoader() {
//   loadMoreBtn.disabled = false;
//   preLoader.classList.add('hidden');
// }
// function showLoadMoreButton() {
//   loadMoreBtn.classList.remove('hidden');
//   loadMoreBtn.addEventListener('click', handleLoadMore);
// }
// function hideLoadMoreButton() {
//   loadMoreBtn.classList.add('hidden');
//   loadMoreBtn.removeEventListener('click', handleLoadMore);
// }
import searchCityWeather from './js/services/weather-api.js';
import createCityCardMarkup from './js/render/render-city-card.js';
import showPopularCities from './js/popularCities.js';
import getCurrentWeather from './js/actions.js';
import { getSavedCities, saveCities } from './js/storage.js';
const LOCAL_KEY = 'citiesList';
getCurrentWeather('Clouds');
const formEl = document.querySelector('.our-cities__form');
const citiesListEl = document.querySelector('.our-cities__list');
const popularCitiesListEl = document.querySelector('.popular-cities__list');
const btnClear = document.querySelector('.our-cities__clear-btn');
let citiesArr = getSavedCities(LOCAL_KEY) || [];
formEl.addEventListener('submit', handleSearchCity);
citiesListEl.addEventListener('click', handleDeleteTask);
btnClear.addEventListener('click', handleClearCitiesList);

createCityCardMarkup(citiesArr, citiesListEl);

showPopularCities(popularCitiesListEl);

async function handleSearchCity(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const cityValue = form.elements.city.value.trim();

  if (!cityValue) {
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, already exist!`,
    });
    return;
  }
  try {
    const city = await searchCityWeather(cityValue);
    console.log(city.weather[0].main);
    if (!city || city.length === 0) {
      return;
    } else {
      citiesListEl.innerHTML = '';
      const cities = addCity(city);
      console.log(citiesArr);
      createCityCardMarkup(cities, citiesListEl);
    }
  } catch (err) {
    console.log(err);
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, there are no images matching your search query. Please, try again!`,
    });
  } finally {
    form.reset();
  }
}

function renderCities(citiesArr, list) {
  list.innerHTML = '';
  createCityCardMarkup(citiesArr, list);
}

function handleDeleteTask(e) {
  const btn = e.target.closest('.item-btn');
  if (!btn) return;
  const li = btn.closest('li');
  const cityId = Number(li.id);
  citiesArr = citiesArr.filter(city => city.id !== cityId);
  saveCities(citiesArr, LOCAL_KEY);
  renderCities(citiesArr, citiesListEl);
}

function handleClearCitiesList() {
  citiesListEl.innerHTML = '';
  citiesArr = [];
  localStorage.removeItem(LOCAL_KEY);
}
function addCity(city) {
  const isExist = citiesArr.some(item => item.id === city.id);
  if (isExist) {
    iziToast.error({
      title: 'Error',
      message: `❌Sorry, already exist!`,
    });
    return citiesArr;
  }

  citiesArr = [...citiesArr, city];
  saveCities(citiesArr, LOCAL_KEY);
  return citiesArr;
}
