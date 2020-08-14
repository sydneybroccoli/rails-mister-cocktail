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
  const editFormGroups = document.querySelectorAll('.form-group');

  options.forEach((option) => {

    // EVENT LISTENER TO DETERMINE WHICH ELEMENT SHOULD BE EDITED
    option.addEventListener( 'click', (event) => {

      // MAKE ALL FORM ELEMENTS HIDDEN
      editFormGroups.forEach( (group) => {
        // HIDE ALL LABELS
        if ( !group.childNodes[0].classList.contains('hidden') ) {
          group.childNodes[0].classList.add('hidden');
        }
        // HIDE ALL INPUTS
        if ( !group.childNodes[1].classList.contains('hidden') ) {
          group.childNodes[1].classList.add('hidden');
        }
      });

      // REMOVE .hidden FROM TARGET
      var cls = event.target.parentNode.classList;
      switch( true ) {
        case cls.contains('cocktail-img'):
          editFormGroups[1].childNodes[0].classList.remove('hidden');
          editFormGroups[1].childNodes[1].classList.remove('hidden');
          break;
        case cls.contains('cocktail-name'):
          editFormGroups[0].childNodes[0].classList.remove('hidden');
          editFormGroups[0].childNodes[1].classList.remove('hidden');
          break;
        case cls.contains('cocktail-alcholic'):
          editFormGroups[2].childNodes[0].classList.remove('hidden');
          editFormGroups[2].childNodes[1].classList.remove('hidden');
          break;
        case cls.contains('cocktail-glass'):
          editFormGroups[3].childNodes[0].classList.remove('hidden');
          editFormGroups[3].childNodes[1].classList.remove('hidden');
          break;
        case cls.contains('cocktail-instructions'):
          editFormGroups[4].childNodes[0].classList.remove('hidden');
          editFormGroups[4].childNodes[1].classList.remove('hidden');
          break;
        default:
          console.log('ERROR.  Unable to fetch appropriate form!');
      }
    }

    // OPEN MODAL
    modalAction(editModal, option);
  });
}
