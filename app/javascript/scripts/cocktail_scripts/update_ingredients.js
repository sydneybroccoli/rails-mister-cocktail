import { modalAction } from '../modal.js';


export const updateIngredients_MODAL = () => {
  var doseModal = document.querySelector('#new-dose-form');
  var doseModalBtn = document.querySelector('#new-dose-modal-btn');
  modalAction(doseModal, doseModalBtn);

  var submit = document.querySelector('#nif-submit');
  var ingredients = document.querySelector('.cocktail-ingredients');

  // CLOSE MODAL ON SUCCESS
  submit.addEventListener( 'click', () => {
    doseModal.style.display = 'none';
  
  })
}
