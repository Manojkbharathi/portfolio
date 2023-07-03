import '../project-section/Project.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React from 'react';
import { people } from '../../data';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='projects-container' id='projects'>
      <h2 className='portfolio-title'>
        P<span className='text-color'>o</span>rtf
        <span className='text-color'>o</span>li
        <span className='text-color'>o</span>
      </h2>

      <Slider {...settings}>
        {people.map(({ image, quote, github, LiveDemo, title }) => (
          <div className='slide'>
            <div className='each'>
              <h2 className='project-title'>{title}</h2>
              <img className='slide-image' src={image} alt='' />
              <p className='project-desc'>{quote}</p>
              <div className='btn-container'>
                <a href={LiveDemo}>
                  <button className='live-link'>LiveDemo</button>
                </a>
                <a href={github}>
                  <button className='live-link'>Github</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SimpleSlider;
