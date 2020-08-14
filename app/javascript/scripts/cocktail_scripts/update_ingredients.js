import { modalAction } from '../modal.js';

export const createDoseModal = () => {
  const doseModal = document.querySelector('#new-dose-modal');
  const doseModalBtn = document.querySelector('#new-dose-modal-btn');
  modalAction(doseModal, doseModalBtn);
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
