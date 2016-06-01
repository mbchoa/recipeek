import React from 'react';

const searchBarStyle = {
  textAlign: 'center',
};

const SearchBar = ({ onTextChange, onSubmitSearch }) => {
  return (
    <form onSubmit={onSubmitSearch}>
      <input
        style={searchBarStyle}
        className="form-control"
        type="text"
        placeholder="Search for a recipe"
        onChange={onTextChange} />
    </form>

  );
}


module.exports = SearchBar;
