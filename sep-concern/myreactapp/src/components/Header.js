import { Link, NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <NavLink style={({ isActive }) => (isActive ? { color: "orange" } : { color: "blue" })} to="/">
        Home
      </NavLink>

      <NavLink style={({ isActive }) => (isActive ? { color: "orange" } : { color: "blue" })} to="/about">
        About
      </NavLink>

      <NavLink style={({ isActive }) => (isActive ? { color: "orange" } : { color: "blue" })} to="/contact">
        Contact
      </NavLink>

      <HomeButton />
    </div>
  );
}
export default Header;
