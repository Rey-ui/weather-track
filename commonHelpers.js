import{a as w,i as d}from"./assets/vendor-db25513e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const _="169e2d2ec6f9ef07a3c4e60acede402f",C="https://api.openweathermap.org/data/2.5";async function f(r){return(await w.get(`${C}/weather?q=${r}&appid=${_}`)).data}function u(r,e){const n=r.map(({id:i,name:t,main:{humidity:s,temp:a},weather:p,wind:{speed:y}})=>{const h=p[0].main,v=m(h);return`<li id="${i}" class="our-cities__item">
                  <a href="../../parcials/city-info.html?name=${t}">
                    <h3>${t}</h3>
                    <div>
                      <div>
                        <div>
                          <svg class="header__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${v}"></use>
                          </svg>
                          <span>${h}</span>
                        </div>
                        <p>${Math.ceil(a-273.15)}°</p>
                      </div>
                      <div>
                          <div>
                            <svg class="header__svg" width="15" height="15">
                                <use href="./svg/symbol-defs.svg#icon-droplet"></use>
                            </svg>
                            <span>${s}%</span>
                          </div>
                          <div>
                            <svg class="header__svg" width="35" height="30">
                                <use href="./svg/symbol-defs.svg#icon-wind"></use>
                            </svg>
                            <span>${y}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="item-btn">
                    <svg class="header__svg" width="35" height="30">
                      <use href="./svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`}).join("");e.insertAdjacentHTML("beforeend",n)}function L(r){return JSON.parse(localStorage.getItem(r))||[]}function g(r,e){return localStorage.setItem(e,JSON.stringify(r))}const S=document.querySelector(".our-cities__form"),c=document.querySelector(".our-cities__list"),b=document.querySelector(".popular-cities__list"),$=document.querySelector(".our-cities__clear-btn"),l="citiesList";let o=L(l)||[];u(o,c);function m(r){return{Clear:"icon-sun",Clouds:"icon-cloud",Rain:"icon-cloud-rain",Drizzle:"icon-cloud-drizzle",Thunderstorm:"icon-cloud-lightning",Snow:"icon-cloud-snow",Mist:"icon-weather-windy",Smoke:"icon-weather-windy",Haze:"icon-weather-windy-cloudy",Dust:"icon-triangle",Fog:"icon-eye-off",Sand:"icon-chart-area",Ash:"icon-chart-area",Squall:"icon-warning",Tornado:"icon-warning"}[r]||"icon-cloud"}async function E(r){r.preventDefault();const e=r.currentTarget,n=e.elements.city.value.trim();if(!n){d.error({title:"Error",message:"❌Sorry, already exist!"});return}try{const i=await f(n);if(console.log(i.weather[0].main),!i||i.length===0)return;{c.innerHTML="";const t=A(i);console.log(o),u(t,c)}}catch(i){console.log(i),d.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"})}finally{e.reset()}}function T(r,e){e.innerHTML="",u(r,e)}function I(r){const e=r.target.closest(".item-btn");if(!e)return;const n=e.closest("li"),i=Number(n.id);o=o.filter(t=>t.id!==i),g(o,l),T(o,c)}function M(){c.innerHTML="",o=[],localStorage.removeItem(l)}function A(r){return o.some(n=>n.id===r.id)?(d.error({title:"Error",message:"❌Sorry, already exist!"}),o):(o=[...o,r],g(o,l),o)}function P({id:r,name:e,main:{temp:n},weather:i}){const t=i[0].main,s=m(t);return`<li id="${r}" class="our-cities__item">
                    <a href="../../parcials/city-info.html?name=${e}">
                      <h3>${e}</h3>
                      <div>
                        <div>
                          <svg class="header__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${s}"></use>
                          </svg>
                          <span>${t}</span>
                        </div>
                        <p>${Math.ceil(n-273.15)}°</p>
                      </div>
                    </a>
                </li>`}const O=["London","Tokio","Paris","Berlin","Kyiv","Seoul","Pekin","Toronto"];async function q(r){try{for(let e of O){const n=await f(e);r.insertAdjacentHTML("beforeend",P(n))}}catch(e){console.log(e)}}S.addEventListener("submit",E);c.addEventListener("click",I);$.addEventListener("click",M);q(b);
//# sourceMappingURL=commonHelpers.js.map
