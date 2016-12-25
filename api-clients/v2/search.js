import { attempt, isError } from 'lodash';
import t from 'tcomb';
import { NOT_FOUND, OK } from 'http-status-codes';

import { makeRequest } from '../../helpers/request';
import { RequestOptions } from '../common';
import Recipes from './models/Recipes';

export const createRequestOptions = t.func(
  [t.String],
  RequestOptions
).of(ingredient => ({
  method: 'GET',
  url: `/api/v2/search/${ingredient}`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept-Encoding': 'gzip'
  },
}));

export const createResult = ({ data, status }) => {
  switch (status) {
    case OK:
    case NOT_FOUND:
      return !isError(data)
        ? Recipes.of(data)
        : new Error('Error invalid data response received');

    default:
      return new Error(`Unhandled status code: ${status} received`);
  }
};

export default function search(request, ingredient) {
  return makeRequest(
    request,
    createRequestOptions(ingredient),
    createResult
  );
}
