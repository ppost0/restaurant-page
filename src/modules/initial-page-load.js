









function loadPage() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const copy = document.createElement('h2');

  title.innerText = `Jim's Tavern`;
  copy.innerText = 'The highest rated burgers this side of the Mississippi';

  content.appendChild(title);
  content.appendChild(copy);
  console.log(title, copy);
}

export default loadPage;

