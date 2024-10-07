import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.png';

const Navbar = ({ user, onLogout }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      {user && ( 
        <>
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
          <button 
            onClick={onLogout} 
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300"
          >
            Logout
          </button>
        </>
      )}
      {!user && (
        <>
          <NavLink 
            to="/register" 
            className={({ isActive }) => 
              isActive 
                ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300" 
                : "single-nav-menu"
            }
          >
            Register
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => 
              isActive 
                ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-green-600 duration-300" 
                : "single-nav-menu"
            }
          >
            Login
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="container mx-auto z-[99] bg-white">
      <div className="navbar flex justify-between items-center p-4">
        <div className="navbar-start">
          <Link to="/">
            <img src={logo} alt="Website Logo" className="w-32 hover:scale-115 duration-600" />
          </Link>
        </div>

        <div className="navbar-end flex items-center">
          {/* Hamburger icon for small screens */}
          <div className="block lg:hidden">
            <button 
              className="p-2 text-gray-600 focus:outline-none" 
              onClick={toggleMenu}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Navbar links - only render for larger screens */}
          <div className="hidden lg:block menu menu-horizontal px-1 text-base font-bold space-x-10">
            {links}
          </div>
        </div>
      </div>

      {/* Mobile Menu - only show if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="lg:hidden p-4 bg-gray-200 rounded-md">
          <div className="flex flex-col space-y-2">
            {links}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
