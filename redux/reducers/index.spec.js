import rootReducer from './index';
import { RecipeekActions } from '../actions';

describe('Recipeek Reducers Tests', () => {

  it('should return default state if unknown action is dispatched', () => {
    const state = {};
    expect(rootReducer(state, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  it('should set isLoadingRecipes to true when receiving SET_IS_LOADING_RECIPES action', () => {
    expect(rootReducer({},
      { type: RecipeekActions('SET_IS_LOADING_RECIPES') }
    )).toEqual({ isLoadingRecipes: true });
  });

  it('should set isLoadingRecipes to false when receiving GET_RECIPES_COMPLETED action', () => {
    expect(rootReducer({},
      { type: RecipeekActions('GET_RECIPES_COMPLETED') }
    )).toEqual({ isLoadingRecipes: false });
  });

  it('should set recipes with proper values when receiving SET_RECIPES action', () => {
    const fakeRecipes = [
      { test: 123 },
      { hello: 456 },
    ];

    expect(rootReducer({},
      {
        type: RecipeekActions('SET_RECIPES'),
        recipes: fakeRecipes,
      }
    )).toEqual({ recipes: fakeRecipes });
  })
});
