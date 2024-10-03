import React from 'react';
import { IoSpeedometerOutline } from 'react-icons/io5';  
import { BsFuelPumpDiesel } from 'react-icons/bs'; 
import { TbManualGearbox } from 'react-icons/tb';  
import { GoArrowUpRight } from 'react-icons/go';  
import { Link } from 'react-router-dom';  

const CarCard = ({ car }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg w-72 m-5 shadow-md transition-transform transform hover:scale-105">
      {/* Car Image */}
      <img src={car.image} alt={car.title} className="w-full h-48 object-cover rounded-t-lg" />
      
      {/* Car Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{car.title}</h2>
        <p className="text-gray-600">{car.description}</p>
      </div>

      {/* Additional Car Details */}
      <div className='p-3 w-full flex justify-between items-center border-b-[1px] border-gray-300'>
        {/* Total kilometers */}
        <div className='flex flex-col justify-center items-center gap-1'>
          <IoSpeedometerOutline className='text-xl text-gray-600' />
          <p className='text-gray-600 font-medium text-sm'>{car.totalRun} km</p>
        </div>

        {/* Fuel type */}
        <div className='flex flex-col justify-center items-center gap-1'>
          <BsFuelPumpDiesel className='text-xl text-gray-600' />
          <p className='text-gray-600 capitalize font-medium text-sm'>{car.fuelType}</p>
        </div>

        {/* Transmission type */}
        <div className='flex flex-col justify-center items-center gap-1'>
          <TbManualGearbox className='text-xl text-gray-600' />
          <p className='text-gray-600 font-medium text-sm'>{car.transmissionType}</p>
        </div>
      </div>

      {/* Price and "See Details" button */}
      <div className='p-3 w-full flex justify-between items-center'>
        <p className='text-xl font-bold text-black'>${car.price}</p>
        <Link to={`/details/${car.id}`}>
          <button className='text-blue-500 font-semibold text-lg hover:text-black duration-500 flex justify-center items-center gap-1'>
            See Details <GoArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
