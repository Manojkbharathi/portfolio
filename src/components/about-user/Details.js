import React from 'react';
import '../about-user/DetailsStyle.css';
import { details } from '../../data';
import assets from '../assets/Screenshot 2023-06-16 222402.png';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-content'>
        <h1>About Myself</h1>
        {details.map(({ desc }) => (
          <h3 className='desc'>{desc}</h3>
        ))}
      </div>
      <div>
        <img src={assets} alt='' className='quote-img' />
      </div>
    </div>
  );
};

export default About;
