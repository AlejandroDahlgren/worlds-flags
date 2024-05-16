import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import CountryListLoader from "../components/CountryListLoader";
import SearchRegion from "../components/SearchRegion";
import "../components/CountryList.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setTimeout(() => {
          setCountries(sortedData);
          setFilteredCountries(sortedData);
          setLoading(false);
        }, 1000);
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
        <div  className="boxOfCountries">
          {loading ? <CountryListLoader/> : <CountryList countries={filteredCountries} />
          }
        </div>
    </div>
  );
};

export default Home;
