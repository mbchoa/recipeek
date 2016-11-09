import { attempt } from 'lodash';
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

const createResult = (response) => {
  const payload = attempt(JSON.parse, response);

};

export default function search() {
  
}
