import React from 'react';
import Navbar from '../Components/Navbar'; 

const HomePage = () => {
  const isLoggedIn = false;

  return (
    <>
      
      <Navbar isLoggedIn={isLoggedIn} />
      
      <div >
        <h1>Welcome to CarBazaar</h1>
        <p>Find your next vehicle from thousands of listings, or sell your own car with ease!</p>
        
        
      </div>
    </>
  );
};



export default HomePage;
