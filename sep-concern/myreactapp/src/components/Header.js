import { Link, NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";
import "./Header.css";
import Logo from "./Logo";

function Header() {
  const buttonStyle = {
    backgroundColor: "rgb(183, 28, 200)",
    border: "none",
    color: "white",
    padding: "12px",
    flexShrink: "0",
    cursor: "pointer",
  };

  // skip this and straight to Bootstrap as per teacher request

  // const activeButtonStyle = {
  //   backgroundColor: "rgb(183, 28, 200)",
  //   border: "none",
  //   color: "white",
  //   padding: "12px",
  //   flexShrink: "0",
  //   cursor: "pointer",
  // };

  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav">
        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link-inactive")} to="/">
          Home
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link-inactive")} to="/about">
          About
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link-inactive")} to="/contact">
          Contact
        </NavLink>
      </div>

      <HomeButton />
    </div>
  );
}
export default Header;
