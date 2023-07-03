import React from 'react';
import '../header/HeaderStyle.css';
import Profile from '../assets/20230626_092109.png';
import { FaBars } from 'react-icons/fa';

const Header = ({ showNavbar }) => {
  return (
    <div>
      <button className='navbar-toggle' type='button' onClick={showNavbar}>
        <FaBars />
      </button>
      <h2 className='head'>{'<Hello world/>'}</h2>
      <div className='home' id='home'>
        <img src={Profile} alt='' className='profile' />
        <div className='name'>
          <h1> I Am Manojbharathi</h1>
          <h3>Full stack Web developer</h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
