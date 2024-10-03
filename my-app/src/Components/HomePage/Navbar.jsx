import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.png'; 

const websiteLogo = logo;

const Navbar = () => {

  const links = (
    <>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive 
            ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300" 
            : "single-nav-menu"
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/alllistings" 
        className={({ isActive }) => 
          isActive 
            ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300" 
            : "single-nav-menu"
        }
      >
        All Listings
      </NavLink>
      <NavLink 
        to="/sell-car" 
        className={({ isActive }) => 
          isActive 
            ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300" 
            : "single-nav-menu"
        }
      >
        Sell Your Car
      </NavLink>
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => 
          isActive 
            ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300" 
            : "single-nav-menu"
        }
      >
        Dashboard
      </NavLink>
      <NavLink 
        to="/login" 
        className={({ isActive }) => 
          isActive 
            ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300" 
            : "single-nav-menu"
        }
      >
        Login
      </NavLink>
    </>
  );

  return (
    <div className="container mx-auto z-[99] bg-white">
      <div className="navbar flex justify-between items-center p-4">
      <div className="navbar-start">
  <Link to="/">
    <img src={websiteLogo} alt="Website Logo" className="w-32 hover:scale-115 duration-600" />
  </Link>
  

</div>

        <div className="navbar-end">
          <div className="menu menu-horizontal px-1 text-base font-bold space-x-10">
            {links}
            
          </div>
        </div>
        
      </div>
      
      {/* <p className="text-center bg-red">Navbar is rendering!</p> */}
    </div>
    
  );
};

export default Navbar;
