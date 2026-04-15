import { Link, NavLink } from "react-router-dom";
import { Home, Clock, ChartSpline } from "lucide-react";

const Navbar = () => {
  
  const navLinkStyles = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
      isActive 
        ? "bg-[#1a3a32] text-white font-medium shadow-md" 
        : "text-gray-600 hover:text-[#1a3a32]" 
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyles}>
          <Home size={18} /> 
          <span className="hidden sm:inline">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/timeline" className={navLinkStyles}>
          <Clock size={18} /> 
          <span className="hidden sm:inline">Timeline</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/stats" className={navLinkStyles}>
          <ChartSpline size={18} /> 
          <span className="hidden sm:inline">Stats</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm px-4 md:px-12 py-3 border-b border-gray-100">
      
      <div className="flex-1">
        <Link to="/" className="flex items-center group">
          <p className="text-2xl tracking-tight">
            <span className="font-black text-[#1a3a32]">Keen</span>
            <span className="font-semibold text-[#2d5a4c]">Keeper</span>
          </p>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-1 md:gap-4">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;