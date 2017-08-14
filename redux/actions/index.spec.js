import { defer, isError } from 'lodash';
import {
  getRecipes,
  getRecipesCompleted,
  RecipeekActions,
  setIsLoadingRecipes,
  setRecipes,
} from './index';
import { createMockRequest } from '../../helpers/request';
import mockStore from '../../helpers/mock-store';
import { recipesOk } from '../../api-clients/v2/fixtures';
import Recipes from '../../api-clients/v2/models/Recipes';
import { createResult } from '../../api-clients/v2/search';

describe('Recipeek Actions Tests', () => {
  describe('#actions', () => {
    it('should return action object with type "GET_RECIPES_COMPLETED"', () => {
      expect(getRecipesCompleted())
        .toHaveProperty('type', RecipeekActions('GET_RECIPES_COMPLETED'));
    });

    it('should return action object with type "SET_IS_LOADING_RECIPES"', () => {
      expect(setIsLoadingRecipes())
        .toHaveProperty('type', RecipeekActions('SET_IS_LOADING_RECIPES'));
    });

    it('should return action object with type "SET_RECIPES"', () => {
      expect(setRecipes())
        .toHaveProperty('type', RecipeekActions('SET_RECIPES'));
    });
  });

  describe('#getRecipes', () => {
    let store;
    let respond;

    beforeEach(() => {
      const options = createMockRequest();
      respond = options.resolveResponse;
      store = mockStore({}, options.request);
    });

    it('should dispatch SET_IS_LOADING_RECIPES action upon initiating request', done => {
      store.dispatch(getRecipes('chicken'))
        .then(() => {
          expect(store.getActions()[0].type)
            .toEqual(RecipeekActions('SET_IS_LOADING_RECIPES'));
          done();
        }, done.fail);

      defer(respond, recipesOk);
    });

    it('should dispatch SET_RECIPES action on ajax return', done => {
      store.dispatch(getRecipes('chicken'))
        .then(() => {
          expect(store.getActions()[1].type)
            .toEqual(RecipeekActions('SET_RECIPES'));
          done();
        }, done.fail);

      defer(respond, recipesOk);
    });

    it('should dispatch SET_RECIPES action with Recipes model payload to update state', done => {
      store.dispatch(getRecipes('chicken'))
        .then(() => {
          expect(store.getActions()[1].recipes)
            .toEqual(createResult(recipesOk).recipeList);
          done();
        }, done.fail);

      defer(respond, recipesOk);
    });

    it('should dispatch GET_RECIPES_COMPLETED action after setting state with new data', done => {
      store.dispatch(getRecipes('chicken'))
        .then(() => {
          expect(store.getActions()[2].type)
            .toEqual(RecipeekActions('GET_RECIPES_COMPLETED'));
          done();
        }, done.fail);

      defer(respond, recipesOk);
    });

    it('should dispatch GET_RECIPES_COMPLETED action with error object for unknown status code', done => {
      store.dispatch(getRecipes('chicken'))
        .then(done.fail,
          () => {
            expect(isError(store.getActions()[1].error)).toBeTruthy();
            done();
          }
        );

      defer(respond, {
        status: 404,
        data: 'Not Found',
      });
    });
  });
});
