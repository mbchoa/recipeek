import React from 'react';
import { map } from 'lodash';

import { titleCase } from '../helpers/string';

const recipeImgStyle = {
  height: 300,
};

const keywordStyle = {
  fontSize: 14,
};

const Recipe = ({
  healthLabels,
  image,
  label,
  source,
  url,
}) =>
  <div className="thumbnail">
    <a href={ url }>
      <img style={ recipeImgStyle } src={ image } alt={ name } />
    </a>
    <div className="caption">
      <h5>{ titleCase(name) }</h5>
      <h6>by { source }</h6>
      <div className="keywords">
        {
          map(healthLabels, (healthLabel, key) =>
            <span {...{
              key,
              style: keywordStyle,
              className: 'label label-pill label-info',
            }} >
                { healthLabel }
            </span>
          )
        }
      </div>
    </div>
  </div>;

export default Recipe;
