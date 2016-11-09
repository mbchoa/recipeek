import { attempt, isError } from 'lodash';
import t from 'tcomb';

import { makeRequest } from '../../helpers/request';
import { RequestOptions } from '../common';

export const createRequestOptions = t.func(
  [t.String],
  RequestOptions
).of(ingredient => ({
  method: 'GET',
  url: `/api/v2/search/${ingredient}`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
}));

export const createResult = ({ status, text }) => {
  const payload = attempt(JSON.parse, text);
    switch(status) {
        case OK:
        case NOT_FOUND:
            return payload;

        default:
          return new Error(status);
    }
};

export default function search(request, ingredient) {
  return makeRequest(
    request,
    createRequestOptions(ingredient),
    createResult
  );
}
