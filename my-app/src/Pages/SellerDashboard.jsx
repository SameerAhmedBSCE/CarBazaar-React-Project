// src/Pages/SellerDashboard.jsx

import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    title: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    condition: '',
    description: '',
    imageUrl: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Get the current user information
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser({
        name: "Okasha",
        email: currentUser.email,
        phone: "0341253678",
        address: "gh 20",
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // Retrieve car listings from local storage
  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('carListings')) || [];
    setListings(storedListings);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleDelete = (index) => {
    const updatedListings = listings.filter((_, i) => i !== index);
    setListings(updatedListings);
    localStorage.setItem('carListings', JSON.stringify(updatedListings));
  };

  const handleSold = (index) => {
    const updatedListings = listings.map((listing, i) =>
      i === index ? { ...listing, status: 'Sold' } : listing
    );
    setListings(updatedListings);
    localStorage.setItem('carListings', JSON.stringify(updatedListings));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormValues(listings[index]);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedListings = listings.map((listing, i) =>
      i === editIndex ? formValues : listing
    );
    setListings(updatedListings);
    localStorage.setItem('carListings', JSON.stringify(updatedListings));
    setEditIndex(null);
    setFormValues({
      title: '',
      brand: '',
      model: '',
      year: '',
      price: '',
      condition: '',
      description: '',
      imageUrl: ''
    });
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
                <th className="border border-gray-300 p-2">Brand</th>
                <th className="border border-gray-300 p-2">Model</th>
                <th className="border border-gray-300 p-2">Year</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Condition</th>
                <th className="border border-gray-300 p-2">Description</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.length > 0 ? (
                listings.map((listing, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">
                      <img src={listing.imageUrl} alt={listing.title} className="h-20 w-20 object-cover" />
                    </td>
                    <td className="border border-gray-300 p-2">{listing.title}</td>
                    <td className="border border-gray-300 p-2">{listing.brand}</td>
                    <td className="border border-gray-300 p-2">{listing.model}</td>
                    <td className="border border-gray-300 p-2">{listing.year}</td>
                    <td className="border border-gray-300 p-2">{listing.price}</td>
                    <td className="border border-gray-300 p-2">{listing.condition}</td>
                    <td className="border border-gray-300 p-2">{listing.description}</td>
                    <td className="border border-gray-300 p-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition" onClick={() => handleEdit(index)}>Edit</button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600 transition" onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center p-4">No listings found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add New Car Button */}
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition" onClick={() => setEditIndex(-1)}>
          Add New Car
        </button>

        {/* Edit / Add Car Form */}
        {editIndex !== null && (
          <form onSubmit={handleFormSubmit} className="mt-4 bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-bold">{editIndex === -1 ? 'Add New Car' : 'Edit Car'}</h3>
            <input type="text" name="title" placeholder="Title" value={formValues.title} onChange={handleFormChange} className="block w-full border border-gray-300 rounded mb-2 p-2" required />
            <input type="text" name="brand" placeholder="Brand" value={formValues.brand} onChange={handleFormChange} className="block w-full border border-gray-300 rounded mb-2 p-2" required />
            <input type="text" name="model" placeholder="Model" value={formValues.model} onChange={handleFormChange} className="block w-full border border-gray-300 rounded mb-2 p-2" required />
            <input type="number" name="year" placeholder="Year" value={formValues.year} onChange={handleFormChange} className="block w-full border border-gray-300 rounded mb-2 p-2" required />
            <input type="text" name="price" placeholder="Price" value={formValues.price} onChange={handleFormChange} className="block w-full border border-gray-300 rounded mb-2 p-2" required />
            <input type="text" name="condition" placeholder="Condition" value={formValues.condition} onChange={handleFormChange} className="block w-full border border-gray-300 rounded mb-2 p-2" required />
            <textarea name="description" placeholder="Description" value={formValues.description} onChange={handleFormChange} className="block w-full border border-gray-300 rounded mb-2 p-2" required />
            <input type="text" name="imageUrl" placeholder="Image URL" value={formValues.imageUrl} onChange={handleFormChange} className="block w-full border border-gray-300 rounded mb-2 p-2" required />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">{editIndex === -1 ? 'Add Car' : 'Update Car'}</button>
            <button type="button" className="ml-2 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition" onClick={() => setEditIndex(null)}>Cancel</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
