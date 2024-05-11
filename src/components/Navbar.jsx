import React from "react";
import logo from "../assets/techoverlogo.png";
import techoverdark from "../assets/techoverdark.png";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const logoSwitch = darkMode ? techoverdark : logo;

  return (
    <header className="header">
      <nav className="navbar-container">
        <h3>The Flag App</h3>
        <img className="logo" src={logoSwitch} alt="techoverlogo" />
        <div className="Button-theme">
          <button onClick={toggleDarkMode}>
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
