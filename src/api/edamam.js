import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: `https://api.edamam.com`,
  timeout: 5000
});

export const search = queryString =>
  client.get(
    `/search${qs.stringify(
      {
        app_id: process.env.REACT_APP_RECIPEEK_APP_ID,
        app_key: process.env.REACT_APP_RECIPEEK_APP_KEY,
        q: queryString
      },
      { addQueryPrefix: true }
    )}`
  );
