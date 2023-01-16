function createHeader(id, titleText, copyText) {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  const copy = document.createElement('h2');

  title.textContent = titleText;
  copy.textContent = copyText;
  header.setAttribute('id', id);

  header.appendChild(title);
  header.appendChild(copy);

  return header;
}

function createBtn(id, text) {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  btn.textContent = text;
  btn.classList.add('tab');
  return btn;
}

function createNav(id) {
  const nav = document.createElement('nav');
  nav.setAttribute('id', id);

  const homeBtn = createBtn('home', 'Home');
  const menuBtn = createBtn('menu', 'Menu');
  const contactBtn = createBtn('contact', 'Contact');

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function createMain(id) {
  const main = document.createElement('main');
  main.setAttribute('id', id);
  return main;
}


function loadPage() {
  const content = document.getElementById('content');

  const header = createHeader('header', `Jim's Tavern`, 'The highest rated burgers this side of the Mississippi')
  const nav = createNav('nav');
  const main = createMain('main');


  content.appendChild(header);
  content.appendChild(nav);
  content.appendChild(main);
}

export default loadPage;

// need to add contact tab
// need to add menu tab
// need to add home/about tab