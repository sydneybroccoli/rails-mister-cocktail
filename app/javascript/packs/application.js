/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// IMPORT LIBRARIES
import 'jquery';
// import 'popper'; - NOT WORKING
// import 'turbolinks'; - NOT WORKING
import 'bootstrap';

// IMPORT SCRIPTS
// import { doseModalAction } from '../scripts/modal.js';
import { editCocktailToggle } from '../scripts/show_edit_toggle.js';

// EXECUTE SCRIPTS
  // DEVELOPMENT MODE?
if (process.env.NODE_ENV !== 'production') {
  console.log('LOOKS LIKE WE ARE IN DEVELOPMENT MODE...');
}

// RUN FUNCTIONS
const myInitCode = () => {
  const page = window.location.pathname;

  switch (true) {
    // ACTIONS FOR ROOT PAGE
    case (/^\/$/i).test(page):
      console.log('root scripts running...');
      break;
    // ACTIONS FOR INDEX PAGE
    case (/^\/cocktails$/i).test(page):
      console.log('index scripts running...');
      break;
    // ACTIONS FOR SHOW PAGES
    case (/^\/cocktails\/\d+$/i).test(page):
      console.log('show scripts running...');
      editCocktailToggle();
      break;
    default:
      console.log('no scripts for this page...');
  }
};

if (document.readyState !== 'loading' ){
  console.log('page was ready!');
  window.location.reload();  // super janky way of forcing the page to refresh to force JS to run every time
  // myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", (e) => {
    console.log('page was not ready...');
    myInitCode();
  });
}

