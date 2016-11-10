import { attempt, isError } from 'lodash';
import t from 'tcomb';
import { NOT_FOUND, OK } from 'http-status-codes';

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

export const createResult = ({ status, data }) => {
  const payload = attempt(JSON.parse, data);
  switch (status) {
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
