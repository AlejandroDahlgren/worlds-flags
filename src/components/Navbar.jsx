import React from "react";
import logo from "../assets/techoverlogo.png";
import techoverdark from "../assets/techoverdark.png";
import "./Navbar.css";
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const logoSwitch = darkMode ? techoverdark : logo;
  const iconSwitch = darkMode ? moon : sun;

  return (
    <header className="header">
      <nav className="navbar-container">
        <h3>The Flag App</h3>
        <img className="logo" src={logoSwitch} alt="techoverlogo" />
        <div className="Button-theme">
          <button className="button-box" onClick={toggleDarkMode}>
            <img className="icon" src={iconSwitch} alt="" />
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
