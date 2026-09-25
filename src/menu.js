// menu.js
export function createMenuPage() {
  const container = document.createElement('div');
  container.classList.add('menu-page');

  const heading = document.createElement('h1');
  heading.id = 'title';
  heading.textContent = 'Our Menu';
  container.appendChild(heading);
}
