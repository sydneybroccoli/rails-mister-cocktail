export const modalAction = (modal, modalBtn) => {
  // DECLARE VARIABLES
  var closeBtn = document.querySelector('.close-btn');

  // EVENT LISTENER
  // OPEN MODAL
  modalBtn.addEventListener('click', (event)=> {
    modal.style.display = 'block';

    // CLOSE MODAL
    // the close button within the modal
    closeBtn.addEventListener('click', (event)=> {
      modal.style.display = 'none';
    });

    // if the user clicks outside of the modal, close the modal
    window.addEventListener('click', (event)=> {
      if(event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
};
