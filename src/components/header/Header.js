import React from 'react';
import '../header/HeaderStyle.css';
import Profile from '../assets/20230626_092109.png';

const Header = () => {
  return (
    <div>
      <h1>
        <span>M</span>
        <span>A</span>
        <span>N</span>
        <span>O</span>
      </h1>
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
