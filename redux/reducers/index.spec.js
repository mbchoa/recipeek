import rootReducer from './index';
import { RecipeekActions } from '../actions';

describe('Recipeek Reducers Tests', () => {

  it('should return default state if unknown action is dispatched', () => {
    const state = {};
    expect(rootReducer(state, { type: 'UNKNOWN_ACTION' }))
      .to.equal(state);
  });

  it('should set isLoadingRecipes to true when receiving SET_IS_LOADING_RECIPES action', () => {
    expect(rootReducer({},
      { type: RecipeekActions('SET_IS_LOADING_RECIPES') }
    )).to.deep.equal({ isLoadingRecipes: true });
  });

  it('should set isLoadingRecipes to false when receiving GET_RECIPES_COMPLETED action', () => {
    expect(rootReducer({},
      { type: RecipeekActions('GET_RECIPES_COMPLETED') }
    )).to.deep.equal({ isLoadingRecipes: false });
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
    )).to.deep.equal({ recipes: fakeRecipes });
  })
});
