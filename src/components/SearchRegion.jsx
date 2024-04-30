import React, { useState } from 'react';

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
      const nameMatches = country.name.common.toLowerCase().includes(query.toLowerCase());
      const nativeLanguageMatches = country.languages && Object.values(country.languages).some(language =>
        language.toLowerCase().includes(query.toLowerCase())
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
      <form>
        <select
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
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchRegion;