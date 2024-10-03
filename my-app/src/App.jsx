// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SellerDashboard from "./Pages/SellerDashboard";
import Navbar from './Components/HomePage/Navbar';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import AllListingPage from "./Pages/AllListingPage";
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="flex flex-col">
        <Navbar 
          toggleMobileMenu={toggleMobileMenu} 
          user={user} 
          isMobileMenuOpen={isMobileMenuOpen} 
        />

        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<SellerDashboard />} />
            <Route path="/alllistings" element={<AllListingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
