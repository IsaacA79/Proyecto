import icons from '../img/icons.svg'


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

function renderSpiner(parentEl){
  const markup=`
    <div>
      <svg>
       <use href="${icons}#icon-loader"></use>
       </svg>
    </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}



async function showRecipe() {
  try {
          renderSpiner(recipeContainer);
          // a. Llamada a la API con fetch y await
          const resp = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');    
          // b. Convertimos la respuesta a JSON
          const data = await resp.json();    
          // c. Enviamos a la consola los resultados
          console.log(resp);
          console.log(data);
          let recipe = data.data.recipe;
          // j. Crear la variable `recipe` y desestructurar
          recipe = {
                  id: recipe.id,
                  title: recipe.title,
                  publisher: recipe.publisher,
                  sourceUrl: recipe.source_url,
                  image: recipe.image_url,
                  servings: recipe.servings,
                  cookTime: recipe.cooking_time,
                  ingredients: recipe.ingredients,
          };

    recipeContainer.innerHTML='';
    displayRecipe(recipe);
    }catch(error){
      alert('Error: ' +error);
    }
 }

 
function displayRecipe(recipe) {
  const markup = `
    <div class="recipe">
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img">
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="img/icons.svg#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="img/icons.svg#icon-bookmark"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map(ing => `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity || ''}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit || ''}</span>
                ${ing.description}
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
  `;

  recipeContainer.insertAdjacentHTML('afterbegin', markup);
}

showRecipe();