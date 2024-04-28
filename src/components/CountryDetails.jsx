import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await response.json();
        setCountryData(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountryData();
  }, [name]);

  if (loading) {
    return <p>Laddar...</p>;
  }

  const { name: countryName, population, region, capital, languages, currencies } = countryData;

  return (
    <div>
      <h2>{countryName.official}</h2>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
      <p>Native name: {Object.values(countryName.nativeName)[0].common}</p>
      <p>Currencies: {currencies[Object.keys(currencies)[0]].name}</p>
      <p>Languages: {Object.values(languages).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;
