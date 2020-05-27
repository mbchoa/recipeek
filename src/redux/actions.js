import { fsa, fsaPayload } from './helpers';

export const SEARCH = 'search';
export const search = fsaPayload(SEARCH);

export const SEARCH_PENDING = 'search pending';
export const searchPending = fsa(SEARCH_PENDING);

export const SEARCH_SUCCESSFUL = 'search successful';
export const searchSuccessful = fsaPayload(SEARCH_SUCCESSFUL);

export const SEARCH_FAILURE = 'search failure';
export const searchFailure = fsa(SEARCH_FAILURE);

export const FETCH_MORE_RECIPES = 'fetch more recipes';
export const fetchMoreRecipes = fsa(FETCH_MORE_RECIPES);

export const FETCH_MORE_RECIPES_PENDING = 'fetch more recipes pending';
export const fetchMoreRecipesPending = fsa(FETCH_MORE_RECIPES_PENDING);

export const FETCH_MORE_RECIPES_SUCCESSFUL = 'fetch more recipes successful';
export const fetchMoreRecipesSuccessful = fsa(FETCH_MORE_RECIPES_SUCCESSFUL);

export const FETCH_MORE_RECIPES_FAILURE = 'fetch more recipes failure';
export const fetchMoreRecipesFailure = fsa(FETCH_MORE_RECIPES_FAILURE);
