// Rootlayout.jsx
import React from "react";
import Navbar from "../components/Navbar"

const Rootlayout = ({ children }) => {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Rootlayout;
