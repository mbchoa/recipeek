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
        expect(isError(err)).toBeTruthy();
        done();
      });

    defer(resolveResponse, {});
  });

  it('should throw error attempting to validate response when no request was expecting it', () => {
    const { rejectResponse } = createMockRequest();
    expect(rejectResponse).toThrow();
  });

  xit('should support rejecting a response', () => {
    const { request, rejectResponse } = createMockRequest();
    const ajaxOptions = Object.freeze({
      type: 'GET',
      url: '/example/api',
    });
    let count = 0;

    request(ajaxOptions)
      .catch(err => {
        expect(err.json()).toEqual('bar');
        expect(++count).toEqual(1);
      });

    rejectResponse('bar');
  });

  it('should reject on unhandled status code response', done => {
    const { request, resolveResponse } = createMockRequest();
    const ajaxOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Encoding': 'gzip'
      }
    };

    makeRequest(request, ajaxOptions)
      .then(done.fail, err => {
        expect(isError(err)).toBeTruthy();
        done();
      });

    resolveResponse({
      data: 'recipe data',
      status: 404,
    });
  });

});
