import { modalAction } from '../modal.js';


export const updateIngredients_MODAL = () => {
  const doseModal = document.querySelector('#new-dose-form');
  const doseModalBtn = document.querySelector('#new-dose-modal-btn');
  modalAction(doseModal, doseModalBtn);

  const submit = document.querySelector('#nif-submit');
  const ingredients = document.querySelector('.cocktail-ingredients');

  // CLOSE MODAL ON SUCCESS
  submit.addEventListener( 'click', () => {
    doseModal.style.display = 'none';
  
  // "REFRESH" INGREDIENTS LIST
  
  })

}

export const updateIngredients_DELETE = () => {
  const ingredientsBTNS = document.querySelectorAll('.delete-icon');

  ingredientsBTNS.forEach( (btn) => {
    btn.addEventListener( 'click', (event) => {
      btn.parentNode.classList.add('hidden');
    });
  });
}


export const updateIngredientsHidden = () => {
  // DECLARE VARIABLES
  const ingBtnAdd = document.querySelector('li#new-ingredient-item');
  const ingBtnRmList = document.querySelectorAll('div.delete-icon');

  // TOGGLE HIDDEN ON NEW INGREDIENT BUTTON
  ingBtnAdd.classList.toggle('hidden');

  // TOGGLE HIDDEN ON REMOVE INGREDIENT BUTTONS
  ingBtnRmList.forEach( element => {
    element.classList.toggle('hidden');
  });
}
