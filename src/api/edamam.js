import axios from 'axios';
import qs from 'qs';

export const search = queryString =>
  axios.get(
    `/.netlify/functions/search${qs.stringify(
      { query: queryString },
      { addQueryPrefix: true }
    )}`
  );
