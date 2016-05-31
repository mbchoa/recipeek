import 'whatwg-fetch';

const SEARCH_ENDPOINT = 'http://localhost:3000/search/';

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

const search = ingredient =>
  fetch(`${SEARCH_ENDPOINT}${ingredient}`);

module.exports = { search, checkStatus, parseJSON };
