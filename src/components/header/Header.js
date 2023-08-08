import React from 'react';
import '../header/HeaderStyle.css';
import Profile from '../assets/WhatsApp Image 2023-07-23 at 16.19.10.jpg';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import cv from '../assets/pdf/manojbharathi.pdf';
const Header = () => {
  return (
    <div>
      <div className='home' id='home'>
        <a href='#contact' className='scroll__down'>
          <hr />
          Scroll Down---->
        </a>

        <img src={Profile} alt='' className='profile' />
        <div className='name'>
          <h1 className='profile-name'> I Am Manojbharathi</h1>
          <h3 className='role'>React-Front-End developer</h3>
          <div className='button-items'>
            <a href={cv} download className='btn'>
              Download cv
            </a>

            <a href='#contact' className='contact-path'>
              Let'Talk
            </a>
          </div>
        </div>
        <div className='btn-section-header'>
          <button className='instagram-icon'>
            <a
              href='https://www.instagram.com/bharathi_kannimuthu/'
              className='icon'
            >
              <AiFillInstagram />
            </a>
          </button>
          <button className=' linked-icon'>
            <a
              href='https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114788_asid.150089839322_crid.656569072777_kw.www%20linkedin_d.c_tid.kwd-2246447582_n.g_mt.e_geo.9050527'
              className='icon'
            >
              <AiFillLinkedin />
            </a>
          </button>
          <button className=' git-icon'>
            <a href='https://github.com/Manojkbharathi' className='icon'>
              <AiFillGithub />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
