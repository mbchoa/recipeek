import { partial } from 'lodash';

import search from './search';

export default function createApiClient({ request }) {
  return {
    search: partial(search, request),
  };
}
