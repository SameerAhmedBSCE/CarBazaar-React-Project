// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import SellerDashboard from "./Pages/SellerDashboard"; // Import Seller Dashboard

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
        {/* Add routes for Login and Register when implemented */}
      </Routes>
    </Router>
  );
};

export default App;
