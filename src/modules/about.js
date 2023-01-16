function createAboutSection(text) {
  const aboutSection = document.createElement('section');
  const aboutTitle = document.createElement('div');
  const about = document.createElement('h3');

  aboutTitle.textContent = 'About';
  aboutTitle.classList.add('about-title');
  about.textContent = text;

  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(about);

  return aboutSection;
}


function loadAbout() {
  const main = document.getElementById('main');
  const about = createAboutSection(`Jim's Tavern is the perfect place. Enjoy the ambiance of any one of our three distinct floors including our American Biergarten. Fully staffed with some of the city's most knowledgeable and friendly servers and bartenders. The elegance and charm of this 19th century converted townhouse is the perfect blend of comfort and class. Known for our eclectic craft beer selection, Jim's boasts 34 draft lines that are continuously changing with new and exciting choices.`);
  main.textContent = '';
  main.appendChild(about);
}



export default loadAbout