export default (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_INGREDIENT':
      return {
        ...state,
        searchIngredient: action.data,
      };
    default:
      return state;
  }
};
