import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import Recipe from './Recipe';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
};

const RecipeList = ({ recipes }) =>
  <div>
    <hr />
    <div style={style}>
      {
        map(recipes, (recipeData, key) =>
          <Recipe
            {...{
              key,
              ...recipeData,
            }}
          />
      )}
    </div>
  </div>;

const mapStateToProps = ({ recipes }) => ({ recipes });
export default connect(mapStateToProps)(RecipeList);
