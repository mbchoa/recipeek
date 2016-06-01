import React from 'react';

const preStyle = {
  backgroundColor: 'light-gray',
};

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function titleCase(sentence) {
  return sentence.split(' ').map(capitalize).join(' ');
}

const Recipe = ({ index, data }) =>
  <div>
    <a href={data.source_url}>
      <img src={data.image_url}/>
    </a>
    <h4>{titleCase(data.title)}</h4>
  </div>

module.exports = Recipe;
