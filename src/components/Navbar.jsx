import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = ({darkMode, toggleDarkMode}) => {
  return (
    <header className="header">
      <nav className="navbar-container">
        <h3 className="title">The Flag App</h3>
        <img className="logo" src={logo} alt="techoverlogo" />
        <button className="Buttom-theme" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
