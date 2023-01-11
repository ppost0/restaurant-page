









function loadPage() {
  const content = document.getElementById('content');
  const background = document.createElement('img');
  const title = document.createElement('h1');
  const copy = document.createElement('h2');

  background.setAttribute('id', 'background');
  background.src = '../src/assets/imgs/food.jpg';
  title.innerText = `Jim's Tavern`;
  copy.innerText = 'The highest rated burgers this side of the Mississippi';

  // content.appendChild(background);
  content.appendChild(title);
  content.appendChild(copy);
}

export default loadPage;

