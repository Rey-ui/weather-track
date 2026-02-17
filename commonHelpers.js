import{a as _,i as u}from"./assets/vendor-db25513e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const C="169e2d2ec6f9ef07a3c4e60acede402f",L="https://api.openweathermap.org/data/2.5";async function h(t){return(await _.get(`${L}/weather?q=${t}&appid=${C}`)).data}function l(t,e){const n=t.map(({id:i,name:r,main:{humidity:s,temp:a},weather:y,wind:{speed:v}})=>{const f=y[0].main,w=m(f);return`<li id="${i}" class="our-cities__item">
                  <a href="../../parcials/city-info.html?name=${r}">
                    <h3>${r}</h3>
                    <div>
                      <div>
                        <div>
                          <svg class="header__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${w}"></use>
                          </svg>
                          <span>${f}</span>
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
                            <span>${v}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="item-btn">
                    <svg class="header__svg" width="35" height="30">
                      <use href="./svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`}).join("");e.insertAdjacentHTML("beforeend",n)}function S(t){return JSON.parse(localStorage.getItem(t))||[]}function g(t,e){return localStorage.setItem(e,JSON.stringify(t))}const b=document.querySelector(".our-cities__form"),c=document.querySelector(".our-cities__list"),$=document.querySelector(".popular-cities__list"),E=document.querySelector(".our-cities__clear-btn"),T=document.querySelector(".our-cities__refresh-btn"),d="citiesList";let o=S(d)||[];l(o,c);function m(t){return{Clear:"icon-sun",Clouds:"icon-cloud",Rain:"icon-cloud-rain",Drizzle:"icon-cloud-drizzle",Thunderstorm:"icon-cloud-lightning",Snow:"icon-cloud-snow",Mist:"icon-weather-windy",Smoke:"icon-weather-windy",Haze:"icon-weather-windy-cloudy",Dust:"icon-triangle",Fog:"icon-eye-off",Sand:"icon-chart-area",Ash:"icon-chart-area",Squall:"icon-warning",Tornado:"icon-warning"}[t]||"icon-cloud"}async function I(t){t.preventDefault();const e=t.currentTarget,n=e.elements.city.value.trim();if(!n){u.error({title:"Error",message:"❌Sorry, already exist!"});return}try{const i=await h(n);if(console.log(i.weather[0].main),!i||i.length===0)return;{c.innerHTML="";const r=p(i);console.log(o),l(r,c)}}catch(i){console.log(i),u.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"})}finally{e.reset()}}function M(t,e){e.innerHTML="",l(t,e)}function A(t){const e=t.target.closest(".item-btn");if(!e)return;const n=e.closest("li"),i=Number(n.id);o=o.filter(r=>r.id!==i),g(o,d),M(o,c)}function P(){c.innerHTML="",o=[],localStorage.removeItem(d)}function p(t){return o.some(n=>n.id===t.id)?(u.error({title:"Error",message:"❌Sorry, already exist!"}),o):(o=[...o,t],g(o,d),o)}async function q(){const t=o.map(({name:e})=>e);o=[];try{for(let e of t){const n=await h(e);c.innerHTML="";const i=p(n);l(i,c)}}catch(e){console.log(e)}}function O({id:t,name:e,main:{temp:n},weather:i}){const r=i[0].main,s=m(r);return`<li id="${t}" class="our-cities__item">
                    <a href="../../parcials/city-info.html?name=${e}">
                      <h3>${e}</h3>
                      <div>
                        <div>
                          <svg class="header__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${s}"></use>
                          </svg>
                          <span>${r}</span>
                        </div>
                        <p>${Math.ceil(n-273.15)}°</p>
                      </div>
                    </a>
                </li>`}const N=["London","Tokio","Paris","Berlin","Kyiv","Seoul","Pekin","Toronto"];async function x(t){try{for(let e of N){const n=await h(e);t.insertAdjacentHTML("beforeend",O(n))}}catch(e){console.log(e)}}b.addEventListener("submit",I);c.addEventListener("click",A);E.addEventListener("click",P);T.addEventListener("click",q);x($);
//# sourceMappingURL=commonHelpers.js.map
