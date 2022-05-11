import {
  updateCocktailModals,
  updateCocktailHoverable
} from './update_cocktail.js';
import {
  createDoseModal,
  updateIngredientsHidden
} from './update_ingredients.js';

import {
  updateCocktailForm
} from './update_cocktail_form.js';

export const editCocktailToggle = () => {
  // DECLARE VARIABLES
  const editBtn = document.querySelector('#edit-cocktail-btn');
  const saveBtn = document.querySelector('#save-cocktail-btn');
  const destroyBtn = document.querySelector('#destroy-cocktail-btn');


  // EVENT LISTENER ON EDIT BTN
  editBtn.addEventListener( 'click', (event) => {
      event.preventDefault();
      updateCocktailForm();

    // // DEFAULT ACTIONS
    // createDoseModal();
    // updateCocktailModals();
    // event.preventDefault();

    // // TOGGLE UPDATE COCKTAIL VISIBILITY
    // updateCocktailHoverable();

    // // TOGGLE UPDATE INGREDIENTS VISIBILITY
    // updateIngredientsHidden();

    // // TOGGLE EDIT BTN TEXT
    // if (editBtn.text === 'EDIT COCKTAIL') {
    //   editBtn.text = 'SAVE COCKTAIL';
    // } else {
    //   editBtn.text = 'EDIT COCKTAIL';
    // }

    // CHANGE THE BTNS
    editBtn.parentElement.classList.add('hidden');
    // saveBtn.parentElement.classList.remove('hidden');
    destroyBtn.parentElement.classList.remove('hidden');
  });
}
