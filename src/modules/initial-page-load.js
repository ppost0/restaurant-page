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


function createMain(id) {
  const main = document.createElement('main');
  main.setAttribute('id', id);
  return main;
}



function loadPage() {
  const content = document.getElementById('content');

  const header = createHeader('header', `Jim's Tavern`, 'The highest rated burgers this side of the Mississippi')


  const main = createMain('main');


  content.appendChild(header);
  content.appendChild(main);
}

export default loadPage;

