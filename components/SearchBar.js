import React from 'react';

const SearchBar = ({ onTextChange, onSubmitSearch }) => {
  return (
    <form onSubmit={onSubmitSearch}>
      <input
        type="text"
        placeholder="Search for a recipe"
        onChange={onTextChange} />
    </form>

  );
}


module.exports = SearchBar;
