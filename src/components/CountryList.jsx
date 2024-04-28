import React from "react";
import { Link } from "react-router-dom";

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.name.common} className="country-card">
          <Link to={`/country/${country.name.common}`}>
            <h3>{country.name.common}</h3>
          </Link>
          <p>Capital: {country.capital}</p>
          {}
        </div>
      ))}
    </div>
  );
};

export default CountryList;
