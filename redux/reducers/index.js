import { assign } from 'lodash';

import {
  RecipeekActions,
} from '../actions';

export default function rootReducer(state, action) {
  switch (action.type) {
    case RecipeekActions('SET_IS_LOADING_RECIPES'):
      return {
        ...state,
        isLoadingRecipes: true
      };
    case RecipeekActions('SET_RECIPES'):
      return assign(
        {},
        state,
        { recipes: action.recipes }
      );
    case RecipeekActions('GET_RECIPES_COMPLETED'):
      return {
        ...state,
        isLoadingRecipes: false
      };
    case 'SET_SEARCH_INGREDIENT':
      return {
        ...state,
        searchIngredient: action.data
      };
    default:
      return state;
  }
}
