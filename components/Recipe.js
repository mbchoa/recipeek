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

const recipeContainerStyle = {
  border: '1 solid black',
};

const recipeImgStyle = {
  height: 200,
};

const Recipe = ({ index, data }) =>
  <div style={recipeContainerStyle}>
    <a href={data.source_url}>
      <img style={recipeImgStyle} src={data.image_url}/>
    </a>
    <h5>{titleCase(data.title)}</h5>
    <h6>by <a href={data.publisher_url}>{data.publisher}</a></h6>
  </div>

module.exports = Recipe;
