import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    const recipesArr = [];
    for (let i = 0; i < 5; i++) {
      recipesArr.push(<Recipe key={i} index={i} />);
    }
    return (
      <div>
        <h3>Recipes</h3>
        {recipesArr}
      </div>
    );
  }
}

module.exports = RecipeList;
