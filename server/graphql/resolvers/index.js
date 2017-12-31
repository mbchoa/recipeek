import qs from 'qs';

import edamamApiClient from '../../../api-clients/edamamApi';

export default {
  Query: {
    fetchRecipes: (root, { ingredient }) =>
      edamamApiClient.get(`/search?${qs.stringify({
        q: ingredient,
        app_id: process.env.APP_ID,
        app_key: process.env.APP_KEY
      })}`).then(({ data }) => data)
  }
};
