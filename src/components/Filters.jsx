import React from "react";

const Filters = ({ setStatusFilter, setSpeciesFilter }) => {
  return (
    <div className="filters">
      {/* Status Filter */}
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      {/* Species Filter */}
      <select onChange={(e) => setSpeciesFilter(e.target.value)}>
        <option value="">All Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="robot">Robot</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Filters;
