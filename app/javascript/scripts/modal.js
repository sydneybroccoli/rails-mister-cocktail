const modalAction = (modal, modalBtn) => {
  // DECLARE VARIABLES
  var closeBtn = document.querySelector('.close-btn');

  // EVENT LISTENER
  // OPEN MODAL
  modalBtn.addEventListener('click', (event)=> {
    modal.style.display = 'block';

    // CLOSE MODAL
    closeBtn.addEventListener('click', (event)=> {
      modal.style.display = 'none';

    });

    window.addEventListener('click', (event)=> {
      // if the user clicks outside of the modal, close the modal
      if(event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
};

// DOSE MODAL
export const doseModalAction = () => {
  const doseModal = document.getElementById('new-dose-modal-container').children[0];
  const doseModalBtn = document.getElementById('new-dose-modal-btn');
  modalAction(doseModal, doseModalBtn);
}
