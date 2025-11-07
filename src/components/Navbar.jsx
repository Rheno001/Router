import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/Bullish.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-linear-to-r from-[#10051A] via-[#5A007A] to-[#0A061B]
      py-4 px-10 rounded-b-3xl border-b border-fuchsia-500 flex items-center justify-between mb-5 ">

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
          { name: "Dashboard", path: "/Dashboard" },
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
      <div>
        {user ? (
          <>
            <span className="mr-3 text-white">Hello, {user.email}</span>
            <button className="bg-[#dc3545] text-white border-none px-2 py-1 rounded cursor-pointer" onClick={logout}> Logout
            </button>
          </>
        ) : (
          <Link to="/Login" className="text-white p-2">Login</Link>
          
          
        )}
      </div>

    </nav>
  );
};

export default Navbar;
