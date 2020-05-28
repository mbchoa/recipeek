import axios from 'axios';
import qs from 'qs';

export const search = ({ from, queryString, to }) =>
  axios.get(
    `/.netlify/functions/search${qs.stringify(
      {
        from,
        query: queryString,
        to
      },
      { addQueryPrefix: true }
    )}`
  );
