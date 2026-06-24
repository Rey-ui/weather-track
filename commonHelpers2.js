import{g as f,a as g,l as h,d as m,b as u,e as v,h as _,i as C,j as y,k as L,m as b,r as w,n as E,o as k,p as S}from"./assets/actions-fe424ceb.js";import"./assets/vendor-db25513e.js";function M({id:t,name:e,main:{temp:s},weather:i}){const n=i[0].main,r=f(n);return`<li id="${t}" class="popular-cities__item">
                    <a class="popular-cities__item-link" href="./city-details.html?name=${e}">
                      <div class="popular-cities__item-content">
                        <h3  class="popular-cities__item-title">${e}</h3>
                        <p class="popular-cities__item-text">${Math.ceil(s-273.15)}°</p>
                      </div>
                      <div class="popular-cities__item-icon">
                          <svg class="popular-cities__svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${r}"></use>
                          </svg>
                          <span>${n}</span>
                        </div>
                    </a>
                </li>`}const T=["London","Tokio","Paris","Berlin","Kyiv","Seoul","Toronto"];function $(){h.classList.add("hidden")}function A(){h.classList.remove("hidden")}async function B(t){A();try{for(let e of T){const s=await g(e);t.insertAdjacentHTML("beforeend",M(s))}}catch(e){console.log(e)}finally{$()}}function d(t,e){switch(e){case"temperature":return t.main.temp;case"humidity":return t.main.humidity;case"windSpeed":return t.wind.speed;case"name":default:return t.name}}let a=!0,p=null;function H(t){const e=t.target.closest(".our-cities__bar-sorts-btn");if(!e)return;const s=e.querySelector(".our-cities__bar-sorts-svg");console.log(e),console.log(s),document.querySelectorAll(".our-cities__bar-sorts-btn").forEach(r=>{r.classList.remove("active");const l=r.querySelector(".our-cities__bar-sorts-svg");l&&(l.innerHTML='<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>')});const i=e.name;e.classList.add("active"),p===i?a=!a:(p=i,a=!0),s.innerHTML=a?'<use href="./svg/symbol-defs.svg#icon-arrow-up"></use>':'<use href="./svg/symbol-defs.svg#icon-arrow-down"></use>';const n=[...m.getAll()].sort((r,l)=>{const o=d(r,i),c=d(l,i);return typeof o=="string"?a?o.localeCompare(c):c.localeCompare(o):a?c-o:o-c});u.innerHTML="",v(n,u)}_.addEventListener("submit",C);u.addEventListener("click",y);L.addEventListener("click",b);w.addEventListener("click",E);k.addEventListener("click",H);B(S);v(m.getAll(),u);
//# sourceMappingURL=commonHelpers2.js.map
