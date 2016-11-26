import 'whatwg-fetch';
import { defer, isError } from 'lodash';

import { makeRequest, createMockRequest } from './request';
import { recipesOk } from '../api-clients/v2/fixtures';

describe('Request Helper Tests', () => {
  it('should default request options to empty object', () => {
    const { request } = createMockRequest();
    makeRequest(request);
  });

  it('should reject on createResult error', done => {
    const { request, resolveResponse } = createMockRequest();
    const createResult = () => {
      throw new Error('createResult');
    };

    makeRequest(request, {}, createResult)
      .then(done.fail, err => {
        expect(isError(err)).to.be.true;
        done();
      });

    defer(resolveResponse, {});
  });

  it('should throw error attempting to validate response when no request was expecting it', () => {
    const { rejectResponse } = createMockRequest();
    expect(rejectResponse).to.throw(Error, 'A response was provided, but no request was expecting it');
  });

  it('should support rejecting a response', () => {
    const { request, rejectResponse } = createMockRequest();
    const ajaxOptions = Object.freeze({
      type: 'GET',
      url: '/example/api',
    });
    let count = 0;

    request(ajaxOptions)
      .catch(err => {
        expect(err).to.be('bar');
        expect(++count).toBe(1);
      });

    rejectResponse('bar');
  });
});
