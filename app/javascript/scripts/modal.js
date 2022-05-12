export const modalAction = ( modal, open ) => {
  open.addEventListener( 'click', (event) => {
    // DECLARE VARIABLES
    // var close = modal.querySelector('.close-btn');
    var submit = modal.querySelector('.form-btn');

    // OPEN MODAL
    modal.style.display = 'block';

    // CLOSE MODAL OPTIONS
    if ( modal.style.display == 'block' ) {
      console.log('modal open');

      // // using 'X'
      // close.addEventListener( 'click', () => {
      //   modal.style.display = 'none';
      // }); // END OF close EVENT LISTENER

      // clicking outside modal-content
      window.addEventListener('click', (event) => {
        if ( event.target == modal ){
          modal.style.display = 'none';
        }
      }); // END OF window EVENT LISTENER

    } else {
      console.error('MODAL DID NOT OPEN');
    };

    // // SUBMIT FORM
    // submit.addEventListener( 'click', (event) => {
    //   event.preventDefault();
    // }); // END OF submit EVENT LISTENER

  
  }) // END OF open.addEventListener
} // END OF modalAction