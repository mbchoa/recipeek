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
  options = {},
  createResult = identity
) {
  return new Promise((resolve, reject) => {
    request(options.url, omit(options, 'url'))
      .then(response => {
        let result;
        try {
          result = createResult(response.text());
        } catch (err) {
          return reject(err);
        }

        if (!isError(checkStatus(response))) {
          return resolve(result);
        }

        reject(new Error(`Unhandled status code: ${response.status} received.`));
      });
  });
}

export function createMockRequest() {
  const requests = [];

  function request(url, options) {
    let resolver;
    let rejector;
    const promise = new Promise((resolve, reject) => {
      resolver = resolve;
      rejector = reject;
    });

    requests.push({
      rejector,
      resolver,
    });

    return promise;
  }

  function validateResponse() {
    if (!requests.length) {
      throw new Error('A response was provided, but no request was expecting it');
    }
  }

  function decorateResponse(response) {
    return {
      text() {
        return response;
      },
      status: response.status,
    };
  }

  function resolveResponse(response) {
    validateResponse();
    requests
      .shift()
      .resolver(decorateResponse(response));
  }

  function rejectResponse(response) {
    validateResponse();
    requests
      .shift()
      .rejector(decorateResponse(response));
  }

  return { rejectResponse, request, resolveResponse };
}
