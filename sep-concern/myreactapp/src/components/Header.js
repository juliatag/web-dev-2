import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <HomeButton />
    </div>
  );
}
export default Header;
