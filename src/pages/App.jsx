import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rootlayout from "../layouts/Rootlayout";
import Home from "./Home";
import CountryDetails from "../components/CountryDetails";

function App() {
  return (
    <Router>
      <Rootlayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:cca3" element={<CountryDetails />} />
        </Routes>
      </Rootlayout>
    </Router>
  );
}

export default App;
