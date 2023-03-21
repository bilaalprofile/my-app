import { hover } from "@testing-library/user-event/dist/hover";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navStyling = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "650",
      fontSize: isActive ? "24px" : "24px",
      color: isActive ? "red" : "white",
    };
  };

  return (
    <div className="header">
      <NavLink className="NavOne" style={navStyling} to="/">
        <span className="NavOneTag">home</span>
      </NavLink>

      <NavLink className="NavOne" style={navStyling} to="/About">
        <span className="NavOneTag">About</span>
      </NavLink>
      <NavLink className="NavOne" style={navStyling} to="/Contact">
        <span className="NavOneTag">Contact</span>
      </NavLink>
      <NavLink className="NavOne" style={navStyling} to="/Services">
        <span className="NavOneTag">services</span>
      </NavLink>
      <NavLink className="NavOne" style={navStyling} to="/More">
        <span className="NavOneTag">More</span>
      </NavLink>
    </div>
  );
};

export default Header;
