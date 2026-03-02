import{g as u,s as p,c as f}from"./assets/actions-13d9e831.js";import{i as w}from"./assets/vendor-db25513e.js";function c(s){const i=new Date(s*1e3),t=e=>String(e).padStart(2,"0");return`${t(i.getHours())}:${t(i.getMinutes())}`}function $({name:s,coord:{lon:i,lat:t},main:{feels_like:e,humidity:d,pressure:_,temp:n,temp_max:m,temp_min:v},sys:{sunrise:h,sunset:o},weather:a,wind:{speed:r}}){const l=a[0].main,y=a[0].description,g=u(l);return`
            <div class="city-details__hero">
              <div class="city-details__hero-info">
                <div class="city-details__hero-up">
                  <h2 class="city-details__hero-name">${s}</h2>
                  <h1 class="city-details__hero-temp">
                    ${Math.ceil(n-273.15)}°
                  </h1>
                </div>
                <h3 class="city-details__hero-text">${y}</h3>
              </div>
              <div class="city-details__weather">
                <span>${l}</span>
                <svg width="35" height="30">
                  <use href="./svg/symbol-defs.svg#${g}"></use>
                </svg>
              </div>
              <div  class="city-details__coords"><span>${i.toFixed(1)}</span><span>${t.toFixed(1)}</span></div>
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
                  <h3 class="city-details__item-text">${d}%</h3>
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
                  <h3 class="city-details__item-text">${r}mph</h3>
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
                  <h3 class="city-details__item-text">${Math.ceil(e-273.15)}°</h3>
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
                  <h3 class="city-details__item-text">${_}hPa</h3>
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
                  <h3 class="city-details__item-text">${Math.ceil(m-273.15)}°</h3>
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
                  <h3 class="city-details__item-text">${Math.ceil(v-273.15)}°</h3>
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
                  <h3 class="city-details__item-text">${c(h)}</h3>
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
                  <h3 class="city-details__item-text">${c(o)}</h3>
                </div>
              </li>
            </ul>
    `}const x=new URLSearchParams(window.location.search),b=x.get("name");async function M(){try{const s=await p(b);if(console.log(s),!s||s.length===0)return;f.innerHTML=$(s)}catch(s){console.log(s),w.error({title:"Error",message:"❌Sorry, nothing was found for your request!"})}finally{}}M();
//# sourceMappingURL=commonHelpers.js.map
