import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { get, map } from 'lodash';

import Recipe from './Recipe';
import LoadingWave from './LoadingWave';

const GET_RECIPES = gql`
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

export default class RecipeList extends Component {
  static propTypes = {
    searchIngredient: PropTypes.string,
  };

  static defaultProps = {
    searchIngredient: '',
  };

  render() {
    const { searchIngredient: ingredient } = this.props;
    return (
      <Query query={GET_RECIPES} variables={{ ingredient }}>
        {({ loading, error, data }) => {
          if (loading) return this.renderLoading();
          if (error) return `Error! ${error.message}`;

          return this.renderRecipes(get(data, 'recipes.results', []));
        }}
      </Query>
    );
  }

  renderLoading = () => (
    <div className="recipe-list">
      <div className="recipe-list__loading">
        <LoadingWave />
      </div>
    </div>
  );

  renderRecipes = recipes => (
    <div className="recipe-list">
      <hr />
      <div className="recipe-list__list">
        {
          map(recipes, (recipeData, key) => (
            <div className="recipe-list__item" key={key}>
              <Recipe {...recipeData } />
            </div>
          ))
        }
      </div>
    </div>
  );
}
