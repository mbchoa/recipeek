import { createSelector } from 'reselect';

const search = state => state.search;
const recipesById = state => search(state).byId;
const allRecipeIds = state => search(state).allIds;

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
