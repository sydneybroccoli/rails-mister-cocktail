import { updateCocktailModals, updateCocktailHoverable } from './update_cocktail.js';
import { createDoseModal, updateIngredientsHidden } from './update_ingredients.js';

export const editCocktailToggle = () => {
  // DEFAULT ACTIONS
  createDoseModal();
  updateCocktailModals();

  // DECLARE VARIABLES
  const editBtn = document.querySelector('#edit-cocktail-btn');

  // EVENT LISTENER ON EDIT BTN
  editBtn.addEventListener( 'click', (event) => {
    // PREVENT REFRESH
    event.preventDefault();

    // TOGGLE EDIT COCKTAIL
    updateCocktailHoverable();

    // TOGGLE UPDATE INGREDIENTS
    updateIngredientsHidden();

    // TOGGLE EDIT BTN TEXT
    if (editBtn.text === 'EDIT COCKTAIL') {
      editBtn.text = 'SAVE COCKTAIL';
    } else {
      editBtn.text = 'EDIT COCKTAIL';
    }
  });
}
