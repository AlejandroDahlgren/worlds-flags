import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar-container">
        <h3 className="title">The Flag App</h3>
        <img className="logo" src={logo} alt="techoverlogo" />
        <button className="Buttom-theme">DARK MODE</button>
      </nav>
    </header>
  );
};

export default Navbar;
