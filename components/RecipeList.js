import React from 'react';
import Recipe from './Recipe';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
};

const RecipeList = ({ recipesData }) =>
  <div>
    <hr/>
    <div style={style}>
      {recipesData.map((recipe, i) =>
        <Recipe index={i} key={i} data={recipe} />
      )}
    </div>
  </div>;

export default RecipeList;