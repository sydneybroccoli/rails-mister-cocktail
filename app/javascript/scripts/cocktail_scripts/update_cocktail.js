import { modalAction } from '../modal.js';

export const updateCocktailHoverable = () => {
  const options = document.querySelectorAll('.cocktail-img,.cocktail-name,.cocktail-alcoholic,.cocktail-glass,.cocktail-instructions');

  // ITERATE THROUGH EACH OPTION
  options.forEach((option) => {
    // TOGGLE HOVERABILITY CLASS
    option.classList.toggle('hoverable');
  });
}

export const updateCocktailModals = () => {
  // DEFINE VARIABLES
  const editOptions = document.querySelectorAll('.cocktail-img,.cocktail-name,.cocktail-alcoholic,.cocktail-glass,.cocktail-instructions');
  const editModal = document.querySelector('#edit-cocktail-modal');

  // CREATE MODAL ON SELECTION OF ANY OPTION
  editOptions.forEach((option) => {
    modalAction(editModal, option);
  });
}
