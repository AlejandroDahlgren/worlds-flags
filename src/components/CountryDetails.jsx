import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryDetails.css";
import CountryDetailsLoader from "./CountryDetailsLoader";
import arrowleft from "../assets/arrowleft.svg";
import arrowleftdark from "../assets/arrowleftdark.svg";



const CountryDetails = ({darkMode}) => {

  const { cca3 } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${cca3}`
        );
        if (!response.ok) {
          throw new Error("Country not found");
        }
        const data = await response.json();
        setTimeout(() => {
          setCountryData(data[0]);
          setLoading(false);
        }, 500);
        window.scrollTo(0, 0);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [cca3]);

  if (loading) {
    return <CountryDetailsLoader />;
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
    borders,
  } = countryData;

  const arrowSwitch = darkMode ? arrowleftdark : arrowleft;

  return (
    <>
      <div className="home-button-box">
      <button className="home-button">
        <img src={arrowSwitch} alt="arrowback" />
        <Link to="/">Back</Link>
      </button>
      </div>
      <div className="single-country-container">
        <div className="country-details">
          <div className="flag-container-single">
            <img
              className="flag"
              src={countryData.flags.png}
              alt={`Flag of ${countryData.name.common}`}
            />
          </div>
          <div className="country-details-text-container">
            <div className="country-details-title">
              <h1>{countryName.common}</h1>
            </div>
            <div className="country-details-text">
              <p>Population: {population || "N/A"}</p>
              <p>Region: {region || "N/A"}</p>
              <p>Capital: {capital || "N/A"}</p>
              <p>Top Level Domain: {countryData.tld || "N/A"}</p>
              <p>
                Currencies:{" "}
                {currencies
                  ? currencies[Object.keys(currencies)[0]].name
                  : "N/A"}
              </p>
              <p>
                Languages:{" "}
                {languages ? Object.values(languages).join(", ") : "N/A"}
              </p>
            </div>
            <div className="native-name-title">
              <p>
                Native name:{"  "}
                {countryData.name.nativeName
                  ? Object.values(countryData.name.nativeName).map(
                      (nativeNames, index) => (
                        <span key={index}>{" " + nativeNames.common}</span>
                      )
                    )
                  : "N/A"}
              </p>
            </div>
            <div className="border-countries-box">
              <p>
                Border <br /> countries:{" "}
              </p>
              {borders && borders.length > 0 ? (
                borders.map((border, index) => (
                  <Link key={index} to={`/country/${border}`}>
                    <button className="border-countries">{border}</button>
                  </Link>
                ))
              ) : (
                <span>N/A</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
