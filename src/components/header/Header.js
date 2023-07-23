import React from 'react';
import '../header/HeaderStyle.css';
import Profile from '../assets/20230626_092109.png';
import cv from '../assets/pdf/manojbharathi.pdf';
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
        <a href='#contact' className='scroll__down'>
          <hr />
          Scroll Down
        </a>

        <img src={Profile} alt='' className='profile' />
        <div className='name'>
          <h1 className='profile-name'> I Am Manojbharathi</h1>
          <h3 className='role'>Full stack Web developer</h3>
          <div className='button-items'>
            <a href={cv} download className='btn'>
              Download cv
            </a>

            <a href='#contact' className='contact-path'>
              Let'Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
