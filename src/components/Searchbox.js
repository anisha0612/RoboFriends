import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        aria-label="Search Robots"
        className="ba bg-light-yellow mb5 pa3 br2"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
