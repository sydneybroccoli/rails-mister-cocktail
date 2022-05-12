import {
  updateCocktail_BTN
} from './update_cocktail.js'

import {
  updateIngredients_MODAL
} from './update_ingredients.js';

const updateIngredients = () => {
  // DECLARE VARIABLES
  const modal = document.querySelector('.modal#new-dose-modal');
  const modalBTN = document.querySelector('li#new-ingredient-item');

  updateIngredients_MODAL( modalBTN, modal );
}

export const updateCocktail = () => {
  console.log('running UPDATECOCKTAIL script');
  updateIngredients();
  updateCocktail_BTN();
}





