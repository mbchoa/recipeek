import { all, call, put, takeEvery } from 'redux-saga/effects';

import {
  SEARCH,
  searchFailure,
  searchPending,
  searchSuccessful
} from './actions';
import { search } from '../api/edamam';

function* searchWorker({ payload }) {
  try {
    yield put(searchPending());
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

export default function* rootSaga() {
  yield all([searchSaga()]);
}
