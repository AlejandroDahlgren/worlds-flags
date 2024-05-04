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
      <div className="search-box">
        <input
          className={`search-bar ${searchQuery && "has-content"}`}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <span className="search-bar-label">Search for a country..</span>
        <form>
          <div className="region-select-container">
            <select
              className={`search-by-region ${
                region !== "all" && "changed-to-region"
              }`}
              id="region-select"
              value={region}
              onChange={handleChange}
            >
              <option className="continent-name" value="all">All
              </option>
              <option className="continent-name" value="Africa">
                Africa
              </option>
              <option className="continent-name" value="Americas">
                Americas
              </option>
              <option className="continent-name" value="Asia">
                Asia
              </option>
              <option className="continent-name" value="Europe">
                Europe
              </option>
              <option className="continent-name" value="Oceania">
                Oceania
              </option>
            </select>
            <span className="region-label">Region</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchRegion;
