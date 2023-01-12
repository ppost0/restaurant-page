import './assets/styles/normalize.css';
import './assets/styles/style.css';
import loadPage from './modules/initial-page-load.js'
import loadAbout from './modules/about.js'



function init() {
  loadPage();
  loadAbout();
}


init();