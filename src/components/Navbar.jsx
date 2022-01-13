import { Link } from "react-router-dom";
import Lateral from "../Assets/clients/Lateral.png";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_img">
        <img src={Lateral} alt="Icon" />
      </div>
      <div className="Navbar_container">
        <nav className="Navbar_nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">FEATURES</Link>
          </li>
          <li>
            <Link to="/">PRICING</Link>
          </li>
          <li>
            <Link to="/">CONTACT</Link>
          </li>
        </nav>
        <div className="Navbar_btn">
          <button className="Navbar_btn-login">LOGIN</button>
          <button className="Navbar_btn-started">GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
