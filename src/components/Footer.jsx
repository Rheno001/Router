import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/footer-logo.png";
import footerLarge from "../assets/footer-large.png";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden py-10 md:py-14"
      style={{
        background: "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 25.6%, #D94FD5 52.1%, #ECBFBF 74.1%, #5C24FF 100%)",
      }}
    >
      {/* Background Large Image */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
        <img
          src={footerLarge}
          alt="Bullish Background"
          className="w-[1876px] max-w-none opacity-40 scale-100 md:scale-95 lg:scale-100"
        />
      </div>

      {/* Footer Content */}
      <div className="relative max-w-[1516px] w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={footerLogo}
            alt="Bullish Logo"
            className="w-[197px] h-auto md:h-[72px] object-contain"
          />
          <h1 className="hidden md:block text-transparent text-3xl font-bold bg-clip-text"
            style={{
              background:
                "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 25.6%, #D94FD5 52.1%, #ECBFBF 74.1%, #5C24FF 100%)",
            }}
          >
            BULLISH
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 text-white font-medium text-sm md:text-base z-10">
          <Link to="/" className="hover:opacity-70 transition">Home</Link>
          <Link to="/about" className="hover:opacity-70 transition">About</Link>
          <Link to="/explore" className="hover:opacity-70 transition">Explore</Link>
          <Link to="/create" className="hover:opacity-70 transition">Create</Link>
          <Link to="/newsletter" className="hover:opacity-70 transition">NewsLetter</Link>
          <Link to="/faq" className="hover:opacity-70 transition">FAQs</Link>
        </nav>
      </div>

      {/* Bottom Text */}
      <div className="relative text-center text-white text-sm mt-6 opacity-90">
        © www.bullish.web3 – All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
