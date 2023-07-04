import React from "react";

const SearchPolje = ({ onFilterChange }) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="Pretraži"
      onChange={onFilterChange}
    />
  );
};

export default SearchPolje;
