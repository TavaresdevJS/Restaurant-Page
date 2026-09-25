export function createAboutPage() {
  const container = document.createElement('div');
  container.classList.add('about-page');

  const heading = document.createElement('h1');
  heading.id = 'title';
  heading.textContent = 'About us';
  container.appendChild(heading);

  return container;
}
