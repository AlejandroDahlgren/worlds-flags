import React, { useState } from "react";
import SearchRegion from './SearchRegion';

const SearchBar = ({ region, setRegion, nameFilter, setNameFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleTextFieldChange = (event) => {
    setNameFilter(event.target.value.toLowerCase());
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchRegion
        region={region}
        setRegion={setRegion}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
      />
    </div>
  );
};

export default SearchBar;
