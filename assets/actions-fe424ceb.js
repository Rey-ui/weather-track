import{a as m,i as d}from"./vendor-db25513e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const f="169e2d2ec6f9ef07a3c4e60acede402f",g="https://api.openweathermap.org/data/2.5";async function y(t){const e=await m.get(`${g}/weather`,{params:{appid:f,q:t}});return console.log(e.data),e.data}async function $(t){const e=await m.get(`${g}/forecast`,{params:{appid:f,q:t}});return console.log(e.data),e.data.list}const C="citiesList",I=document.querySelector(".our-cities__form"),c=document.querySelector(".our-cities__list"),O=document.querySelector(".popular-cities__list"),x=document.querySelector(".our-cities__clear-btn"),n=document.querySelector(".our-cities__refresh-btn"),N=document.querySelector(".loader"),p=document.querySelector(".our-cities__loader"),H=document.querySelector(".our-cities__bar-sorts-btns"),K=document.querySelector(".city-details__wrapper"),z=document.querySelector(".city-forcast__list");class A{constructor(e){this.storageKey=e,this.data=this.load()}load(){const e=localStorage.getItem(this.storageKey);return e?JSON.parse(e):[]}save(){localStorage.setItem(this.storageKey,JSON.stringify(this.data))}getAll(){return this.data}add(e){return this.data.some(i=>i.id===e.id)?!1:(this.data.push(e),this.save(),!0)}remove(e){this.data=this.data.filter(r=>r.id!==e),this.save()}clear(){this.data=[],localStorage.removeItem(this.storageKey)}replaceAll(e){this.data=e,this.save()}}const a=new A(C);function u(t,e){if(t.length>0){const r=t.map(({id:i,name:s,main:{humidity:o,temp:l},weather:L,wind:{speed:b}})=>{const h=L[0].main,S=q(h);return`<li id="${i}" class="our-cities__item">
                  <a class="our-cities__item-link" href="./city-details.html?name=${s}">
                    <div class="our-cities__item-up">
                      <img
                        src="./img/city-card-img.jpg"
                        alt="city-card-img"
                        width="200"
                        height="200"
                      />
                      <p class="our-cities__item-name">${s}</p>
                    </div>
                    <div class="our-cities__item-content">
                      <div class="our-cities__item-weather">
                        <svg width="35" height="30">
                            <use href="./svg/symbol-defs.svg#${S}"></use>
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
                            <span class="our-cities__item-down-text">${b}mph</span>
                          </div>
                      </div>
                    </div>
                  </a>
                  <button class="our-cities__item-btn">
                    <svg  width="22" height="22">
                      <use href="./svg/symbol-defs.svg#icon-trash"></use>
                    </svg>
                  </button>
              </li>`}).join("");e.insertAdjacentHTML("beforeend",r)}else e.innerHTML='<p class="alternative">There are no cities yet</p>'}function q(t){return{Clear:"icon-sun",Clouds:"icon-cloud",Rain:"icon-cloud-rain",Drizzle:"icon-cloud-drizzle",Thunderstorm:"icon-cloud-lightning",Snow:"icon-cloud-snow",Mist:"icon-weather-windy",Smoke:"icon-weather-windy",Haze:"icon-weather-windy-cloudy",Dust:"icon-triangle",Fog:"icon-eye-off",Sand:"icon-chart-area",Ash:"icon-chart-area",Squall:"icon-warning",Tornado:"icon-warning"}[t]||"icon-cloud"}async function D(t){t.preventDefault();const e=t.currentTarget,r=e.elements.city.value.trim();if(!r){d.error({title:"Error",message:"❌Please enter the correct city name!"});return}try{w();const i=await y(r);if(console.log(i.weather[0].main),!i||i.length===0)return;{c.innerHTML="";const s=v(i);u(s,c),n.classList.add("active-btn")}}catch(i){console.log(i),d.error({title:"Error",message:"❌Sorry, nothing was found for your request!"});return}finally{_(),e.reset()}}function T(t,e){e.innerHTML="",u(t,e),a.getAll().length&&n.classList.add("active-btn")}function P(t){const e=t.target.closest(".our-cities__item-btn");if(!e)return;const r=e.closest("li"),i=Number(r.id);a.remove(i),a.getAll().length?n.classList.add("active-btn"):n.classList.remove("active-btn"),T(a.getAll(),c)}function j(){c.innerHTML='<p class="alternative">There are no cities yet</p>',a.clear(),n.classList.remove("active-btn")}function v(t){return a.add(t)||d.error({title:"Error",message:"❌Sorry, already exists!"}),a.getAll()}async function B(){const t=a.getAll().map(({name:e})=>e);a.clear(),w();try{for(let e of t){const r=await y(e);c.innerHTML="";const i=v(r);u(i,c)}}catch(e){console.log(e)}finally{_()}}function _(){p.classList.add("hidden")}function w(){p.classList.remove("hidden")}function E(){n&&(a.getAll().length?n.classList.add("active-btn"):n.classList.remove("active-btn"))}E();export{y as a,c as b,K as c,a as d,u as e,z as f,q as g,I as h,D as i,P as j,x as k,N as l,j as m,B as n,H as o,O as p,n as r,$ as s};
//# sourceMappingURL=actions-fe424ceb.js.map
