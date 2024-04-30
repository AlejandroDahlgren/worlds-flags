import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import SearchRegion from "../components/SearchRegion";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedData);
        setFilteredCountries(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);


  return (
    <div>
      <div>
        <div>
          <SearchRegion
            countries={countries}
            setFilteredCountries={setFilteredCountries}
          />
        </div>
      </div>
      <div>
        {loading ? <p>Laddar...</p> : <CountryList countries={filteredCountries} />}
      </div>
    </div>
  );
};

export default Home;
