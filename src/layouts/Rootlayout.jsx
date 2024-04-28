import React from "react";

const Rootlayout = ({ children }) => {
  return (
    <div className="root-layout">
      <header>
        {}
        <h1>Country Information</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Rootlayout;
