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

//export let citiesArr = getSavedCities(LOCAL_KEY) || [];
// City details refs=================================
export const cityDetailsEl = document.querySelector('.city-details__wrapper');
export const forcastList = document.querySelector('.city-forcast__list');

export class CitiesDatabase {
  constructor(storageKey) {
    this.storageKey = storageKey;
    this.data = this.load();
  }

  load() {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  getAll() {
    return this.data;
  }

  add(city) {
    const exists = this.data.some(item => item.id === city.id);
    if (exists) return false;

    this.data.push(city);
    this.save();
    return true;
  }

  remove(id) {
    this.data = this.data.filter(city => city.id !== id);
    this.save();
  }

  clear() {
    this.data = [];
    localStorage.removeItem(this.storageKey);
  }

  replaceAll(newData) {
    this.data = newData;
    this.save();
  }
}
export const db = new CitiesDatabase(LOCAL_KEY);
