import {
  updateCocktail_BTN
} from './update_cocktail.js'

import {
  updateIngredients_MODAL,
  updateIngredients_DELETE
} from './update_ingredients.js';

updateCocktail_BTN();

const updateIngredients = () => {
  // DECLARE VARIABLES
  const modal = document.querySelector('.modal#new-dose-modal');
  const modalBTN = document.querySelector('li#new-ingredient-item');

  updateIngredients_MODAL( modalBTN, modal );
  //updateIngredients_DELETE();
}

updateIngredients();

// import {
//   updateCocktailForm
// } from './update_cocktail_form.js';

// export const editCocktailToggle = () => {
//   // DECLARE VARIABLES
//   const editBtn = document.querySelector('#edit-cocktail-btn');
//   const saveBtn = document.querySelector('#save-cocktail-btn');
//   const destroyBtn = document.querySelector('#destroy-cocktail-btn');


//   // EVENT LISTENER ON EDIT BTN
//   editBtn.addEventListener( 'click', (event) => {
//       // updateCocktailForm();

//     // // DEFAULT ACTIONS
//     // createDoseModal();
//     // updateCocktailModals();
//     // event.preventDefault();

//     // // TOGGLE UPDATE INGREDIENTS VISIBILITY
//     // updateIngredientsHidden();

//     // CHANGE THE BTNS
//     editBtn.parentElement.classList.add('hidden');
//     // saveBtn.parentElement.classList.remove('hidden');
//     destroyBtn.parentElement.classList.remove('hidden');
//   });
// }