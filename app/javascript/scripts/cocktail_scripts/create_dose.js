import { modalAction } from '../modal.js';

export const createDoseModal = () => {
  const doseModal = document.querySelector('#new-dose-modal');
  const doseModalBtn = document.querySelector('#new-dose-modal-btn');
  modalAction(doseModal, doseModalBtn);
}
