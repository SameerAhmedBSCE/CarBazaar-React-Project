import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from '../CarListingPage/CarCard'; 
import { carData } from '../CarListingPage/CarData'; 

const DisplaycarsSection = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const latestCars = carData.slice(0, 4);
    setCars(latestCars);
  }, []);

  
  const handleShowMore = () => {
    navigate('/alllistings'); 
  };

  return (
    <div className="text-center p-6">
      
      <h1 className="text-3xl font-bold mb-4">Latest Cars</h1>
      <p className="text-lg mb-6">A friendly collection for you. You can have a look and choose the best for you.</p>

    
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[20px]">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

    
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-6 rounded hover:bg-blue-700 transition-colors"
        onClick={handleShowMore}
      >
        Show More
      </button>
    </div>
  );
};

export default DisplaycarsSection;
