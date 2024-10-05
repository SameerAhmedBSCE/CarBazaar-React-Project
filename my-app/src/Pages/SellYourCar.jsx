import React, { useState } from 'react';

const SellYourCar = () => {
  const [carDetails, setCarDetails] = useState({
    title: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    condition: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store car details in local storage
    const existingListings = JSON.parse(localStorage.getItem('carListings')) || [];
    existingListings.push(carDetails);
    localStorage.setItem('carListings', JSON.stringify(existingListings));
    
    // Reset form after submission
    setCarDetails({
      title: '',
      brand: '',
      model: '',
      year: '',
      price: '',
      condition: '',
      description: '',
      imageUrl: ''
    });

    alert("Car details submitted successfully!");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Sell Your Car</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            name="title" 
            value={carDetails.title} 
            onChange={handleChange} 
            placeholder="Car Title" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
          />
          <input 
            type="text" 
            name="brand" 
            value={carDetails.brand} 
            onChange={handleChange} 
            placeholder="Car Brand" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
          />
          <input 
            type="text" 
            name="model" 
            value={carDetails.model} 
            onChange={handleChange} 
            placeholder="Car Model" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
          />
          <input 
            type="number" 
            name="year" 
            value={carDetails.year} 
            onChange={handleChange} 
            placeholder="Year" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
          />
          <input 
            type="number" 
            name="price" 
            value={carDetails.price} 
            onChange={handleChange} 
            placeholder="Price" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
          />
          <select 
            name="condition" 
            value={carDetails.condition} 
            onChange={handleChange} 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
          <textarea 
            name="description" 
            value={carDetails.description} 
            onChange={handleChange} 
            placeholder="Description" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
          />
          <input 
            type="url" 
            name="imageUrl" 
            value={carDetails.imageUrl} 
            onChange={handleChange} 
            placeholder="Image URL" 
            required 
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
          />
        </div>
        <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellYourCar;
