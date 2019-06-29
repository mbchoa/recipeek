import { SEARCH_FAILURE, SEARCH_PENDING, SEARCH_SUCCESSFUL } from './actions';

const INITIAL_STATE = {
  search: {
    error: null,
    isPending: false,
    results: []
  }
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_PENDING:
      return {
        ...state,
        search: {
          isPending: true,
          results: []
        }
      };
    case SEARCH_SUCCESSFUL:
      return {
        ...state,
        search: {
          isPending: false,
          results: action.payload
        }
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        search: {
          error: action.error,
          isPending: false,
          results: []
        }
      };
    default:
      return state;
  }
}
