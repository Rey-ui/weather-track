import{g as v,s as g,l as h,a as m,b as u,d as f,f as _,h as C,e as L,i as y,j as b,r as w,k,m as E,p as S}from"./assets/actions-13d9e831.js";import"./assets/vendor-db25513e.js";function T({id:s,name:e,main:{temp:t},weather:i}){const n=i[0].main,r=v(n);return`<li id="${s}" class="popular-cities__item">
                    <a class="popular-cities__item-link" href="./city-details.html?name=${e}">
                      <div class="popular-cities__item-content">
                        <h3  class="popular-cities__item-title">${e}</h3>
                        <p class="popular-cities__item-text">${Math.ceil(t-273.15)}°</p>
                      </div>
                      <div class="popular-cities__item-icon">
                          <svg class="popular-cities__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${r}"></use>
                          </svg>
                          <span>${n}</span>
                        </div>
                    </a>
                </li>`}const M=["London","Tokio","Paris","Berlin","Kyiv","Seoul","Toronto"];function $(){h.classList.add("hidden")}function A(){h.classList.remove("hidden")}async function B(s){A();try{for(let e of M){const t=await g(e);s.insertAdjacentHTML("beforeend",T(t))}}catch(e){console.log(e)}finally{$()}}function d(s,e){switch(e){case"temperature":return s.main.temp;case"humidity":return s.main.humidity;case"windSpeed":return s.wind.speed;case"name":default:return s.name}}let a=!0,p=null;function H(s){const e=s.target.closest(".our-cities__bar-sorts-btn");if(!e)return;const t=e.querySelector(".our-cities__bar-sorts-svg");console.log(e),console.log(t),document.querySelectorAll(".our-cities__bar-sorts-btn").forEach(r=>{r.classList.remove("active");const c=r.querySelector(".our-cities__bar-sorts-svg");c&&(c.innerHTML='<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>')});const i=e.name;e.classList.add("active"),p===i?a=!a:(p=i,a=!0),t.innerHTML=a?'<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>':'<use href="./svg/symbol-defs.svg#icon-arrow-down"></use>';const n=[...m].sort((r,c)=>{const o=d(r,i),l=d(c,i);return typeof o=="string"?a?o.localeCompare(l):l.localeCompare(o):a?l-o:o-l});u.innerHTML="",f(n,u)}_.addEventListener("submit",C);u.addEventListener("click",L);y.addEventListener("click",b);w.addEventListener("click",k);E.addEventListener("click",H);B(S);f(m,u);
//# sourceMappingURL=commonHelpers2.js.map
