import{a as v,i as d}from"./assets/vendor-db25513e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const w="169e2d2ec6f9ef07a3c4e60acede402f",_="https://api.openweathermap.org/data/2.5";async function f(i){return(await v.get(`${_}/weather?q=${i}&appid=${w}`)).data}function u(i,e){const s=i.map(({id:r,name:t,main:{humidity:n,temp:a},weather:p,wind:{speed:y}})=>{const h=p[0].main;return`<li id="${r}" class="our-cities__item">
                  <a href="../../parcials/city-info.html?name=${t}">
                    <h3>${t}</h3>
                    <div>
                      <div>
                        <div>
                          <svg class="header__svg" width="35" height="30">
                              <use href="./img/svg/symbol-defs.svg#${m(h)}"></use>
                          </svg>
                          <span>${h}</span>
                        </div>
                        <p>${Math.ceil(a-273.15)}°</p>
                      </div>
                      <div>
                          <div>
                            <svg class="header__svg" width="15" height="15">
                                <use href="./img/svg/symbol-defs.svg#icon-droplet"></use>
                            </svg>
                            <span>${n}%</span>
                          </div>
                          <div>
                            <svg class="header__svg" width="35" height="30">
                                <use href="./img/svg/symbol-defs.svg#icon-wind"></use>
                            </svg>
                            <span>${y}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="item-btn">
                    <svg class="header__svg" width="35" height="30">
                      <use href="./img/svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`}).join("");e.insertAdjacentHTML("beforeend",s)}function C(i){return JSON.parse(localStorage.getItem(i))||[]}function g(i,e){return localStorage.setItem(e,JSON.stringify(i))}const L=document.querySelector(".our-cities__form"),c=document.querySelector(".our-cities__list"),S=document.querySelector(".popular-cities__list"),b=document.querySelector(".our-cities__clear-btn"),l="citiesList";let o=C(l)||[];u(o,c);function m(i){return{Clear:"icon-sun",Clouds:"icon-cloud",Rain:"icon-cloud-rain",Drizzle:"icon-cloud-drizzle",Thunderstorm:"icon-cloud-lightning",Snow:"icon-cloud-snow",Mist:"icon-weather-windy",Smoke:"icon-weather-windy",Haze:"icon-weather-windy-cloudy",Dust:"icon-triangle",Fog:"icon-eye-off",Sand:"icon-chart-area",Ash:"icon-chart-area",Squall:"icon-warning",Tornado:"icon-warning"}[i]||"icon-cloud"}async function $(i){i.preventDefault();const e=i.currentTarget,s=e.elements.city.value.trim();if(!s){d.error({title:"Error",message:"❌Sorry, already exist!"});return}try{const r=await f(s);if(console.log(r.weather[0].main),!r||r.length===0)return;{c.innerHTML="";const t=A(r);console.log(o),u(t,c)}}catch(r){console.log(r),d.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"})}finally{e.reset()}}function E(i,e){e.innerHTML="",u(i,e)}function T(i){const e=i.target.closest(".item-btn");if(!e)return;const s=e.closest("li"),r=Number(s.id);o=o.filter(t=>t.id!==r),g(o,l),E(o,c)}function M(){c.innerHTML="",o=[],localStorage.removeItem(l)}function A(i){return o.some(s=>s.id===i.id)?(d.error({title:"Error",message:"❌Sorry, already exist!"}),o):(o=[...o,i],g(o,l),o)}function P({id:i,name:e,main:{temp:s},weather:r}){const t=r[0].main;return`<li id="${i}" class="our-cities__item">
                    <a href="../../parcials/city-info.html?name=${e}">
                      <h3>${e}</h3>
                      <div>
                        <div>
                          <svg class="header__svg" width="35" height="30">
                              <use href="./img/svg/symbol-defs.svg#${m(t)}"></use>
                          </svg>
                          <span>${t}</span>
                        </div>
                        <p>${Math.ceil(s-273.15)}°</p>
                      </div>
                    </a>
                </li>`}const I=["London","Tokio","Paris","Berlin","Kyiv","Seoul","Pekin","Toronto"];async function O(i){try{for(let e of I){const s=await f(e);i.insertAdjacentHTML("beforeend",P(s))}}catch(e){console.log(e)}}L.addEventListener("submit",$);c.addEventListener("click",T);b.addEventListener("click",M);O(S);
//# sourceMappingURL=commonHelpers.js.map
