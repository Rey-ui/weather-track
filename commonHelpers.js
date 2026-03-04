import{g as v,s as y,a as $,f as x,c as M}from"./assets/actions-72c1adee.js";import{i as b}from"./assets/vendor-db25513e.js";function m(s,e){const i=new Date((s+e)*1e3),t=String(i.getUTCHours()).padStart(2,"0"),a=String(i.getUTCMinutes()).padStart(2,"0");return`${t}:${a}`}function C({name:s,coord:{lon:e,lat:i},main:{feels_like:t,humidity:a,pressure:l,temp:d,temp_max:o,temp_min:n},timezone:c,sys:{sunrise:g,sunset:p},weather:r,wind:{speed:u}}){const h=r[0].main,f=r[0].description,w=v(h);return`
            <div class="city-details__hero">
              <div class="city-details__hero-info">
                <div class="city-details__hero-up">
                  <h2 class="city-details__hero-name">${s}</h2>
                  <h1 class="city-details__hero-temp">
                    ${Math.ceil(d-273.15)}°
                  </h1>
                </div>
                <h3 class="city-details__hero-text">${f}</h3>
              </div>
              <div class="city-details__weather">
                <span>${h}</span>
                <svg width="35" height="30">
                  <use href="./svg/symbol-defs.svg#${w}"></use>
                </svg>
              </div>
              <div  class="city-details__coords"><span>${e.toFixed(1)}</span><span>${i.toFixed(1)}</span></div>
            </div>
            <ul class="city-details__list">
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="our-cities__item-down-humid" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-droplet"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Humidity</span>
                  <h3 class="city-details__item-text">${a}%</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-wind-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-wind"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Wind Speed</span>
                  <h3 class="city-details__item-text">${u}mph</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-temp-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-thermometer"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Feels Like</span>
                  <h3 class="city-details__item-text">${Math.ceil(t-273.15)}°</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-pressure-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-pressure"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Pressure</span>
                  <h3 class="city-details__item-text">${l}hPa</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-temp-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-thermometer"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Temp-max</span>
                  <h3 class="city-details__item-text">${Math.ceil(o-273.15)}°</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-temp-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-thermometer"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Temp-min</span>
                  <h3 class="city-details__item-text">${Math.ceil(n-273.15)}°</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-sun-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-sunrise"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Sunrise</span>
                  <h3 class="city-details__item-text">${m(g,c)}</h3>
                </div>
              </li>
              <li class="city-details__item">
                <div class="city-details__item-svg">
                  <svg class="city-details__item-sun-svg" width="16" height="16">
                    <use href="./svg/symbol-defs.svg#icon-sunset"></use>
                  </svg>
                </div>
                <div class="city-details__item-info">
                  <span class="city-details__item-name">Sunset</span>
                  <h3 class="city-details__item-text">${m(p,c)}</h3>
                </div>
              </li>
            </ul>
    `}function T(s,e,i,t){const a=s[0].main,l=v(a);return`<li  class="city-forcast__item">
                      <h3  class="city-forcast__title">${e}</h3>
                      <div class="city-forcast__weather">
                          <span>${a}</span>
                          <svg class="city-forcast__weather-svg" width="35" height="30">
                              <use href="./svg/symbol-defs.svg#${l}"></use>
                          </svg>
                      </div>
                      <div class="city-forcast__temps">
                        <p class="city-forcast__temp">${Math.ceil(t-273.15)}°</p><span>/</span>
                        <p class="city-forcast__temp">${Math.ceil(i-273.15)}°</p>
                      </div>
                </li>`}const S=new URLSearchParams(window.location.search),_=S.get("name");async function D(){try{const s=await y(_);if(console.log(s),!s||s.length===0)return;M.innerHTML=C(s)}catch(s){console.log(s),b.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{}}D();y(_).then(s=>{console.log(s)});$(_).then(s=>{const e={};s.forEach(i=>{const t=i.dt_txt.split(" ")[0];e[t]||(e[t]=[]),e[t].push(i)}),Object.entries(e).slice(0,5).forEach(([i,t])=>{const a=t.map(c=>c.main.temp),l=Math.min(...a),d=Math.max(...a),n=(t.find(c=>c.dt_txt.includes("12:00:00"))||t[0]).weather;x.insertAdjacentHTML("beforeend",T(n,i,l,d))})});
//# sourceMappingURL=commonHelpers.js.map
