import { useState } from 'react';

import React, { Fragment } from 'react';
import Header from './components/header/Header';
import Details from './components/about-user/Details';
import Navbar from './components/nav-bar/Navbar';
import Skills from './components/skills/Skill';

import Contacts from './components/contact/Contacts';
import Footer from './components/footer/Footer';
import SimpleSlider from './components/project-section/Projects';
const App = () => {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const showNavbar = () => {
    setIsShowNavbar(true);
  };
  const closeNavbar = () => {
    setIsShowNavbar(false);
  };
  return (
    <>
      <Header showNavbar={showNavbar} />
      <Navbar isShowNavbar={isShowNavbar} closeNavbar={closeNavbar} />
      <Details />
      <Skills />
      <SimpleSlider />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
