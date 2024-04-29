import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search for a country..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      {loading ? <p>Laddar...</p> : <CountryList countries={countries} />}
    </div>
  );
};

export default Home;
