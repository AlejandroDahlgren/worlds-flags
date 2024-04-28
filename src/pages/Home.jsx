import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Alla länder</h1>
      {loading ? <p>Loading...</p> : <CountryList countries={countries} />}
    </div>
  );
};

export default Home;
