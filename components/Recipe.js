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
  <div className="recipe thumbnail">
    <a target="_blank" rel="noopener noreferer" href={ url }>
      <img style={ recipeImgStyle } src={ image } alt={ label } />
    </a>
    <div className="caption">
      <h5 className="recipe__name">{ titleCase(label) }</h5>
      <h6 className="recipe__source">by { source }</h6>
      <div className="recipe__keywords">
        {
          map(healthLabels, (healthLabel, key) =>
            <div className="recipe__pill" key={key}>
              <span {...{
                style: keywordStyle,
                className: 'label label-pill label-info',
              }} >
                  { healthLabel.split('-').join(' ') }
              </span>
            </div>
          )
        }
      </div>
    </div>
  </div>;

export default Recipe;
