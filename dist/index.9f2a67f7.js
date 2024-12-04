!function(e,r,t,n,s){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[n]&&i[n],o=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(r,t){if(!o[r]){if(!e[r]){var s="function"==typeof i[n]&&i[n];if(!t&&s)return s(r,!0);if(a)return a(r,!0);if(c&&"string"==typeof r)return c(r);var u=Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}f.resolve=function(t){var n=e[r][1][t];return null!=n?n:t},f.cache={};var d=o[r]=new l.Module(r);e[r][0].call(d.exports,f,d,d.exports,i)}return o[r].exports;function f(e){var r=f.resolve(e);return!1===r?{}:l(r)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=o,l.parent=a,l.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i[n]}}),i[n]=l;for(var u=0;u<r.length;u++)l(r[u]);if(t){var d=l(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}}({apQec:[function(e,r,t,n){e("e15fcc3a68b83236").register(e("e74dde5a0f6f1f2b").getBundleURL("hwbR1"),JSON.parse('["hwbR1","index.9f2a67f7.js","jS16G","icons.c5b0f01c.svg"]'))},{e15fcc3a68b83236:"fyJL2",e74dde5a0f6f1f2b:"c7Tr5"}],fyJL2:[function(e,r,t,n){var s=new Map;r.exports.register=function(e,r){for(var t=0;t<r.length-1;t+=2)s.set(r[t],{baseUrl:e,path:r[t+1]})},r.exports.resolve=function(e){var r=s.get(e);if(null==r)throw Error("Could not resolve bundle with id "+e);return new URL(r.path,r.baseUrl).toString()}},{}],c7Tr5:[function(e,r,t,n){var s={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t.getBundleURL=function(e){var r=s[e];return r||(r=function(){try{throw Error()}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),s[e]=r),r},t.getBaseURL=i,t.getOrigin=function(e){var r=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!r)throw Error("Origin not found");return r[0]}},{}],"2nzDi":[function(e,r,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js"),i=e("./model.js"),a=e("./views/recipeView.js"),o=s.interopDefault(a),c=e("./views/searchView.js"),l=s.interopDefault(c),u=e("./views/ResultView.js"),d=s.interopDefault(u),f=e("./views/paginationView.js"),p=s.interopDefault(f);let h=async function(){try{let e=window.location.hash.slice(1);if(!e)return;(0,o.default).renderSpinner(),await i.loadRecipe(e),(0,o.default).render(i.state.recipe)}catch(e){(0,o.default).renderError(),console.error(e)}},g=async function(){try{let e=(0,l.default).getQuery();if(!e)return;(0,d.default).renderSpinner(),await i.loadSearchResults(e),(0,d.default).render((0,i.getSearchResultsPage)()),(0,p.default).render(i.state.search)}catch(e){(0,d.default).renderError(),console.error(e)}};(0,o.default).addHandlerRender(h),(0,l.default).addHandlerSearch(g),(0,p.default).addHandlerClick(function(e){(0,d.default).render((0,i.getSearchResultsPage)(e)),(0,p.default).render(i.state.search)})},{"./model.js":"5XrL7","./views/recipeView.js":"gcMxR","./views/searchView.js":"6L6eH","./views/ResultView.js":"lgHJv","./views/paginationView.js":"3vGkl","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"5XrL7":[function(e,r,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(t),s.export(t,"state",()=>o),s.export(t,"getSearchResultsPage",()=>c),s.export(t,"loadRecipe",()=>l),s.export(t,"loadSearchResults",()=>u);var i=e("./config.js"),a=e("./helpers.js");let o={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:i.RES_PER_PAGE}},c=function(e=o.search.page){o.search.page=e;let r=(e-1)*o.search.resultsPerPage,t=e*o.search.resultsPerPage;return o.search.results.slice(r,t)},l=async function(e){try{console.log(`Fetching recipe for ID: ${e}`);let r=await (0,a.getJSON)(`${i.API_URL}${e}`);console.log(r);let{recipe:t}=r.data;o.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookTime:t.cooking_time,ingredients:t.ingredients}}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},u=async function(e){try{o.search.query=e;let r=await (0,a.getJSON)(`${i.API_URL}?search=${e}`);console.log(r),o.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}};u()},{"./config.js":"cTPit","./helpers.js":"rOFoc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cTPit:[function(e,r,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(t),s.export(t,"API_URL",()=>i),s.export(t,"TIMEOUT_SEC",()=>a),s.export(t,"RES_PER_PAGE",()=>o);let i="https://forkify-api.herokuapp.com/api/v2/recipes/",a=5,o=10},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,r,t,n){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,r){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||Object.prototype.hasOwnProperty.call(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[t]}})}),r},t.export=function(e,r,t){Object.defineProperty(e,r,{enumerable:!0,get:t})}},{}],rOFoc:[function(e,r,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(t),s.export(t,"getJSON",()=>i),e("./config.js");let i=async function(e){try{let r=await fetch(e);if(!r.ok)throw Error(`${r.status}: ${r.statusText}`);return await r.json()}catch(e){throw e}}},{"./config.js":"cTPit","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gcMxR:[function(e,r,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(t);var i=e("../../img/icons.svg"),a=s.interopDefault(i),o=e("fractional"),c=e("./View.js"),l=s.interopDefault(c);class u extends l.default{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Operation successful!";render(e){this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${a.default}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
      <div class="error">
      <div>
        <svg>
          <use href="${a.default}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
      <div class="message">
        <div>
          <svg>
            <use href="${a.default}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${a.default}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${a.default}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${a.default}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${a.default}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="recipe__user-generated">
          <svg>
            <use href="${a.default}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg>
            <use href="${a.default}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(e=>`
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${a.default}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${e.quantity?new(0,o.Fraction)(e.quantity).toString():""}</div>
                <div class="recipe__description">
                  ${e.description}
                </div>
              </li>
            `).join("")}
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${a.default}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}}t.default=new u},{"../../img/icons.svg":"e2pXi",fractional:"ioWMr","./View.js":"lslfl","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],e2pXi:[function(e,r,t,n){r.exports=e("894b9c417fcd96c1").getBundleURL("hwbR1")+"icons.c5b0f01c.svg"},{"894b9c417fcd96c1":"c7Tr5"}],ioWMr:[function(e,r,t,n){var s,i;(Fraction=function(e,r){if(void 0!==e&&r)"number"==typeof e&&"number"==typeof r?(this.numerator=e,this.denominator=r):"string"==typeof e&&"string"==typeof r&&(this.numerator=parseInt(e),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,n,s=num.split(" ");if(s[0]&&(t=s[0]),s[1]&&(n=s[1]),t%1==0&&n&&n.match("/"))return new Fraction(t).add(new Fraction(n));if(!t||n)return;if("string"==typeof t&&t.match("/")){var i=t.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,t=this.denominator,n=[];return 0!=e&&n.push(e),0!=r&&n.push((0===e?r:Math.abs(r))+"/"+t),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var r=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator+=e.numerator,r.normalize()},Fraction.prototype.subtract=function(e){var r=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator-=e.numerator,r.normalize()},Fraction.prototype.multiply=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.numerator,r.denominator*=e.denominator;else{if("number"!=typeof e)return r.multiply(new Fraction(e));r.numerator*=e}return r.normalize()},Fraction.prototype.divide=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.denominator,r.denominator*=e.numerator;else{if("number"!=typeof e)return r.divide(new Fraction(e));r.denominator*=e}return r.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var r=this.clone().normalize(),e=e.clone().normalize();return r.numerator===e.numerator&&r.denominator===e.denominator},Fraction.prototype.normalize=(s=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},i=function(e,r){if(!r)return Math.round(e);var t=Math.pow(10,r);return Math.round(e*t)/t},function(){if(s(this.denominator)){var e=i(this.denominator,9),r=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*r),this.numerator*=r}if(s(this.numerator)){var e=i(this.numerator,9),r=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*r),this.denominator*=r}var t=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=t,this.denominator/=t,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,r){var t=[],n=Fraction.primeFactors(e),s=Fraction.primeFactors(r);return(n.forEach(function(e){var r=s.indexOf(e);r>=0&&(t.push(e),s.splice(r,1))}),0===t.length)?1:function(){var e,r=t[0];for(e=1;e<t.length;e++)r*=t[e];return r}()},Fraction.primeFactors=function(e){for(var r=Math.abs(e),t=[],n=2;n*n<=r;)r%n==0?(t.push(n),r/=n):n++;return 1!=r&&t.push(r),t},r.exports.Fraction=Fraction},{}],lslfl:[function(e,r,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(t);var i=e("../../img/icons.svg"),a=s.interopDefault(i);t.default=class{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${a.default}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${a.default}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
      <div class="message">
        <div>
          <svg>
            <use href="${a.default}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}},{"../../img/icons.svg":"e2pXi","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6L6eH":[function(e,r,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t);class s{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#r(),e}#r(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(r){r.preventDefault(),e()})}}t.default=new s},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],lgHJv:[function(e,r,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(t);var i=e("./View.js"),a=s.interopDefault(i);class o extends a.default{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>
    `}}t.default=new o},{"./View.js":"lslfl","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3vGkl":[function(e,r,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(t);var i=e("./View"),a=s.interopDefault(i),o=e("../../img/icons.svg"),c=s.interopDefault(o);class l extends a.default{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(r){let t=r.target.closest(".btn--inline");t&&e(+t.dataset.goto)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&r>1?`
            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-right"></use>
          </svg>
        </button>
            `:e===r&&r>1?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href ="${c.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        `:e<r?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button  data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-right"></use>
          </svg>
        </button>
            `:""}}t.default=new l},{"./View":"lslfl","../../img/icons.svg":"e2pXi","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["apQec","2nzDi"],"2nzDi","parcelRequire94c2");
//# sourceMappingURL=index.9f2a67f7.js.map
