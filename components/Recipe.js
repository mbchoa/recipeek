import React from 'react';

const preStyle = {
  backgroundColor: 'light-gray',
};

const Recipe = ({ index }) =>
  (<pre style={preStyle}>Recipe {`#${index}`}</pre>);

module.exports = Recipe;
