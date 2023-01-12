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

function createAbout(text) {
  const about = document.createElement('h3');
  about.textContent = text;
  return about;
}



function loadPage() {
  const content = document.getElementById('content');

  const header = createHeader('header', `Jim's Tavern`, 'The highest rated burgers this side of the Mississippi')

  const about = createAbout(`Jim's Tavern is the perfect place. Enjoy the ambiance of any one of our three distinct floors including our American Biergarten. Fully staffed with some of the city's most knowledgeable and friendly servers and bartenders. The elegance and charm of this 19th century converted townhouse is the perfect blend of comfort and class. Known for our eclectic craft beer selection, Jim's boasts 34 draft lines that are continuously changing with new and exciting choices.`);

  const main = createMain('main');


  content.appendChild(header);
  content.appendChild(main);
  main.appendChild(about);
}

export default loadPage;

