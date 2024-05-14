import React from "react";
import Navbar from "./Navbar"

const Rootlayout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className={darkMode ? "root-layout dark-mode" : "root-layout"}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
    </div>
  );
};

export default Rootlayout;
