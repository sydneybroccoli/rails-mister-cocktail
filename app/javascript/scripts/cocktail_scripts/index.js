import { updateCocktailHoverable, updateCocktailModals } from './update_cocktail.js';
import { createDoseModal } from './create_dose.js';

export const editCocktailToggle = () => {
  // DEFAULT ACTIONS
  createDoseModal();
  updateCocktailModals();

  // DECLARE VARIABLES
  const editBtn = document.querySelector('#edit-cocktail-btn');
  const ingBtnAdd = document.querySelector('li#new-ingredient-item');
  const ingBtnRmList = document.querySelectorAll('div.delete-icon');

  // EVENT LISTENER ON EDIT BTN
  editBtn.addEventListener( 'click', (event) => {
    // PREVENT REFRESH
    event.preventDefault();

    // TOGGLE EDIT COCKTAIL
    updateCocktailHoverable();

    // TOGGLE HIDDEN ON NEW INGREDIENT BUTTON
    ingBtnAdd.classList.toggle('hidden');

    // TOGGLE HIDDEN ON REMOVE INGREDIENT BUTTONS
    ingBtnRmList.forEach( element => {
      element.classList.toggle('hidden');
    });

    // TOGGLE EDIT BTN TEXT
    if (editBtn.text === 'EDIT COCKTAIL') {
      editBtn.text = 'SAVE COCKTAIL';
    } else {
      editBtn.text = 'EDIT COCKTAIL';
    }
  });
}
