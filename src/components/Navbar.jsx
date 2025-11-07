import { NavLink } from "react-router-dom";
import Logo from "../assets/Bullish.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-linear-to-r from-[#10051A] via-[#5A007A] to-[#0A061B]
      py-4 px-10 rounded-b-3xl border-b border-fuchsia-500 flex items-center justify-between ">

      {/* Logo */}
      <div className="flex items-center gap-3 pl-10">
        <img src={Logo} alt="Bullish Logo" className="w-32 h-auto object-contain" />
        
      </div>
      

      {/* Nav Links */}
      <ul className="flex items-center gap-10 text-white pr-10">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/About" },
          { name: "Explore", path: "/Explore" },
          { name: "Partners", path: "/Partners" },
          { name: "NewsLetter", path: "/NewsLetter" },
        ].map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `hover:underline transition duration-200 ${
                  isActive ? "font-semibold text-fuchsia-300 underline" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
