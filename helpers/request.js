import { identity, isError, omit } from 'lodash';
import fetch from 'whatwg-fetch';

function checkStatus(response) {
  const { status } = response;
  return status >= 200 && status < 300
    ? response
    : new Error(response);
}

export function makeRequest(
  request = fetch,
  requestOptions = {},
  createResult = identity
) {
  return new Promise((resolve, reject) => {
    fetch(requestOptions.url, omit(requestOptions, 'url'))
      .then(response => {
        let result;
        try {
          result = createResult(response.json());
        } catch (err) {
          return reject(new Error(response.statusText));
        }

        return !isError(checkStatus(response))
          ? resolve(result)
          : reject(result);
      })
      .catch(err => reject(err));
  });
}

export function createMockRequest() {
  const requests = [];

  function request(options, mockResponse) {
    requests.push(mockResponse);
  }

  function respond(response) {
    if (!requests.length) {
      throw new Error('A response was provided but no request was expecting it');
    }
    requests.shift()(response);
  }

  return { request, respond };
}
