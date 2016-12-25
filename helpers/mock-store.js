import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { createMockRequest } from './request';

const { request } = createMockRequest();

export default function mockStore(
  state = {},
  options = request
) {
  return configureStore([
    thunk.withExtraArgument(options),
  ])(state);
}
