import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { carData } from './CarData'; // Assuming this is where the car data is located
import { IoSpeedometerOutline } from 'react-icons/io5';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { SiAdguard } from 'react-icons/si';
import { FaUser, FaPhone } from 'react-icons/fa';

const SeeDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const selectedCar = carData.find(car => car.id === parseInt(id));
    if (selectedCar) setCar(selectedCar);
  }, [id]);

  if (!car) return <div>Loading...</div>; // Show loading while fetching data

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{car.title}</h1>
      <img src={car.image} alt={car.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-600 mb-2">{car.description}</p>
      <p className="text-lg font-semibold">Price: ${car.price}</p>
      <p className="text-gray-600">Total Run: {car.totalRun} km</p>
      <p className="text-gray-600">Fuel Type: {car.fuelType}</p>
      <p className="text-gray-600">Transmission: {car.transmissionType}</p>

      {/* Seller Information */}
      <div className="flex flex-col justify-center items-start gap-3 bg-[#f0f0f0] px-14 py-8 rounded w-full md:w-1/2">
        <img src={car.sellerPhoto} alt={`${car.sellerName}'s image`} className="w-[70px] h-[70px] rounded-[50%]" />
        <p className="text-lightBlack font-medium flex justify-start items-center gap-2 mt-3">
          <FaUser /> For sale by: <span className="font-semibold text-black">{car.sellerName}</span>
        </p>
        <p className="text-lightBlack font-medium flex justify-start items-center gap-2">
          <FaPhone /> Call seller: 
          <span>
            {
              showNumber === false ? (
                <button onClick={() => setShowNumber(true)} className="bg-[#17bbec] text-white px-2 py-1 rounded">Show number</button>
              ) : (
                <span className="font-semibold text-black">{car.sellerPhone}</span>
              )
            }
          </span>
        </p>
      </div>

      {/* Safety Tips */}
      <div className="flex flex-col justify-center items-start gap-3 bg-[#e8fffb] px-14 py-8 rounded w-full md:w-1/2 mt-5">
        <p className="text-[#0a800a] text-xl font-semibold flex justify-center items-center gap-2">
          <SiAdguard /> Safety tips
        </p>
        <ul className="list-disc pl-12 flex flex-col justify-start items-start gap-2 mt-2">
          <li>Meet in a safe and public place</li>
          <li>Don't pay in advance</li>
          <li>Try to keep things local</li>
          <li>Never give out financial information</li>
        </ul>
      </div>
    </div>
  );
};

export default SeeDetails;
