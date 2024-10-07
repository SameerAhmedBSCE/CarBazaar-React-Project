import React from 'react';
import Banner from '../Components/HomePage/Banner'
import UserCards from '../Components/HomePage/UserCards'
import AboutContent from '../Components/HomePage/AboutContent'
import DisplayCars from '../Components/HomePage/DisplayCars';
const HomePage = () => {
  return (
    <div>
      <Banner/>
      <UserCards/>
      <AboutContent/>
      <DisplayCars/>
    </div>
  );
};

export default HomePage;
