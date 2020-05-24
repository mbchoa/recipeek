import { createSelector } from 'reselect';

const search = state => state.search;
export const results = state => search(state).results;

export const hasResults = createSelector(
  results,
  $results => $results.length === 0
);

export const isSearchPending = createSelector(
  search,
  $search => $search.isPending
);
