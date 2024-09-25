// src/Pages/SellerDashboard.jsx

import React from 'react';

const SellerDashboard = () => {
  // Sample data for listings
  const listings = [
    { id: 1, image: 'https://via.placeholder.com/150', title: 'Toyota Camry', price: '$20k', status: 'Active' },
    { id: 2, image: 'https://via.placeholder.com/150', title: 'Honda Accord', price: '$18k', status: 'Sold' },
    // Add more sample data as needed
  ];

  return (
    <div className="flex flex-col">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl">CarBazaar</h1>
        <div>
          <span>Welcome, [Seller's Name]</span>
          <button className="ml-4 bg-red-500 text-white px-3 py-1 rounded">Logout</button>
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-2xl mb-4">My Listings</h2>

        {/* Listings Table */}
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Car Image</th>
              <th className="border border-gray-300 p-2">Car Title</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id}>
                <td className="border border-gray-300 p-2">
                  <img src={listing.image} alt={listing.title} className="h-20 w-20 object-cover" />
                </td>
                <td className="border border-gray-300 p-2">{listing.title}</td>
                <td className="border border-gray-300 p-2">{listing.price}</td>
                <td className="border border-gray-300 p-2">{listing.status}</td>
                <td className="border border-gray-300 p-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded ml-2">Sold</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add New Car Button */}
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Add New Car</button>
      </main>
    </div>
  );
};

export default SellerDashboard;
