import IMG1 from '../src/components/assets/react-todo.png';
import IMG2 from '../src/components/assets/review.png';
import IMG3 from '../src/components/assets/filter.png';

import IMG4 from '../src/components/assets/accordion.png';
import IMG5 from '../src/components/assets/rcp.png';
import food from './components/assets/food .png';
import com from './components/assets/com.png';
import api from './components/assets/api.png';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { BiBook } from 'react-icons/bi';
import { MdMiscellaneousServices } from 'react-icons/md';
export const pageLinks = [
  { id: 1, href: '#home', text: <AiFillHome /> },
  { id: 2, href: '#about', text: <RiContactsFill /> },
  { id: 3, href: '#skill', text: <BiBook /> },

  { id: 4, href: '#projects', text: <MdMiscellaneousServices /> },
  { id: 5, href: '#contact', text: <AiFillMessage /> },
];

export const details = [
  {
    desc: "I am a Front-End Developer, and I am hands-on in creating websites and web applications. With my skills in HTML, CSS,  JavaScript and react js.  In 2021, I graduated with a Bachelor's degree in Apparel Merchandising, which gave me valuable insights into consumer behavior and design aesthetics. Currently, I am further enhancing my expertise by pursuing a web development course, where I focus on building innovative web applications. I take pride in my ability to work effectively with both technical and non-technical teams. Continuously striving to improve my knowledge and skills, I stay updated with the latest industry trends and best practices. As a Front-End Developer, I find excitement in contributing to impactful projects that benefit both users and businesses.",
  },
];
export const projects = [
  {
    id: 1,
    image: IMG1,

    title: 'Todo-list',
    quote:
      'Explore my ToDo List web application showcasing full CRUD (Create, Read, Update, Delete) functionality. Experience a seamless user interface, enabling you to efficiently manage and organize your tasks with ease.',
    github: 'https://github.com/Manojkbharathi/react-todo',
    LiveDemo: 'https://dashing-buttercream-e95b71.netlify.app',
  },

  {
    id: 2,
    image: IMG5,
    title: 'Rock-Paper-Scissors',
    quote:
      " A  Rock-Paper-Scissors game built using React, where players can challenge the computer's randomly generated choices.",
    github: 'https://github.com/Manojkbharathi/rock-paper-scissors-react',
    LiveDemo: 'https://silver-truffle-b3e135.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,

    title: 'Filter',
    quote: `
This React menu card features "useState" hook for dynamic state management, allowing an interactive menu. Additionally, a "remove duplicates" function ensures a clean and organized menu by filtering out any duplicate items.`,
    github: 'https://github.com/Manojkbharathi/react-filter',
    LiveDemo: 'https://melodic-sunburst-a2dca3.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'React accordion',
    quote: `
In this React accordion component, when the user clicks the "+" button, it reveals the corresponding answer, allowing for an interactive and user-friendly way to access information.  `,
    github: 'https://github.com/Manojkbharathi/react-accordion',
    LiveDemo: 'https://starlit-jelly-5b6e03.netlify.app/',
  },
  {
    id: 5,
    image: IMG2,

    title: 'Reviews',
    quote:
      " Dynamic Reviews web application, powered by React's useState hook and a cleverly implemented random function. expand extra one line",
    github: 'https://github.com/Manojkbharathi/reviews',
    LiveDemo: 'https://tubular-dasik-4f435f.netlify.app',
  },
];

export const javaScript = {
  1: {
    id: 1,
    text: 'Form validation',
    git: 'https://github.com/Manojkbharathi/form-validation',
    live: ' https://manojkbharathi.github.io/form-validation/',
  },

  2: {
    id: 2,
    text: 'Memory game',
    git: 'https://github.com/Manojkbharathi/memory-game',
    live: 'https://manojkbharathi.github.io/memory-game/',
  },
  3: {
    id: 3,
    text: 'Expense tracker',
    git: 'https://github.com/Manojkbharathi/expense-tracker',
    live: 'https://manojkbharathi.github.io/expense-tracker/',
  },
  4: {
    id: 4,
    text: 'Drink water remainder',
    git: 'https://github.com/Manojkbharathi/drink-water-app',
    live: ' https://manojkbharathi.github.io/drink-water-app/',
  },
  5: {
    id: 5,
    text: 'Rock paper scissors game',
    git: 'https://github.com/Manojkbharathi/rock-paper-scissor',
    live: ' https://manojkbharathi.github.io/rock-paper-scissor/',
  },
  6: {
    id: 6,
    text: 'Product system - CRUD',
    git: 'https://github.com/Manojkbharathi/product-system',
    live: 'https://manojkbharathi.github.io/product-system/',
  },
  7: {
    id: 7,
    text: 'Find triangle type',
    git: 'https://github.com/Manojkbharathi/find-triangle-type',
    live: ' https://manojkbharathi.github.io/find-triangle-type/',
  },
  8: {
    id: 8,
    text: 'Exchange rate calculator',
    git: 'https://github.com/Manojkbharathi/exchange-rate-calculator',
    live: ' https://manojkbharathi.github.io/exchange-rate-calculator/',
  },
  9: {
    id: 9,
    text: 'Pig Game',
    git: 'https://github.com/Manojkbharathi/pig-game',
    live: ' https://manojkbharathi.github.io/pig-game/',
  },

  10: {
    id: 10,
    text: 'Seat booking',
    git: 'https://github.com/Manojkbharathi/seat-booking',
    live: 'https://manojkbharathi.github.io/seat-booking/ ',
  },
  11: {
    id: 11,
    text: 'Snake game',
    git: 'https://github.com/Manojkbharathi/snake-game',
    live: ' https://manojkbharathi.github.io/snake-game/',
  },
  12: {
    id: 12,
    text: 'Cash denominator',
    git: ' https://manojkbharathi.github.io/cash-denominator/',
    live: 'https://github.com/Manojkbharathi/cash-denominator',
  },
  13: {
    id: 13,
    text: 'Model window',
    git: 'https://github.com/Manojkbharathi/model',
    live: ' https://manojkbharathi.github.io/model/',
  },
  14: {
    id: 14,
    text: 'Captcha generator',
    git: 'https://manojkbharathi.github.io/captcha-generator/',
    live: 'https://github.com/Manojkbharathi/captcha-generator',
  },
  15: {
    id: 15,
    text: 'Kanban board',
    git: 'https://github.com/Manojkbharathi/kanban-board/settings/pages',
    live: 'https://manojkbharathi.github.io/kanban-board/',
  },
};
export const bigProjects = [
  {
    id: 1,
    title: 'Food delivery App',
    image: food,
    live: 'https://sparkly-maamoul-c2e2b6.netlify.app/',
    git: 'https://github.com/Manojkbharathi/food-delivery',
  },
  {
    id: 2,
    title: 'E-commerce App',
    image: com,
    live: 'https://silver-platypus-c72db6.netlify.app/',
    git: 'https://github.com/Manojkbharathi/e-commerce',
  },
  {
    id: 3,
    title: 'Weather APP',
    image: api,
    live: 'https://spiffy-beijinho-9d9942.netlify.app/',
    git: 'https://github.com/Manojkbharathi/weather-app',
  },
];
