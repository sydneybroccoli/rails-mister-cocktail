// DEFINE COMMON VARIABLES
var cocktailClasses = {
  'cocktail-img': 'cocktail_thumbnail_url',
  'cocktail-name': 'cocktail_name',
  'cocktail-glass': 'cocktail_glass',
  'cocktail-alcoholic': 'cocktail_alcoholic',
  'cocktail-instructions': 'cocktail_instructions'
};

export const updateCocktail_BTN = () => {
  const update = document.querySelector('#update-cocktail-btn');
  const submit = document.querySelector('#ucf-submit');

  update.addEventListener( 'click', (event) => {
    submit.click();
  })
}