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

const recipeImgStyle = {
  height: 300,
};

const Recipe = ({ index, data }) =>
  <div className="thumbnail">
    <a href={data.source_url}>
      <img style={recipeImgStyle} src={data.image_url}/>
    </a>
    <div className="caption">
      <h5>{titleCase(data.title)}</h5>
      <h6>by <a href={data.publisher_url}>{data.publisher}</a></h6>
    </div>
  </div>

module.exports = Recipe;

{/*<div class="thumbnail">
      <img src="..." alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>*/}
