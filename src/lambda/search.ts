import axios, { AxiosInstance } from 'axios';
import qs from 'qs';

import { EdamamHit } from '../types/edamam';

const client: AxiosInstance = axios.create({
  baseURL: 'https://api.edamam.com',
  timeout: 5000
});

const extractIdFromUri = (uri: string): string => {
  const tokenized = uri.split('_');
  return tokenized[tokenized.length - 1];
};

const formatHitsData = (hits: EdamamHit[]) => {
  return hits.map(hit => ({
    ...hit,
    recipe: {
      ...hit.recipe,
      id: extractIdFromUri(hit.recipe.uri)
    }
  }));
};

export async function handler(event: any) {
  const { query } = event.queryStringParameters;
  try {
    const { data } = await client.get(
      `/search${qs.stringify(
        {
          app_id: process.env.REACT_APP_RECIPEEK_APP_ID,
          app_key: process.env.REACT_APP_RECIPEEK_APP_KEY,
          q: query
        },
        { addQueryPrefix: true }
      )}`,
      { headers: { Accept: 'application/json' } }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(formatHitsData(data.hits))
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
