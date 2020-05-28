import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
  FETCH_MORE_RECIPES,
  fetchMoreRecipesFailure,
  fetchMoreRecipesPending,
  fetchMoreRecipesSuccessful,
  SEARCH,
  searchFailure,
  searchPending,
  searchSuccessful
} from './actions';
import { search } from '../api/edamam';
import { currentSearchQuery, numLoadedRecipes } from './selectors';

function* searchWorker({ payload }) {
  yield put(searchPending());

  try {
    const { data } = yield call(search, { queryString: payload });
    yield put(searchSuccessful(data));
  } catch (e) {
    console.error(e);
    yield put(searchFailure());
  }
}

function* searchSaga() {
  yield takeEvery(SEARCH, searchWorker);
}

function* fetchMoreRecipesWorker() {
  yield put(fetchMoreRecipesPending());

  const queryString = yield select(currentSearchQuery);
  const from = yield select(numLoadedRecipes);

  try {
    const { data } = yield call(search, { from, queryString, to: from + 10 });
    yield put(fetchMoreRecipesSuccessful(data));
  } catch (e) {
    console.error(e);
    yield put(fetchMoreRecipesFailure());
  }
}

function* fetchMoreRecipesSaga() {
  yield takeEvery(FETCH_MORE_RECIPES, fetchMoreRecipesWorker);
}

export default function* rootSaga() {
  yield all([searchSaga(), fetchMoreRecipesSaga()]);
}
