import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setCountryData(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountryData();
  }, [name]);

  return (
    <div>
      {loading ? (
        <p>Laddar...</p>
      ) : (
        <div>
          <h2>{countryData.name.common}</h2>
          <p>Capital: {countryData.capital}</p>
          {}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
