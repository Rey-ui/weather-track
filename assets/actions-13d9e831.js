import{a as S,i as u}from"./vendor-db25513e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const C="169e2d2ec6f9ef07a3c4e60acede402f",T="https://api.openweathermap.org/data/2.5";async function m(t){const e=await S.get(`${T}/weather`,{params:{appid:C,q:t}});return console.log(e.data),e.data}function q(t){return JSON.parse(localStorage.getItem(t))||[]}function g(t,e){return localStorage.setItem(e,JSON.stringify(t))}const d="citiesList",$=document.querySelector(".our-cities__form"),a=document.querySelector(".our-cities__list"),x=document.querySelector(".popular-cities__list"),A=document.querySelector(".our-cities__clear-btn"),c=document.querySelector(".our-cities__refresh-btn"),N=document.querySelector(".loader"),y=document.querySelector(".our-cities__loader"),H=document.querySelector(".our-cities__bar-sorts-btns");let s=q(d)||[];const z=document.querySelector(".city-details__wrapper");function f(t,e){if(t.length>0){const n=t.map(({id:r,name:i,main:{humidity:o,temp:l},weather:w,wind:{speed:L}})=>{const h=w[0].main,b=E(h);return`<li id="${r}" class="our-cities__item">
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
                            <use href="./svg/symbol-defs.svg#${b}"></use>
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
                            <span class="our-cities__item-down-text">${L}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="our-cities__item-btn">
                    <svg  width="22" height="22">
                      <use href="./svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`}).join("");e.insertAdjacentHTML("beforeend",n)}else e.innerHTML='<p class="alternative">There are no cities yet</p>'}function E(t){return{Clear:"icon-sun",Clouds:"icon-cloud",Rain:"icon-cloud-rain",Drizzle:"icon-cloud-drizzle",Thunderstorm:"icon-cloud-lightning",Snow:"icon-cloud-snow",Mist:"icon-weather-windy",Smoke:"icon-weather-windy",Haze:"icon-weather-windy-cloudy",Dust:"icon-triangle",Fog:"icon-eye-off",Sand:"icon-chart-area",Ash:"icon-chart-area",Squall:"icon-warning",Tornado:"icon-warning"}[t]||"icon-cloud"}async function P(t){t.preventDefault();const e=t.currentTarget,n=e.elements.city.value.trim();if(_(),!n){u.error({title:"Error",message:"❌Please enter the correct city name!"});return}try{const r=await m(n);if(console.log(r.weather[0].main),!r||r.length===0)return;{a.innerHTML="";const i=p(r);console.log(s),f(i,a),c.classList.add("active-btn")}}catch(r){console.log(r),u.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{v(),e.reset()}}function M(t,e){e.innerHTML="",f(t,e),t.length&&c.classList.add("active-btn")}function D(t){const e=t.target.closest(".our-cities__item-btn");if(!e)return;const n=e.closest("li"),r=Number(n.id),i=s.filter(o=>o.id!==r);s.length=0,s.push(...i),g(s,d),s.length?c.classList.add("active-btn"):c.classList.remove("active-btn"),M(s,a)}function j(){a.innerHTML='<p class="alternative">There are no cities yet</p>',s.length=0,localStorage.removeItem(d),c.classList.remove("active-btn")}function p(t){return s.some(n=>n.id===t.id)?(u.error({title:"Error",message:"❌Sorry, already exists!"}),s):(s.push(t),g(s,d),s)}async function B(){const t=s.map(({name:e})=>e);s.length=0,_();try{for(let e of t){const n=await m(e);a.innerHTML="";const r=p(n);f(r,a)}}catch(e){console.log(e)}finally{v()}}function v(){y.classList.add("hidden")}function _(){y.classList.remove("hidden")}function I(){c&&(s.length?c.classList.add("active-btn"):c.classList.remove("active-btn"))}I();export{s as a,a as b,z as c,f as d,D as e,$ as f,E as g,P as h,A as i,j,B as k,N as l,H as m,x as p,c as r,m as s};
//# sourceMappingURL=actions-13d9e831.js.map
