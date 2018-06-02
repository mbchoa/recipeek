import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { get, map } from 'lodash';

import Recipe from './Recipe';
import LoadingWave from './LoadingWave';

class RecipeList extends Component {
  render() {
    const { recipesQuery } = this.props;
    if (recipesQuery && recipesQuery.loading) {
      return this.renderLoading();
    }
    if (recipesQuery && !recipesQuery.loading) {
      return this.renderRecipes(recipesQuery);
    }
    return null;
  }

  renderLoading = () => (
    <div className="recipe-list">
      <div className="recipe-list__loading">
        <LoadingWave />
      </div>
    </div>
  );

  renderRecipes = (recipesQuery) => {
    const recipes = get(recipesQuery, 'recipes.results', []);
    return (
      <div className="recipe-list">
        <hr />
        <div className="recipe-list__list">
          {
            map(recipes, (recipeData, key) =>
              <div className="recipe-list__item" key={key}>
                <Recipe {...recipeData } />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

const RecipesForIngredient = gql`
  fragment NutrientInfo on Nutrient {
    label
    tag
    total
    daily
    unit
  }
  query RecipesForIngredient($ingredient: String!) {
    recipes(ingredient: $ingredient) {
      results {
        digest {
          ...NutrientInfo
          sub {
            ...NutrientInfo
          }
        }
        healthLabels
        image
        label
        source
        url
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
