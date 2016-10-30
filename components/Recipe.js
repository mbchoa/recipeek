import React from 'react';

import { titleCase } from '../helpers/string';

const preStyle = {
  backgroundColor: 'light-gray',
};

const recipeImgStyle = {
  height: 300,
};

const keywordStyle = {
  fontSize: 14,
};

const Recipe = ({ 
  index,
  data 
}) =>
  <div className="thumbnail">
    <a href={data.source_url}>
      <img style={recipeImgStyle} src={data.image_url}/>
    </a>
    <div className="caption">
      <h5>{titleCase(data.title)}</h5>
      <h6>by <a href={data.publisher_url}>{data.publisher}</a></h6>
      <div className="keywords">
        {data.keywords.map(word =>
          <span style={keywordStyle} className="label label-pill label-info">{word}</span>
        )}
      </div>
    </div>
  </div>

export default Recipe;
