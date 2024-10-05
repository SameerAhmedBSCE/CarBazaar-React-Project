import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SellerDashboard from "./Pages/SellerDashboard";
import Navbar from './Components/HomePage/Navbar';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
import AllListingPage from "./Pages/AllListingPage";
import Footer from './Components/Footer'; // Import the Footer component

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      setUser(null); // Update user state
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
      <div className="flex flex-col min-h-screen"> {/* Make the container take at least the full height of the screen */}
        <Navbar 
          toggleMobileMenu={toggleMobileMenu} 
          user={user} 
          onLogout={handleLogout} // Pass the handleLogout function
        />

        <main className="flex-grow p-4"> {/* Allow main to grow and fill space */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<SellerDashboard />} />
            <Route path="/alllistings" element={<AllListingPage />} />
          </Routes>
        </main>

        <Footer /> {/* Include the Footer here */}
      </div>
    </Router>
  );
};

export default App;
