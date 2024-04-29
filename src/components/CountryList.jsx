import React from "react";
import { Link } from "react-router-dom";
import "./CountryList.css";
import Card from "./Card"

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.name.common} className="country-card">
          <img className="flags" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <Link to={`/country/${country.name.common}`}>
            <h2 className="country-name">{country.name.common}</h2>
          </Link>
          <p>Population: {country.population} </p>
          <p>Region: {country.region} </p>
          <p>Capital: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
