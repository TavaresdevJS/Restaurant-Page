// home.js
import img from './img/bisteca-crua.jpg';

export function createHomePage() {
  const container = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = 'The Bisteca Restaurant';
  container.appendChild(heading);

  const bisteca = document.createElement('img');
  bisteca.classList.add('home-img');
  bisteca.src = img;
  bisteca.alt = 'Raw Florence Steak';
  container.appendChild(bisteca);

  return container;
}
