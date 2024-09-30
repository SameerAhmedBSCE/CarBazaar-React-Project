// src/Pages/SellerDashboard.jsx

import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Import your Firebase auth
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Sample data for listings
  const listings = [
    { id: 1, image: 'https://via.placeholder.com/150', title: 'Toyota Camry', price: '$20k', status: 'Active' },
    { id: 2, image: 'https://via.placeholder.com/150', title: 'Honda Accord', price: '$18k', status: 'Sold' },
  ];

  useEffect(() => {
    // Get the current user information
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser({
        name: "Okasha", // You can fetch this data from your database
        email: currentUser.email,
        phone: "0341253678", // Example phone, fetch from your database
        address: "gh 20", // Example address, fetch from your database
      });
    } else {
      navigate('/login'); // Redirect to login if user is not authenticated
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log("User logged out");
      navigate('/login'); // Redirect to login after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 rounded-xl">
      {/* Left Section */}
      <div className="w-1/4 bg-gray-800 text-white p-6 shadow-lg rounded-xl">
        <h2 className="text-2xl mb-4">User Information</h2>
        {user && (
          <div className="mb-4">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        )}
        <button 
          onClick={handleLogout} 
          className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-grow p-6">
        <h2 className="text-2xl mb-4">My Listings</h2>

        {/* Listings Table */}
        <div className="overflow-auto rounded-lg shadow-lg">
          <table className="min-w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Car Image</th>
                <th className="border border-gray-300 p-2">Car Title</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">
                    <img src={listing.image} alt={listing.title} className="h-20 w-20 object-cover" />
                  </td>
                  <td className="border border-gray-300 p-2">{listing.title}</td>
                  <td className="border border-gray-300 p-2">{listing.price}</td>
                  <td className="border border-gray-300 p-2">{listing.status}</td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600 transition">Delete</button>
                    <button className="bg-green-500 text-white px-2 py-1 rounded ml-2 hover:bg-green-600 transition">Sold</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Car Button */}
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Add New Car
        </button>
      </div>
    </div>
  );
};

export default SellerDashboard;
