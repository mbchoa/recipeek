import { createSelector } from 'reselect';

const search = state => state.search;
const recipes = state => state.recipes;
const fetchMore = state => state.fetchMore;
const recipesById = state => recipes(state).byId;
const allRecipeIds = state => recipes(state).allIds;

export const currentSearchQuery = state => state.currentSearchQuery;
export const isFetchMoreRecipesPending = state => fetchMore(state).isPending;

export const numLoadedRecipes = createSelector(
  allRecipeIds,
  $allRecipeIds => $allRecipeIds.length
);

export const allRecipes = createSelector(
  allRecipeIds,
  recipesById,
  (allIds, byId) => allIds.map(id => byId[id])
);

export const hasRecipes = createSelector(
  allRecipeIds,
  ids => ids.length === 0
);

export const isSearchPending = createSelector(
  search,
  $search => $search.isPending
);
