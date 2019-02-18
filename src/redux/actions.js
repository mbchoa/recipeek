import { fsa, fsaPayload } from './helpers';

export const SEARCH = 'search';
export const search = fsaPayload(SEARCH);

export const SEARCH_PENDING = 'search pending';
export const searchPending = fsa(SEARCH_PENDING);

export const SEARCH_SUCCESSFUL = 'search successful';
export const searchSuccessful = fsaPayload(SEARCH_SUCCESSFUL);

export const SEARCH_FAILURE = 'search failure';
export const searchFailure = fsa(SEARCH_FAILURE);
