import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    return (
      <div>
        <h3>Recipes</h3>
        {this.props.recipesArr.map((recipe, i) => {
          return <Recipe index={i} key={i} />
        })}
      </div>
    );
  }
}

module.exports = RecipeList;
