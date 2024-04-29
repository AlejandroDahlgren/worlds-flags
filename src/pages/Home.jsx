import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const sortedData = data.sort(( a,b ) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  

  return (
    <div>
      {loading ? <p>Laddar...</p> : <CountryList countries={countries} />}
    </div>
  );
};

export default Home;
