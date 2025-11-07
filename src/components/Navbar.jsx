import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ul } from "framer-motion/client";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <div className="flex justify-between items-center text-white p-2 bg-linear-to-r from-[#0B0119] via-pink-500  to-[#000113]">
      <ul className="flex">
        <li className="text-white m-2">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white m-2">
          <Link to="/About">About</Link>
        </li>
        <li className="text-white m-2">
          <Link to="/Explore">Explore</Link>
        </li>
        <li className="text-white m-2">
          <Link to="/NewsLetter">NewsLetter</Link>
        </li>
        <li className="text-white m-2">
          <Link to="/Dashboard">Dashboard</Link>
        </li>

      </ul>
      
      <div>
        {user ? (
          <>
            <span style={{ marginRight: "1rem" }}>Hello, {user.email}</span>
            <button
              onClick={logout}
              style={{
                background: "#dc3545",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/Login" className="text-white p-2">Login</Link>
          
          
        )}
      </div>
    </div>
  );
}

export default Navbar;
