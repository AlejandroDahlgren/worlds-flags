import React from "react";
import { Link } from "react-router-dom";
import "./CountryList.css";

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div className="country-card-wrapper" key={country.name.common}>
          <Link to={`/country/${country.cca3}`}>
            <div className="country-card">
              <div className="flag-container">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                />
              </div>
              <div className="text-container-list">
                <h3>{country.name.common}</h3>
                <p>Population: {country.population} </p>
                <p>Region: {country.region} </p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
