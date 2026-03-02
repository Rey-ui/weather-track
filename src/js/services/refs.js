import { getSavedCities } from '../storage.js';
export const LOCAL_KEY = 'citiesList';

export const formEl = document.querySelector('.our-cities__form');
export const citiesListEl = document.querySelector('.our-cities__list');
export const popularCitiesListEl = document.querySelector(
  '.popular-cities__list'
);
export const btnClear = document.querySelector('.our-cities__clear-btn');
export const refreshBtn = document.querySelector('.our-cities__refresh-btn');
export const loader = document.querySelector('.loader');
export const ourCitiesLoader = document.querySelector('.our-cities__loader');
export const sortContainer = document.querySelector(
  '.our-cities__bar-sorts-btns'
);

export let citiesArr = getSavedCities(LOCAL_KEY) || [];
// City details refs=================================
export const cityDetailsEl = document.querySelector('.city-details__wrapper');
