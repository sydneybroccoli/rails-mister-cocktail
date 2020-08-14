import {
  updateCocktailModals,
  updateCocktailHoverable
} from './update_cocktail.js';
import {
  createDoseModal,
  updateIngredientsHidden
} from './update_ingredients.js';

export const editCocktailToggle = () => {
  // DECLARE VARIABLES
  const editBtn = document.querySelector('#edit-cocktail-btn');

  // EVENT LISTENER ON EDIT BTN
  editBtn.addEventListener( 'click', (event) => {
    // DEFAULT ACTIONS
    createDoseModal();
    updateCocktailModals();
    event.preventDefault();

    // TOGGLE UPDATE COCKTAIL VISIBILITY
    updateCocktailHoverable();

    // TOGGLE UPDATE INGREDIENTS VISIBILITY
    updateIngredientsHidden();

    // TOGGLE EDIT BTN TEXT
    if (editBtn.text === 'EDIT COCKTAIL') {
      editBtn.text = 'SAVE COCKTAIL';
    } else {
      editBtn.text = 'EDIT COCKTAIL';
    }
  });
}
