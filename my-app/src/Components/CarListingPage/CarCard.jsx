import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg w-72 m-5 shadow-md transition-transform transform hover:scale-105">
      <img src={car.image} alt={car.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{car.title}</h2>
        <p className="text-gray-600">{car.description}</p>
      </div>
    </div>
  );
};

export default CarCard;
