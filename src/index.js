// index.js
import './styles.css';
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createAboutPage } from './about.js';

const content = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

content.appendChild(createHomePage());
console.log('Hi, this will be a great restaurant page');

const tabs = [
  { button: home, render: createHomePage },
  { button: menu, render: createMenuPage },
  { button: about, render: createAboutPage },
];

tabs.forEach(tab => {
  tab.button.addEventListener('click', e => {
    content.innerHTML = '';
  });
});
