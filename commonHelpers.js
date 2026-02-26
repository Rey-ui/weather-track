import{a as M,i as p}from"./assets/vendor-db25513e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const q="169e2d2ec6f9ef07a3c4e60acede402f",I="https://api.openweathermap.org/data/2.5";async function g(t){const e=await M.get(`${I}/weather`,{params:{appid:q,q:t}});return console.log(e.data),e.data}function f(t,e){if(t.length>0){const o=t.map(({id:s,name:i,main:{humidity:r,temp:c},weather:u,wind:{speed:d}})=>{const v=u[0].main,$=C(v);return`<li id="${s}" class="our-cities__item">
                  <a class="our-cities__item-link" href="../../parcials/city-info.html?name=${i}">
                    <div class="our-cities__item-up">
                      <img
                        src="./public/img/cityscape-on-white-background-building-perspective-modern-building-in-the-city-skyline-city-silhouette-city-skyscrapers-business-center-vector.jpg"
                        alt=""
                        width="200"
                        height="200"
                      />
                      <p class="our-cities__item-name">${i}</p>
                    </div>
                    <div class="our-cities__item-content">
                      <div class="our-cities__item-weather">
                        <svg width="35" height="30">
                            <use href="./svg/symbol-defs.svg#${$}"></use>
                        </svg>
                        <span>${v}</span>
                      </div>
                      <h3 class="our-cities__item-temp">${Math.ceil(c-273.15)}°</h3>
                    </div>
                      <div class="our-cities__item-down">
                          <div class="our-cities__item-down-info">
                            <svg class="our-cities__item-down-humid"  width="16" height="16">
                                <use href="./svg/symbol-defs.svg#icon-droplet"></use>
                            </svg>
                            <span class="our-cities__item-down-text">${r}%</span>
                          </div>
                          <div class="our-cities__item-down-info">
                            <svg  width="16" height="16">
                                <use href="./svg/symbol-defs.svg#icon-wind"></use>
                            </svg>
                            <span class="our-cities__item-down-text">${d}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="our-cities__item-btn">
                    <svg  width="22" height="22">
                      <use href="./svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`}).join("");e.insertAdjacentHTML("beforeend",o)}else e.innerHTML='<p class="alternative">There are no cities yet</p>'}function A(t){return JSON.parse(localStorage.getItem(t))||[]}function w(t,e){return localStorage.setItem(e,JSON.stringify(t))}const m="citiesList",H=document.querySelector(".our-cities__form"),a=document.querySelector(".our-cities__list"),k=document.querySelector(".popular-cities__list"),O=document.querySelector(".our-cities__clear-btn"),l=document.querySelector(".our-cities__refresh-btn"),L=document.querySelector(".loader"),b=document.querySelector(".our-cities__loader"),x=document.querySelector(".our-cities__bar-sorts-btns");let n=A(m)||[];function C(t){return{Clear:"icon-sun",Clouds:"icon-cloud",Rain:"icon-cloud-rain",Drizzle:"icon-cloud-drizzle",Thunderstorm:"icon-cloud-lightning",Snow:"icon-cloud-snow",Mist:"icon-weather-windy",Smoke:"icon-weather-windy",Haze:"icon-weather-windy-cloudy",Dust:"icon-triangle",Fog:"icon-eye-off",Sand:"icon-chart-area",Ash:"icon-chart-area",Squall:"icon-warning",Tornado:"icon-warning"}[t]||"icon-cloud"}async function P(t){t.preventDefault();const e=t.currentTarget,o=e.elements.city.value.trim();if(E(),!o){p.error({title:"Error",message:"❌Please enter the correct city name!"});return}try{const s=await g(o);if(console.log(s.weather[0].main),!s||s.length===0)return;{a.innerHTML="";const i=S(s);console.log(n),f(i,a),l.classList.add("active-btn")}}catch(s){console.log(s),p.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{T(),e.reset()}}function N(t,e){e.innerHTML="",f(t,e),t.length&&l.classList.add("active-btn")}function z(t){const e=t.target.closest(".our-cities__item-btn");if(!e)return;const o=e.closest("li"),s=Number(o.id),i=n.filter(r=>r.id!==s);n.length=0,n.push(...i),w(n,m),n.length?l.classList.add("active-btn"):l.classList.remove("active-btn"),N(n,a)}function B(){a.innerHTML='<p class="alternative">There are no cities yet</p>',n.length=0,localStorage.removeItem(m),l.classList.remove("active-btn")}function S(t){return n.some(o=>o.id===t.id)?(p.error({title:"Error",message:"❌Sorry, already exists!"}),n):(n.push(t),w(n,m),n)}async function j(){const t=n.map(({name:e})=>e);n.length=0,E();try{for(let e of t){const o=await g(e);a.innerHTML="";const s=S(o);f(s,a)}}catch(e){console.log(e)}finally{T()}}function T(){b.classList.add("hidden")}function E(){b.classList.remove("hidden")}function D(){n.length?l.classList.add("active-btn"):l.classList.remove("active-btn")}D();function K({id:t,name:e,main:{temp:o},weather:s}){const i=s[0].main,r=C(i);return`<li id="${t}" class="popular-cities__item">
                    <a class="popular-cities__item-link" href="../../parcials/city-info.html?name=${e}">
                      <div class="popular-cities__item-content">
                        <h3  class="popular-cities__item-title">${e}</h3>
                        <p class="popular-cities__item-text">${Math.ceil(o-273.15)}°</p>
                      </div>
                      <div class="popular-cities__item-icon">
                          <svg class="popular-cities__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${r}"></use>
                          </svg>
                          <span>${i}</span>
                        </div>
                    </a>
                </li>`}const R=["London","Tokio","Paris","Berlin","Kyiv","Seoul","Toronto"];function F(){L.classList.add("hidden")}function W(){L.classList.remove("hidden")}async function J(t){W();try{for(let e of R){const o=await g(e);t.insertAdjacentHTML("beforeend",K(o))}}catch(e){console.log(e)}finally{F()}}function y(t,e){switch(e){case"temperature":return t.main.temp;case"humidity":return t.main.humidity;case"windSpeed":return t.wind.speed;case"name":default:return t.name}}let h=!0,_=null;function V(t){const e=t.target.closest(".our-cities__bar-sorts-btn");if(!e)return;const o=e.querySelector(".our-cities__bar-sorts-svg");console.log(e),console.log(o),document.querySelectorAll(".our-cities__bar-sorts-btn").forEach(r=>{r.classList.remove("active");const c=r.querySelector(".our-cities__bar-sorts-svg");c&&(c.innerHTML='<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>')});const s=e.name;e.classList.add("active"),_===s?h=!h:(_=s,h=!0),o.innerHTML=h?'<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>':'<use href="./svg/symbol-defs.svg#icon-arrow-down"></use>';const i=[...n].sort((r,c)=>{const u=y(r,s),d=y(c,s);return typeof u=="string"?h?u.localeCompare(d):d.localeCompare(u):h?d-u:u-d});a.innerHTML="",f(i,a)}H.addEventListener("submit",P);a.addEventListener("click",z);O.addEventListener("click",B);l.addEventListener("click",j);x.addEventListener("click",V);J(k);f(n,a);
//# sourceMappingURL=commonHelpers.js.map
