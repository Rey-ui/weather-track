import{a as m,i as u}from"./vendor-db25513e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const g="169e2d2ec6f9ef07a3c4e60acede402f",y="https://api.openweathermap.org/data/2.5";async function p(t){const e=await m.get(`${y}/weather`,{params:{appid:g,q:t}});return console.log(e.data),e.data}async function O(t){const e=await m.get(`${y}/forecast`,{params:{appid:g,q:t}});return console.log(e.data),e.data.list}function T(t){return JSON.parse(localStorage.getItem(t))||[]}function _(t,e){return localStorage.setItem(e,JSON.stringify(t))}const d="citiesList",x=document.querySelector(".our-cities__form"),a=document.querySelector(".our-cities__list"),A=document.querySelector(".popular-cities__list"),N=document.querySelector(".our-cities__clear-btn"),c=document.querySelector(".our-cities__refresh-btn"),H=document.querySelector(".loader"),v=document.querySelector(".our-cities__loader"),z=document.querySelector(".our-cities__bar-sorts-btns");let s=T(d)||[];const P=document.querySelector(".city-details__wrapper"),D=document.querySelector(".city-forcast__list");function f(t,e){if(t.length>0){const n=t.map(({id:r,name:i,main:{humidity:o,temp:l},weather:S,wind:{speed:C}})=>{const h=S[0].main,q=E(h);return`<li id="${r}" class="our-cities__item">
                  <a class="our-cities__item-link" href="./city-details.html?name=${i}">
                    <div class="our-cities__item-up">
                      <img
                        src="./img/city-card-img.jpg"
                        alt="city-card-img"
                        width="200"
                        height="200"
                      />
                      <p class="our-cities__item-name">${i}</p>
                    </div>
                    <div class="our-cities__item-content">
                      <div class="our-cities__item-weather">
                        <svg width="35" height="30">
                            <use href="./svg/symbol-defs.svg#${q}"></use>
                        </svg>
                        <span>${h}</span>
                      </div>
                      <h3 class="our-cities__item-temp">${Math.ceil(l-273.15)}°</h3>
                    </div>
                      <div class="our-cities__item-down">
                          <div class="our-cities__item-down-info">
                            <svg class="our-cities__item-down-humid"  width="16" height="16">
                                <use href="./svg/symbol-defs.svg#icon-droplet"></use>
                            </svg>
                            <span class="our-cities__item-down-text">${o}%</span>
                          </div>
                          <div class="our-cities__item-down-info">
                            <svg  width="16" height="16">
                                <use href="./svg/symbol-defs.svg#icon-wind"></use>
                            </svg>
                            <span class="our-cities__item-down-text">${C}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="our-cities__item-btn">
                    <svg  width="22" height="22">
                      <use href="./svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`}).join("");e.insertAdjacentHTML("beforeend",n)}else e.innerHTML='<p class="alternative">There are no cities yet</p>'}function E(t){return{Clear:"icon-sun",Clouds:"icon-cloud",Rain:"icon-cloud-rain",Drizzle:"icon-cloud-drizzle",Thunderstorm:"icon-cloud-lightning",Snow:"icon-cloud-snow",Mist:"icon-weather-windy",Smoke:"icon-weather-windy",Haze:"icon-weather-windy-cloudy",Dust:"icon-triangle",Fog:"icon-eye-off",Sand:"icon-chart-area",Ash:"icon-chart-area",Squall:"icon-warning",Tornado:"icon-warning"}[t]||"icon-cloud"}async function j(t){t.preventDefault();const e=t.currentTarget,n=e.elements.city.value.trim();if(b(),!n){u.error({title:"Error",message:"❌Please enter the correct city name!"});return}try{const r=await p(n);if(console.log(r.weather[0].main),!r||r.length===0)return;{a.innerHTML="";const i=w(r);console.log(s),f(i,a),c.classList.add("active-btn")}}catch(r){console.log(r),u.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{L(),e.reset()}}function M(t,e){e.innerHTML="",f(t,e),t.length&&c.classList.add("active-btn")}function B(t){const e=t.target.closest(".our-cities__item-btn");if(!e)return;const n=e.closest("li"),r=Number(n.id),i=s.filter(o=>o.id!==r);s.length=0,s.push(...i),_(s,d),s.length?c.classList.add("active-btn"):c.classList.remove("active-btn"),M(s,a)}function R(){a.innerHTML='<p class="alternative">There are no cities yet</p>',s.length=0,localStorage.removeItem(d),c.classList.remove("active-btn")}function w(t){return s.some(n=>n.id===t.id)?(u.error({title:"Error",message:"❌Sorry, already exists!"}),s):(s.push(t),_(s,d),s)}async function F(){const t=s.map(({name:e})=>e);s.length=0,b();try{for(let e of t){const n=await p(e);a.innerHTML="";const r=w(n);f(r,a)}}catch(e){console.log(e)}finally{L()}}function L(){v.classList.add("hidden")}function b(){v.classList.remove("hidden")}function $(){c&&(s.length?c.classList.add("active-btn"):c.classList.remove("active-btn"))}$();export{O as a,s as b,P as c,a as d,f as e,D as f,E as g,x as h,j as i,B as j,N as k,H as l,R as m,F as n,z as o,A as p,c as r,p as s};
//# sourceMappingURL=actions-72c1adee.js.map
