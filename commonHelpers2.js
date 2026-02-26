import{s as v}from"./assets/weather-api-19359e28.js";import{i as g}from"./assets/vendor-8cce9181.js";function m(t,e){if(t.length>0){const r=t.map(({id:i,name:n,main:{humidity:o,temp:u},weather:l,wind:{speed:d}})=>{const p=l[0].main,$=C(p);return`<li id="${i}" class="our-cities__item">
                  <a class="our-cities__item-link" href="./city-info.html?name=${n}">
                    <div class="our-cities__item-up">
                      <img
                        src="./img/city-card-img.jpg"
                        alt="city-card-img"
                        width="200"
                        height="200"
                      />
                      <p class="our-cities__item-name">${n}</p>
                    </div>
                    <div class="our-cities__item-content">
                      <div class="our-cities__item-weather">
                        <svg width="35" height="30">
                            <use href="./svg/symbol-defs.svg#${$}"></use>
                        </svg>
                        <span>${p}</span>
                      </div>
                      <h3 class="our-cities__item-temp">${Math.ceil(u-273.15)}°</h3>
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
              </li>`}).join("");e.insertAdjacentHTML("beforeend",r)}else e.innerHTML='<p class="alternative">There are no cities yet</p>'}function M(t){return JSON.parse(localStorage.getItem(t))||[]}function w(t,e){return localStorage.setItem(e,JSON.stringify(t))}const f="citiesList",q=document.querySelector(".our-cities__form"),c=document.querySelector(".our-cities__list"),k=document.querySelector(".popular-cities__list"),H=document.querySelector(".our-cities__clear-btn"),a=document.querySelector(".our-cities__refresh-btn"),L=document.querySelector(".loader"),b=document.querySelector(".our-cities__loader"),I=document.querySelector(".our-cities__bar-sorts-btns");let s=M(f)||[];function C(t){return{Clear:"icon-sun",Clouds:"icon-cloud",Rain:"icon-cloud-rain",Drizzle:"icon-cloud-drizzle",Thunderstorm:"icon-cloud-lightning",Snow:"icon-cloud-snow",Mist:"icon-weather-windy",Smoke:"icon-weather-windy",Haze:"icon-weather-windy-cloudy",Dust:"icon-triangle",Fog:"icon-eye-off",Sand:"icon-chart-area",Ash:"icon-chart-area",Squall:"icon-warning",Tornado:"icon-warning"}[t]||"icon-cloud"}async function x(t){t.preventDefault();const e=t.currentTarget,r=e.elements.city.value.trim();if(E(),!r){g.error({title:"Error",message:"❌Please enter the correct city name!"});return}try{const i=await v(r);if(console.log(i.weather[0].main),!i||i.length===0)return;{c.innerHTML="";const n=S(i);console.log(s),m(n,c),a.classList.add("active-btn")}}catch(i){console.log(i),g.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{T(),e.reset()}}function A(t,e){e.innerHTML="",m(t,e),t.length&&a.classList.add("active-btn")}function z(t){const e=t.target.closest(".our-cities__item-btn");if(!e)return;const r=e.closest("li"),i=Number(r.id),n=s.filter(o=>o.id!==i);s.length=0,s.push(...n),w(s,f),s.length?a.classList.add("active-btn"):a.classList.remove("active-btn"),A(s,c)}function B(){c.innerHTML='<p class="alternative">There are no cities yet</p>',s.length=0,localStorage.removeItem(f),a.classList.remove("active-btn")}function S(t){return s.some(r=>r.id===t.id)?(g.error({title:"Error",message:"❌Sorry, already exists!"}),s):(s.push(t),w(s,f),s)}async function N(){const t=s.map(({name:e})=>e);s.length=0,E();try{for(let e of t){const r=await v(e);c.innerHTML="";const i=S(r);m(i,c)}}catch(e){console.log(e)}finally{T()}}function T(){b.classList.add("hidden")}function E(){b.classList.remove("hidden")}function j(){s.length?a.classList.add("active-btn"):a.classList.remove("active-btn")}j();function D({id:t,name:e,main:{temp:r},weather:i}){const n=i[0].main,o=C(n);return`<li id="${t}" class="popular-cities__item">
                    <a class="popular-cities__item-link" href="./city-info.html?name=${e}">
                      <div class="popular-cities__item-content">
                        <h3  class="popular-cities__item-title">${e}</h3>
                        <p class="popular-cities__item-text">${Math.ceil(r-273.15)}°</p>
                      </div>
                      <div class="popular-cities__item-icon">
                          <svg class="popular-cities__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${o}"></use>
                          </svg>
                          <span>${n}</span>
                        </div>
                    </a>
                </li>`}const O=["London","Tokio","Paris","Berlin","Kyiv","Seoul","Toronto"];function P(){L.classList.add("hidden")}function R(){L.classList.remove("hidden")}async function W(t){R();try{for(let e of O){const r=await v(e);t.insertAdjacentHTML("beforeend",D(r))}}catch(e){console.log(e)}finally{P()}}function _(t,e){switch(e){case"temperature":return t.main.temp;case"humidity":return t.main.humidity;case"windSpeed":return t.wind.speed;case"name":default:return t.name}}let h=!0,y=null;function F(t){const e=t.target.closest(".our-cities__bar-sorts-btn");if(!e)return;const r=e.querySelector(".our-cities__bar-sorts-svg");console.log(e),console.log(r),document.querySelectorAll(".our-cities__bar-sorts-btn").forEach(o=>{o.classList.remove("active");const u=o.querySelector(".our-cities__bar-sorts-svg");u&&(u.innerHTML='<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>')});const i=e.name;e.classList.add("active"),y===i?h=!h:(y=i,h=!0),r.innerHTML=h?'<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>':'<use href="./svg/symbol-defs.svg#icon-arrow-down"></use>';const n=[...s].sort((o,u)=>{const l=_(o,i),d=_(u,i);return typeof l=="string"?h?l.localeCompare(d):d.localeCompare(l):h?d-l:l-d});c.innerHTML="",m(n,c)}q.addEventListener("submit",x);c.addEventListener("click",z);H.addEventListener("click",B);a.addEventListener("click",N);I.addEventListener("click",F);W(k);m(s,c);
//# sourceMappingURL=commonHelpers2.js.map
