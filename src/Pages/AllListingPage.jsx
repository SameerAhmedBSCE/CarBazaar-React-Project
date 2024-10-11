import React, { useState, useEffect } from 'react';
import CarCard from '../Components/CarListingPage/CarCard';
import { carData as initialCarData } from '../Components/CarListingPage/CarData';

const AllListing = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Get any data stored in localStorage
    const localStorageCars = JSON.parse(localStorage.getItem('carListings')) || [];

    // Combine the initial car data with data from localStorage
    const combinedCars = [...initialCarData, ...localStorageCars];

    // Remove duplicates based on car ID
    const uniqueCars = combinedCars.reduce((acc, current) => {
      const duplicate = acc.find(car => car.id === current.id);
      if (!duplicate) {
        acc.push(current);
      }
      return acc;
    }, []);

    setCars(uniqueCars);
  }, []);

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-8">All Car Listings</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-[20px]">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AllListing;
