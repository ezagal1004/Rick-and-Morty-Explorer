import React, { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(input.trim());
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search characters..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="button">Search</button>
    </form>
  );
};

export default SearchBar;
