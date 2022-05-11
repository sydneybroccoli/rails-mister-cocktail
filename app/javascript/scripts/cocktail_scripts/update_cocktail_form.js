// DEFINE COMMON VARIABLES
var cocktailClasses = {
  'cocktail-img': 'cocktail_thumbnail_url',
  'cocktail-name': 'cocktail_name',
  'cocktail-glass': 'cocktail_glass',
  'cocktail-alcoholic': 'cocktail_alcoholic',
  'cocktail-instructions': 'cocktail_instructions'
};

export const updateCocktailForm = () => {
  // DEFINE VARIABLES
  const items = document.querySelectorAll('div.cocktail-item');
  const form = document.querySelector('form.edit_cocktail');
  const fitems = form.querySelectorAll('.form-group');
  console.log(fitems);

  // ADD FORM OPTIONS
  items.forEach( (item) => {
    // FOR THE COCKTAIL IMG, DISPLAY THE FORM ITEM BELOW
    if (item.classList.contains('cocktail-img')) {

      // FIND MATCHING FORM ITEM
      let tmp = Array.from(fitems).find( node => node.classList.contains("cocktail_thumbnail_url"));

      // APPEND ITEM HTML
      item.append(tmp.childNodes[1]);

    } else {
    // FOR ALL OTHER ITEMS, WE ARE 'REPLACING' THE ITEM WITH THE FORM ITEM
    updateCocktailForm_INSERT( item, fitems );

    }
  }) // END OF items.forEach
} // END OF updateCocktailForm

const updateCocktailForm_INSERT = ( item, fitems ) => {
  // DECLARE VARIABLES
  let str;

  // DETERMINE CLASS NAME OF ITEM
  item.classList.forEach( (c) => {
    if ( c in cocktailClasses ) {
      str = cocktailClasses[c];
    }
  })

  // FIND MATCHING FORM ITEM
  let fitem = Array.from( fitems ).find( node => node.classList.contains( str ) );

  // APPEND FORM ITEM, HIDE ITEM
  item.childNodes[1].classList.add('hidden');
  item.append(fitem);

} // END OF updateCocktailForm_INSERT

// export const updateCocktailForm_SUBMIT = ( btn, form ) => {

// } // END OF updateCocktailForm_SUBMIT

// export const updateCocktailForm_DELETE = ( btn, form ) => {

// } // END OF updateCocktailForm_DELETE

