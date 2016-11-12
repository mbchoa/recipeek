import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import 'whatwg-fetch';

import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunk.withExtraArgument(fetch))
);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
