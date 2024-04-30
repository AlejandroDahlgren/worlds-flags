import React, { useState } from "react";
import "./SearchRegion.css";

const SearchRegion = ({ countries, setFilteredCountries }) => {
  const [region, setRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    const selectedRegion = event.target.value;
    setRegion(selectedRegion);
    filterByQueryAndRegion(searchQuery, selectedRegion);
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterByQueryAndRegion(query, region);
  };

  const filterByQueryAndRegion = (query, selectedRegion) => {
    let filtered = countries.filter((country) => {
      const nameMatches = country.name.common
        .toLowerCase()
        .includes(query.toLowerCase());
      const nativeLanguageMatches =
        country.name.nativeName &&
        Object.values(country.name.nativeName).some((nativeName) =>
          nativeName.common.toLowerCase().includes(query.toLowerCase())
        );
      return nameMatches || nativeLanguageMatches;
    });

    if (selectedRegion !== "all") {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    setFilteredCountries(filtered);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          className="search-by-name"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <form>
          <select
            className="search-by-region"
            id="region-select"
            value={region}
            label="Region"
            onChange={handleChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SearchRegion;
