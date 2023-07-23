import React from 'react';
import '../footer/Footer.css';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-section'>
        <h1 className='my-name'>Manoj bharathi</h1>
        <div className='btn-section'>
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

export default Footer;
