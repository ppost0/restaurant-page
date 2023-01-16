import './assets/styles/normalize.css';
import './assets/styles/style.css';
import loadPage from './modules/initial-page-load.js';
import loadAbout from './modules/about.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';

function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadAbout);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);

}

function init() {
  loadPage();
  loadAbout();
  addNavEvents();
}


init();