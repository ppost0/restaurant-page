import item1 from '/Users/patrick/repos/restaurant-page/src/assets/imgs/item1.jpg';
import item2 from '/Users/patrick/repos/restaurant-page/src/assets/imgs/item2.jpg';
import item3 from '/Users/patrick/repos/restaurant-page/src/assets/imgs/item3.jpg';
import item4 from '/Users/patrick/repos/restaurant-page/src/assets/imgs/item4.jpg';
import item5 from '/Users/patrick/repos/restaurant-page/src/assets/imgs/item5.jpeg';
import item6 from '/Users/patrick/repos/restaurant-page/src/assets/imgs/item6.jpg';
import item7 from '/Users/patrick/repos/restaurant-page/src/assets/imgs/item7.jpeg';




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
    createItem(item1, 'The Standard American', '$8.99', 'American Cheeseburger'),
    createItem(item2, 'The Tex Mex', '$9.99', 'Tex-Mex Cheeseburger'),
    createItem(item3, 'The Bacon Beast', '$10.99', 'Bacon Cheeseburger'),
    createItem(item4, 'The Cowboy', '$9.99', 'Onion Ring Cheeseburger'),
    createItem(item5, 'The Hawaiian', '$8.99', 'Cheeseburger with Pineapple'),
    createItem(item6, 'The Vegetarian', '$8.99', 'Veggie Burger'),
    createItem(item7, 'The Holy Guacamole', '$9.99', 'Guacamole Cheeseburger')
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