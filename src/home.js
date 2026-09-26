// home.js
import img from './img/bisteca-crua.jpg';

export function createHomePage() {
  const container = document.createElement('div');
  container.classList.add('home-page');

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('home-text');

  const heading = document.createElement('h1');
  heading.id = 'title';
  heading.textContent = 'The Bisteca Restaurant';
  textWrapper.appendChild(heading);

  const tagline = document.createElement('p');
  tagline.classList.add('tagline');
  tagline.textContent = `Florence's Finest Cut, Since 1962`;
  textWrapper.appendChild(tagline);

  const descriptionText = document.createElement('p');
  descriptionText.classList.add('description-text');
  descriptionText.textContent = `For over sixty years, travelers from every corner of the world have found their way to our door, drawn by the smell of steak grilling over open flame in the old Florentine way. At The Bisteca Restaurant, our family's recipe for the perfect bistecca alla fiorentina has been passed down, generation to generation, unchanged and unhurried — just as tradition demands.`;
  textWrapper.appendChild(descriptionText);

  const bisteca = document.createElement('img');
  bisteca.classList.add('home-img');
  bisteca.src = img;
  bisteca.alt = 'Raw Florence Steak';

  container.appendChild(textWrapper);
  container.appendChild(bisteca);

  return container;
}
