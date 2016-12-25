import { partial } from 'lodash';

import search from './search';

export default function createApiClient({ fetch }) {
  return {
    search: partial(search, fetch),
  };
}
