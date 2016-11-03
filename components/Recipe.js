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
  image_url,
  keywords,
  publisher,
  publisher_url,
  source_url,
  title,
}) =>
  <div className="thumbnail">
    <a href={source_url}>
      <img style={recipeImgStyle} src={image_url} alt={title} />
    </a>
    <div className="caption">
      <h5>{titleCase(title)}</h5>
      <h6>by <a href={publisher_url}>{publisher}</a></h6>
      <div className="keywords">
        {
          map(keywords, (word, key) =>
            <span {...{
              key,
              style: keywordStyle,
              className: 'label label-pill label-info',
            }} >
                {word}
            </span>
          )
        }
      </div>
    </div>
  </div>;

Recipe.propTypes = {
  image_url: PropTypes.string,
  keywords: PropTypes.array,
  publisher: PropTypes.string,
  source_url: PropTypes.string,
  title: PropTypes.string,
};

export default Recipe;
