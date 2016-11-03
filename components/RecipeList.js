import React, { PropTypes } from 'react';
import Recipe from './Recipe';
import { map } from 'lodash';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
};

const RecipeList = ({
  recipesData,
}) =>
  <div>
    <hr />
    <div style={style}>
      {
        map(recipesData, (recipeData, key) =>
          <Recipe
            {...{
              key,
              ...recipeData,
            }}
          />
      )}
    </div>
  </div>;

RecipeList.propTypes = {
  recipesData: PropTypes.array,
};

export default RecipeList;
