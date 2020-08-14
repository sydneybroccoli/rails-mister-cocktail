import { modalAction } from '../modal.js';

// DEFINE COMMON VARIABLES
const options = document.querySelectorAll('.cocktail-img,.cocktail-name,.cocktail-alcoholic,.cocktail-glass,.cocktail-instructions');


export const updateCocktailHoverable = () => {
  // DEFINE VARIABLES

  // ITERATE THROUGH EACH OPTION
  options.forEach((option) => {
    // TOGGLE HOVERABILITY CLASS
    option.classList.toggle('hoverable');
  });
}

export const updateCocktailModals = () => {
  // DEFINE VARIABLES
  const editModal = document.querySelector('#edit-cocktail-modal');

  // CREATE MODAL ON SELECTION OF ANY OPTION
  options.forEach((option) => {
    modalAction(editModal, option);
  });
}
