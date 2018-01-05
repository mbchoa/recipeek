import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { get, map } from 'lodash';

import Recipe from './Recipe';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
};

class RecipeList extends Component {
  render() {
    const { recipesQuery } = this.props;
    const recipes = map(get(recipesQuery, 'recipes.hits', []), 'recipe');
    return (recipesQuery && !recipesQuery.loading)
      ? (
        <div>
          <hr />
          <div style={style}>
          {
            map(recipes, (recipeData, key) =>
              <Recipe {...{ key, ...recipeData }} />
            )
          }
          </div>
        </div>
      )
      : null;
  }
}

const RecipesForIngredient = gql`
  query RecipesForIngredient($ingredient: String!) {
    recipes(ingredient: $ingredient) {
      hits {
        recipe {
          healthLabels
          image
          label
          source
          url
        }
      }
    }
  }
`;

export default graphql(RecipesForIngredient, {
  name: 'recipesQuery',
  options: ({ searchIngredient }) => ({
    variables: { ingredient: searchIngredient },
  })
})(RecipeList);
