import React, { PropTypes } from 'react';
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
  imageUrl,
  name,
  source,
  sourceUrl,
}) =>
  <div className="thumbnail">
    <a href={ sourceUrl }>
      <img style={ recipeImgStyle } src={ imageUrl } alt={ name } />
    </a>
    <div className="caption">
      <h5>{ titleCase(name) }</h5>
      <h6>by { source }</h6>
      <div className="keywords">
        {
          map(healthLabels, (label, key) =>
            <span {...{
              key,
              style: keywordStyle,
              className: 'label label-pill label-info',
            }} >
                { label }
            </span>
          )
        }
      </div>
    </div>
  </div>;

export default Recipe;
