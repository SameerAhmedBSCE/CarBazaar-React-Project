// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login"; // Import Login
import Register from "./Pages/Register"; // Import Register
import SellerDashboard from "./Pages/SellerDashboard"; // Import SellerDashboard

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
