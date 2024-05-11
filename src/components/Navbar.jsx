import React from "react";
import logo from "../assets/techoverlogo.png";
import techoverdark from "../assets/techoverdark.png";
import "./Navbar.css";
import moonbordered from "../assets/moonbordered.svg"
import moon from "../assets/moon.svg"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const logoSwitch = darkMode ? techoverdark : logo;
  const toggleSwitch = darkMode ? moonbordered : moon;

  return (
    <header className="header">
      <nav className="navbar-container">
        <h3>The Flag App</h3>
        <img className="logo" src={logoSwitch} alt="techoverlogo" />
        <div className="Button-theme">
          <button onClick={toggleDarkMode}>
            <img className="moon-bordered" src={moonbordered} alt="" />
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
