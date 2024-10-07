import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { carData } from './CarData'; 
import { FaUser, FaPhone } from 'react-icons/fa';
import { SiAdguard } from 'react-icons/si';
import { IoSpeedometerOutline } from 'react-icons/io5';  
import { BsFuelPumpDiesel } from 'react-icons/bs'; 
import { TbManualGearbox } from 'react-icons/tb';  
import { GoArrowUpRight } from 'react-icons/go';  

const SeeDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const selectedCar = carData.find(car => car.id === parseInt(id));
    if (selectedCar) setCar(selectedCar);
  }, [id]);

  if (!car) return <div>Loading...</div>; 

  
  const addingDate = car.addingDate || '6/10/2024';
  const condition = car.condition || 'New';

  return (
    <div className="container mx-auto p-5 flex flex-col justify-center items-center gap-10 font-body">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-14 w-full lg:w-6/6 mt-[80px]">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center flex-col">
          <img src={car.image} alt={car.title} className="w-full h-64 object-cover mb-4" />
          <div className="flex justify-center items-center gap-3 mt-3">
            <p className="bg-gray text-black px-3 py-1 rounded-[4px] w-fit">{car.brand}</p>
            <p className="bg-gray text-black px-3 py-1 rounded-[4px] w-fit">{car.type}</p>
          </div>
          <p className="text-black font-medium mt-8 text-left w-full">
            Description <br /> <span className="text-lightBlack font-medium mt-8 ">{car.description}</span>
          </p>
        </div>

        {/* Product Description */}
        <div className="w-fit flex flex-col justify-start items-start gap-1">
          <p className="text-[14px] text-lightBlack">Posted on: {addingDate}</p>
          <h3 className="text-2xl font-bold text-black">{car.title}</h3>
          <p className="text-xl font-bold text-sub">${car.price}</p>
          <p className="mt-3 text-lightBlack font-medium">Condition: <span className="capitalize text-black font-medium">{condition}</span></p>
          
          {/* Updated fields with icons */}
          <p className="text-lightBlack font-medium flex items-center gap-2">
            <IoSpeedometerOutline /> Total run: <span className="capitalize text-black font-medium">{car.totalRun} km</span>
          </p>
          <p className="text-lightBlack font-medium flex items-center gap-2">
            <BsFuelPumpDiesel /> Fuel type: <span className="capitalize text-black font-medium">{car.fuelType}</span>
          </p>
          <p className="text-lightBlack font-medium flex items-center gap-2">
            <TbManualGearbox /> Transmission type: <span className="capitalize text-black font-medium">{car.transmissionType}</span>
          </p>
        </div>
      </div>

      {/* Seller Information + Safety Precaution */}
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-5 lg:gap-10 mt-14">
        {/* Seller Information */}
        <div className="flex flex-col justify-center items-start gap-3 bg-[#f0f0f0] px-14 py-8 rounded w-full md:w-1/2">
          <img src={car.sellerPhoto} alt={`${car.sellerName}'s image`} className="w-[70px] h-[70px] rounded-[50%]" />
          <p className="text-lightBlack font-medium flex justify-start items-center gap-2 mt-3">
            <FaUser /> For sale by: <span className="font-semibold text-black">{car.sellerName}</span>
          </p>

          <p className="text-lightBlack font-medium flex justify-start items-center gap-2">
            <FaPhone /> Call seller: 
            {
              showNumber ? <span className="font-semibold text-black">{car.sellerPhone}</span> :
              <button onClick={() => setShowNumber(true)} className="bg-[#17bbec] text-white px-2 py-1 rounded">Show number</button>
            }
          </p>
        </div>

        {/* Safety Tips */}
        <div className="flex flex-col justify-center items-start gap-3 bg-[#e8fffb] px-14 py-8 rounded w-full md:w-1/2">
          <p className="text-[#0a800a] text-xl font-semibold flex justify-center items-center gap-2">
            <SiAdguard /> Safety tips
          </p>
          <ul className="list-disc pl-12 flex flex-col justify-start items-start gap-2 mt-2">
            <li>Meet in safe and public place</li>
            <li>Don't pay in advance</li>
            <li>Try to keep things local</li>
            <li>Never give out financial information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
