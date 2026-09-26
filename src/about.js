export function createAboutPage() {
  const container = document.createElement('div');
  container.classList.add('about-page');

  const heading = document.createElement('h1');
  heading.id = 'about-title';
  heading.textContent = 'A Florentine Tradition, A Brazilian Heart';

  const description = document.createElement('p');
  description.classList.add('about-description');
  description.textContent = `In 1962, a young Brazilian traveler fell in love with Florence — and with a plate of bistecca alla fiorentina he tasted in a small trattoria near the Arno. He stayed, learned the Florentine art of grilling over open flame, and opened The Bisteca Restaurant that same year, building its menu around two things he loved most: Florence's fire-charred steak, and a breaded filet from his own Brazilian home, layered with tomato sauce and melted cheese.`;

  container.appendChild(heading);
  container.appendChild(description);

  return container;
}
