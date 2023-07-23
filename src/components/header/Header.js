import React from 'react';
import '../header/HeaderStyle.css';
import Profile from '../assets/WhatsApp Image 2023-07-23 at 16.19.10.jpg';
import cv from '../assets/pdf/manojbharathi.pdf';
const Header = () => {
  return (
    <div>
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
