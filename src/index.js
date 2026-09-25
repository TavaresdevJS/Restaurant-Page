// index.js
import './styles.css';
import { createHomePage } from './home.js';

const content = document.getElementById('content');
content.appendChild(createHomePage());
console.log('Hi, this will be a great restaurant page');
