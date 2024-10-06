import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SellerDashboard from "./Pages/SellerDashboard";
import Navbar from './Components/HomePage/Navbar';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import AllListingPage from "./Pages/AllListingPage";
import SellYourCar from './Pages/SellYourCar'; 
import SeeDetailsPage from './Pages/SeeDetailsPage';
import Footer from './Components/Footer'; 
import CarCard from './Components/CarListingPage/CarCard';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar 
          toggleMobileMenu={toggleMobileMenu} 
          user={user} 
          onLogout={handleLogout} 
        />

        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<SellerDashboard />} />
            <Route path="/alllistings" element={<AllListingPage />} />
            <Route path="/sell-car" element={<SellYourCar />} /> {/* Add this line */}
            <Route path="/details/:id" element={<SeeDetailsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
