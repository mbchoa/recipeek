import React from 'react';
import Recipe from './Recipe';

const style = {
  display: 'inline-block',
};

const RecipeList = ({ recipesData }) =>
  <div style={style}>
    <h3>Recipes</h3>
    {recipesData.map((recipe, i) =>
      <Recipe index={i} key={i} data={recipe} />
    )}
  </div>;

module.exports = RecipeList;
