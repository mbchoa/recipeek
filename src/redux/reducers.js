import {
  SEARCH,
  SEARCH_FAILURE,
  SEARCH_PENDING,
  SEARCH_SUCCESSFUL
} from './actions';

const INITIAL_STATE = {
  search: {
    error: null,
    isPending: false,
    byId: {},
    allIds: []
  }
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH:
      return { ...INITIAL_STATE };
    case SEARCH_PENDING:
      return {
        ...state,
        search: {
          ...state.search,
          isPending: true
        }
      };
    case SEARCH_SUCCESSFUL:
      return {
        ...state,
        search: {
          ...state.search,
          isPending: false,
          byId: action.payload.reduce(
            (output, hit) => ({
              ...output,
              [hit.recipe.id]: hit
            }),
            {}
          ),
          allIds: action.payload.map(hit => hit.recipe.id)
        }
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        search: {
          ...state.search,
          error: action.error,
          isPending: false
        }
      };
    default:
      return state;
  }
}
