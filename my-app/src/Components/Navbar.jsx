// src/Components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { auth } from '../firebaseConfig'; // Import auth from your firebaseConfig
import { signOut } from 'firebase/auth'; // Import signOut from Firebase

const Navbar = ({ toggleMobileMenu, user, isMobileMenuOpen }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log('User logged out successfully.');
    } catch (error) {
      console.error('Error logging out:', error); // Handle any errors
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-800 text-white flex justify-between items-center p-4 shadow-lg">
      <h2 className="text-xl">CarBazaar</h2>

      {/* Show links on large screens */}
      <div className="hidden lg:flex space-x-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Home</Link>
        {!user && (
          <>
            <Link to="/register" className="hover:bg-gray-700 p-2 rounded">Register</Link>
            <Link to="/login" className="hover:bg-gray-700 p-2 rounded">Login</Link>
          </>
        )}
        {user && (
          <>
            <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
            <button onClick={handleLogout} className="hover:bg-gray-700 p-2 rounded">
              Logout
            </button>
          </>
        )}
      </div>

      {/* Show the hamburger menu icon only on small screens */}
      <button onClick={toggleMobileMenu} className="lg:hidden">
        <FaBars className="text-white text-2xl" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white p-4 flex flex-col absolute top-16 left-0 right-0">
          <Link to="/" className="block text-white hover:bg-gray-700 p-2 rounded">Home</Link>
          {!user && (
            <>
              <Link to="/register" className="block text-white hover:bg-gray-700 p-2 rounded">Register</Link>
              <Link to="/login" className="block text-white hover:bg-gray-700 p-2 rounded">Login</Link>
            </>
          )}
          {user && (
            <>
              <Link to="/dashboard" className="block text-white hover:bg-gray-700 p-2 rounded">Dashboard</Link>
              <button onClick={handleLogout} className="block text-white hover:bg-gray-700 p-2 rounded">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
