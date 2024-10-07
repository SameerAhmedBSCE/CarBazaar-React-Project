import React from 'react';
import Banner from '../Components/HomePage/Banner'
import UserCards from '../Components/HomePage/UserCards'
import AboutContent from '../Components/HomePage/AboutContent'
import DisplaycarsSection from '../Components/HomePage/DisplaycarsSection';
const HomePage = () => {
  return (
    <div>
      <Banner/>
      <UserCards/>
      <AboutContent/>
      <DisplaycarsSection/>
    </div>
  );
};

export default HomePage;
