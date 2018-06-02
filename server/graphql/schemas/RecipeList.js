import qs from 'qs';
import { map } from 'lodash';

import edamamApiClient from '../../../api-clients/edamamApi';

export const typeDef = `
  extend type Query {
    recipes(ingredient: String): RecipeList
  }

  type RecipeList {
    q: String,
    from: Int,
    to: Int
    count: Int,
    more: Boolean,
    results: [Recipe]
  }
`;

export const resolvers = {
  Query: {
    recipes: (root, { ingredient }) =>
      edamamApiClient.get(`/search?${qs.stringify({
        q: ingredient,
        app_id: process.env.APP_ID,
        app_key: process.env.APP_KEY
      })}`).then(({ data }) => data)
  },
  RecipeList: {
    results: ({ hits }) => map(hits, ({ recipe }) => recipe),
  },
}
