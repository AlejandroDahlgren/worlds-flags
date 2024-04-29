import React from "react";
import logo from "../assets/logo.png"
import './Navbar.css';

const Navbar = () => {
  return (
            <nav className="navbar-container">
                <h3 className="title">The flag App</h3>
                <img className="logo" src={logo} alt="techoverlogo" />
                <button className="Buttom-theme">DARK MODE</button>
            </nav>
  );
};

export default Navbar;
