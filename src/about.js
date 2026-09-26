// about.js
export function createAboutPage() {
  const container = document.createElement('div');
  container.classList.add('about-page');

  const heading = document.createElement('h1');
  heading.id = 'about-title';
  heading.textContent = 'A Florentine Tradition, A Brazilian Heart';

  const description = document.createElement('p');
  description.classList.add('about-description');
  description.textContent = `In 1962, a young Brazilian traveler fell in love with Florence — and with a plate of bistecca alla fiorentina he tasted in a small trattoria near the Arno. He stayed, learned the Florentine art of grilling over open flame, and opened The Bisteca Restaurant that same year, building its menu around two things he loved most: Florence's fire-charred steak, and a breaded filet from his own Brazilian home, layered with tomato sauce and melted cheese.`;

  const mission = document.createElement('p');
  mission.classList.add('about-mission');
  mission.textContent = `More than sixty years later, his family still runs the kitchen. Today, having inherited his legacy, it's my wife's and my mission to carry it forward — welcoming every traveler to the best of Florentine cooking, always served with a touch of Brazil.`;

  container.appendChild(heading);
  container.appendChild(description);
  container.appendChild(mission);

  return container;
}
