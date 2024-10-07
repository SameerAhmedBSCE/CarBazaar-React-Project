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
    description: '',
    imageUrl: '',
    price: '',
    totalRun: '',
    fuelType: '',
    transmissionType: '',
    sellerName: '',
    sellerPhone: '',
    sellerPhoto: '',
  });
  const [imageModal, setImageModal] = useState({ imageUrl: '', title: '' });
  const navigate = useNavigate();

  useEffect(() => {
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
      description: '',
      imageUrl: '',
      price: '',
      totalRun: '',
      fuelType: '',
      transmissionType: '',
      sellerName: '',
      sellerPhone: '',
      sellerPhoto: '',
    });
  };

  const closeModal = () => setImageModal({ imageUrl: '', title: '' });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 rounded-xl">
      {/* Left Section */}
      <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 md:p-6 shadow-lg rounded-xl mb-6 md:mb-0">
        <h2 className="text-xl md:text-2xl mb-4">User Information</h2>
        {user && (
          <div className="mb-4 text-sm md:text-base">
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
      <div className="flex-grow p-4 md:p-6">
        <h2 className="text-xl md:text-2xl mb-4">My Listings</h2>

        {/* Listings Table */}
        <div className="overflow-auto rounded-lg shadow-lg">
          <table className="hidden sm:table min-w-full border-collapse border border-gray-300 bg-white text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Car Image</th>
                <th className="border border-gray-300 p-2">Car Title</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Total Run</th>
                <th className="border border-gray-300 p-2">Fuel Type</th>
                <th className="border border-gray-300 p-2">Transmission Type</th>
                <th className="border border-gray-300 p-2">Seller Name</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.length > 0 ? (
                listings.map((listing, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">
                      <img src={listing.imageUrl} alt={listing.title} className="h-16 w-16 md:h-20 md:w-20 object-cover cursor-pointer" onClick={() => setImageModal({ imageUrl: listing.imageUrl, title: listing.title })} />
                    </td>
                    <td className="border border-gray-300 p-2">{listing.title}</td>
                    <td className="border border-gray-300 p-2">${listing.price}</td>
                    <td className="border border-gray-300 p-2">{listing.totalRun}</td>
                    <td className="border border-gray-300 p-2">{listing.fuelType}</td>
                    <td className="border border-gray-300 p-2">{listing.transmissionType}</td>
                    <td className="border border-gray-300 p-2">{listing.sellerName}</td>
                    <td className="border border-gray-300 p-2 flex flex-col md:flex-row">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition mb-2 md:mb-0 md:mr-2" onClick={() => handleEdit(index)}>Edit</button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition" onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center p-4">No listings found.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Mobile Responsive List */}
          <div className="sm:hidden">
            {listings.length > 0 ? (
              listings.map((listing, index) => (
                <div key={index} className="flex flex-col bg-white mb-4 p-4 border border-gray-300 rounded-lg shadow-lg">
                  <img src={listing.imageUrl} alt={listing.title} className="h-32 w-full object-cover rounded-lg cursor-pointer mb-4" onClick={() => setImageModal({ imageUrl: listing.imageUrl, title: listing.title })} />
                  <div>
                    <p className="text-lg font-semibold">{listing.title}</p>
                    <p><strong>Price:</strong> ${listing.price}</p>
                    <p><strong>Total Run:</strong> {listing.totalRun}</p>
                    <p><strong>Fuel Type:</strong> {listing.fuelType}</p>
                    <p><strong>Transmission Type:</strong> {listing.transmissionType}</p>
                    <p><strong>Seller Name:</strong> {listing.sellerName}</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No listings found.</p>
            )}
          </div>
        </div>

        {/* Add/Edit Car Form (Only show if editIndex is not null) */}
        {editIndex !== null && (
          <form onSubmit={handleFormSubmit} className="mt-6 bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-lg mb-4">Edit Car Listing</h3>
            {Object.keys(formValues).map((key) => (
              <div key={key} className="mb-4">
                <label className="block mb-1" htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={formValues[key]}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
            ))}
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Update Listing</button>
          </form>
        )}

        {/* Image Modal */}
        {imageModal.imageUrl && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl mb-2">{imageModal.title}</h2>
              <img src={imageModal.imageUrl} alt={imageModal.title} className="max-w-full h-auto" />
              <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
