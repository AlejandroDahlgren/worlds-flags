import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (!response.ok) {
          throw new Error("Country not found");
        }
        const data = await response.json();
        setCountryData(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [name]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load country data. Please try again later.</p>;
  }

  if (!countryData) {
    return <p>Country data not found</p>;
  }

  const {
    name: countryName,
    population,
    region,
    capital,
    languages,
    currencies,
  } = countryData;

  return (
    <div className="single-country-container">
      <Link className="home-link" to="/">
        Back home
      </Link>
      <div className="country-details">
        <div className="flag-container-single">
          <img
            className="flag"
            src={countryData.flags.png}
            alt={`Flag of ${countryData.name.common}`}
          />
        </div>
        <div className="text-container">
          <h2>{countryName.common}</h2>
          <p>Population: {population || "N/A"}</p>
          <p>Region: {region || "N/A"}</p>
          <p>Capital: {capital || "N/A"}</p>
          <p>
            Native name:{" "}
            {countryData.name.nativeName
              ? Object.values(countryData.name.nativeName).map(
                  (nativeNames, index) => (
                    <span key={index}>{nativeNames.common}</span>
                  )
                )
              : "N/A"}
          </p>
          <p>
            Currencies:{" "}
            {currencies ? currencies[Object.keys(currencies)[0]].name : "N/A"}
          </p>
          <p>
            Languages: {languages ? Object.values(languages).join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
