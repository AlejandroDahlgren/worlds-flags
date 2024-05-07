import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rootlayout from "../layouts/Rootlayout";
import Home from "./Home";
import CountryDetails from "../components/CountryDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle darkMode state
  };

  return (
    <Router>
      <Rootlayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:cca3" element={<CountryDetails />} />
        </Routes>
      </Rootlayout>
    </Router>
  );
}

export default App;
