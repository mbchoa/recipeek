import { identity, isError, omit } from 'lodash';

function checkStatus(response) {
  const { status } = response;
  return status >= 200 && status < 300
    ? response
    : new Error(response);
}

export function makeRequest(
  request,
  options = {},
  createResult = identity
) {
  return new Promise((resolve, reject) => {
    request(options.url, omit(options, 'url'))
      .then(response => {
        response.json()
          .then(payload => {
            let result;
            try {
              result = createResult(payload);
            } catch (err) {
              return reject(err);
            }

            if (!isError(checkStatus(response))) {
              return resolve(result);
            }

            reject(new Error(`Unhandled status code: ${response.status} received.`));
          });
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
      json() {
        return Promise.resolve(response);
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
