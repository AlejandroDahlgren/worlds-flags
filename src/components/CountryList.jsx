import React from "react";
import { Link } from "react-router-dom";
import "./CountryList.css";
import Card from "./Card";
import SearchBar from "./SearchBar";

const CountryList = ({ countries }) => {
  return (
    <div>
      <div className="country-list">
        {countries.map((country) => (
          <Link
            key={country.name.common}
            to={`/country/${country.name.common}`}
            style={{ textDecoration: "none" }}
          >
            <div className="country-card">
              <div className="flag-container">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                />
              </div>
              <div className="text-container">
                <h3 className="country-name">{country.name.common}</h3>
                <p>Population: {country.population} </p>
                <p>Region: {country.region} </p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryList;