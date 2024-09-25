// src/Components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/">CarBazaar</Link>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">All Listings</Link></li>
        
        {isLoggedIn ? (
          <>
            <li><Link to="/sell-car">Sell Your Car</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li> {/* ye tabhi dikhe gi jb user loged in hoga*/}
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#00000',
    color: '#fff'
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
  }
};

export default Navbar;
