import {
  FETCH_MORE_RECIPES_FAILURE,
  FETCH_MORE_RECIPES_PENDING,
  FETCH_MORE_RECIPES_SUCCESSFUL,
  SEARCH,
  SEARCH_FAILURE,
  SEARCH_PENDING,
  SEARCH_SUCCESSFUL
} from './actions';

const INITIAL_STATE = {
  currentSearchQuery: '',
  search: {
    error: null,
    isPending: false
  },
  fetchMore: {
    isPending: false
  },
  recipes: {
    byId: {},
    allIds: []
  }
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...INITIAL_STATE,
        currentSearchQuery: action.payload.toLowerCase()
      };
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
          isPending: false
        },
        recipes: {
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
          error: action.error,
          isPending: false
        }
      };
    case FETCH_MORE_RECIPES_PENDING:
      return {
        ...state,
        fetchMore: {
          isPending: true
        }
      };
    case FETCH_MORE_RECIPES_SUCCESSFUL:
      return {
        ...state,
        fetchMore: {
          isPending: false
        },
        recipes: {
          byId: action.payload.reduce(
            (output, hit) => ({
              ...output,
              [hit.recipe.id]: hit
            }),
            { ...state.recipes.byId }
          ),
          allIds: [
            ...state.recipes.allIds,
            ...action.payload.map(hit => hit.recipe.id)
          ]
        }
      };
    case FETCH_MORE_RECIPES_FAILURE:
      return {
        ...state,
        fetchMore: {
          isPending: false
        }
      };
    default:
      return state;
  }
}
