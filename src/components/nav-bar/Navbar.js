import React from 'react';
import './NavbarStyle.css';
import { FaBars } from 'react-icons/fa';

import { pageLinks } from '../../data';
const Navbar = ({ isShowNavbar, closeNavbar, showNavbar }) => {
  return (
    <div className='nav'>
      <button className='navbar-toggle' type='button' onClick={showNavbar}>
        <FaBars />
      </button>
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
