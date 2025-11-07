import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/footer-logo.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/explore', label: 'Explore' },
  { to: '/Partners', label: 'Partners' },
  { to: '/NewsLetter', label: 'NewsLetter' },
];

export default function Navbar() {
  return (
    <header className="w-full bg-[#0B0119] text-white py-4 px-10 flex items-center justify-between">
      
      {/* Left Logo */}
      <NavLink to="/" className="flex items-center pl-10">
        <img src={logo} alt="BULLISH Logo" className="h-10 w-auto" />
      </NavLink>


      <div className="flex flex-col items-end space-y-1 pl-10">

        {/* Nav Links */}
        <nav className="flex items-end space-x-10 text-sm font-medium pl-10 ">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-purple-400' : 'hover:text-purple-300'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        

       
        <div className="text-xs text-gray-300">
          © www.bullish.web3 - All rights reserved
        </div>

      </div>
    </header>
  );
}
