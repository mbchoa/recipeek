import t from 'tcomb';

import createApiClient from '../../api-clients/v2';

export const RecipeekActions = t.enums.of([
  'GET_RECIPES',
  'GET_RECIPES_COMPLETED',
  'SET_IS_LOADING_RECIPES',
  'SET_RECIPES',
], 'RecipeekActions');

export function setIsLoadingRecipes() {
  return {
    type: RecipeekActions('SET_IS_LOADING_RECIPES'),
  };
}

export function getRecipesCompleted(error = null) {
  return {
    type: RecipeekActions('GET_RECIPES_COMPLETED'),
    error,
  };
}

export function setRecipes(recipes) {
  return {
    type: RecipeekActions('SET_RECIPES'),
    recipes,
  };
}

export function getRecipes(ingredient) {
  return (dispatch, getState, fetch) => {
    dispatch(setIsLoadingRecipes());

    const { search } = createApiClient({ fetch });
    return search(ingredient).then(
      ({ recipeList }) => {
        dispatch(setRecipes(recipeList));
        dispatch(getRecipesCompleted());
      },
      error => {
        dispatch(getRecipesCompleted(error));
        return Promise.reject(error);
      }
    );
  };
}

export const setSearchIngredient = ingredient => ({
  type: 'SET_SEARCH_INGREDIENT',
  data: ingredient
});
