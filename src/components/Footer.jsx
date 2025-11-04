// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/footer-logo.png"; // smaller logo
import FooterLarge from "../../assets/footer-large.png"; // large image

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] via-[#D94FD5] via-[#ECBFBF] to-[#5C24FF] p-8">
      <div className="max-w-[1516px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            src={FooterLogo}
            alt="Footer Logo"
            className="w-[197px] h-[72px] object-contain"
          />
          <img
            src={FooterLarge}
            alt="Footer Large"
            className="hidden md:block w-[1876px] h-[457px] object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-6 md:gap-12">
          <Link to="/" className="text-white font-medium hover:underline">Home</Link>
          <Link to="/about" className="text-white font-medium hover:underline">About</Link>
          <Link to="/services" className="text-white font-medium hover:underline">Services</Link>
          <Link to="/contact" className="text-white font-medium hover:underline">Contact</Link>
        </nav>
      </div>

    
    </footer>
  );
};

export default Footer;
