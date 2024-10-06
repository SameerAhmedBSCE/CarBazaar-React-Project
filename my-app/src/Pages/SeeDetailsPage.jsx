import React from 'react';
import SeeDetails from '../Components/CarListingPage/Seedetails'; // Import the SeeDetails component

const SeeDetailsPage = () => {
  return (
    <div className="flex justify-center items-start p-4">
      <div className="w-full max-w-4xl">
        <SeeDetails />
      </div>
    </div>
  );
};

export default SeeDetailsPage;
