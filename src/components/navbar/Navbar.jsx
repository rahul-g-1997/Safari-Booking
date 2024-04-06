import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  ContactPage as ContactIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import Logo from "../../assets/tatr-logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  // Function to toggle navbar visibility
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            height="60px"
            style={{
              marginRight: "10px",
            }}
          />
          <span className="logo-name">Safari Booking</span>
        </div>
        {/* Menu icon for mobile */}
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon
            style={{ cursor: "pointer", color: "#DDE6ED", fontSize: 40 }}
          />
        </div>
        {/* Navigation elements */}
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            {/* Home link */}
            <li>
              <NavLink to="/">
                <HomeIcon style={{ color: "#DDE6ED", marginRight: "10px" }} />
                Home
              </NavLink>
            </li>

            {/* About link */}
            <li>
              <NavLink to="/about">
                <InfoIcon style={{ color: "#DDE6ED", marginRight: "10px" }} />
                About
              </NavLink>
            </li>
            {/* Contacts link */}
            <li>
              <NavLink to="/contacts">
                <ContactIcon
                  style={{ color: "#DDE6ED", marginRight: "10px" }}
                />
                contacts
              </NavLink>
            </li>
            {/* Login link */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
