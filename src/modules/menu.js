function createItem(src, name, price, alt) {
  const item = document.createElement('div');
  const img = document.createElement('img');
  const itemName = document.createElement('div');
  const itemPrice = document.createElement('div');
  const itemText = document.createElement('div');
  itemText.classList.add('item-text');

  itemName.textContent = name;
  itemPrice.textContent = price;

  item.classList.add('food');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);


  itemText.appendChild(itemName);
  itemText.appendChild(itemPrice);
  item.appendChild(img);
  item.appendChild(itemText);


  return item;
}





function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const items = [
    createItem('/Users/patrick/repos/restaurant-page/src/assets/imgs/item1.jpg', 'The Standard American', '$8.99', 'American Cheeseburger'),
    createItem('/Users/patrick/repos/restaurant-page/src/assets/imgs/item2.jpg',
    'The Tex Mex', '$9.99', 'Tex-Mex Cheeseburger'),



  ]

  items.forEach((item) => {menu.appendChild(item)});


  return menu;
}





function loadMenu() {
  const main = document.getElementById('main');
  const menu = createMenu();
  main.textContent = '';
  main.appendChild(menu);
}


export default loadMenu;