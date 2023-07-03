import React from 'react';
import './NavbarStyle.css';

import { pageLinks } from '../../data';
const Navbar = ({ isShowNavbar, closeNavbar }) => {
  return (
    <div>
      <aside className='nav-container'>
        <ul className={`${isShowNavbar ? 'navbar show-navbar' : 'navbar'}`}>
          <button className='close-btn' onClick={closeNavbar}>
            ⌦
          </button>

          {/* using implicit */}
          {pageLinks.map(({ id, href, text }) => (
            <li key={id} className='nav-list'>
              <a href={href} className='nav-link' onClick={closeNavbar}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
