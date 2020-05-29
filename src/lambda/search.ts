import axios, { AxiosInstance } from 'axios';
import qs from 'qs';

import { EdamamHit } from '../types/edamam';
import redis, { redisGet, getKey } from './redis';
import { BATCH_RECIPE_FETCH_SIZE } from '../enums/app';

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

const handleError = (err: Error) => {
  // output to netlify function log
  console.log(err);
  return {
    statusCode: 500,
    body: JSON.stringify(err.message)
  };
};

export async function handler(event: any) {
  // default the from and to values here to properly generate a Redis key
  const {
    from = 0,
    query,
    to = BATCH_RECIPE_FETCH_SIZE
  } = event.queryStringParameters;

  // get Redis key based on query params
  const redisKey = getKey({ from, query, to });

  // check if API query exists in Redis cache
  try {
    const value: string = await redisGet(redisKey);
    if (value) {
      return {
        statusCode: 200,
        body: value
      };
    }
  } catch (err) {
    return handleError(err);
  }

  // Redis cache missed, fetch data from API endpoint and cache response
  try {
    const { data } = await client.get(
      `/search${qs.stringify(
        {
          app_id: process.env.REACT_APP_RECIPEEK_APP_ID,
          app_key: process.env.REACT_APP_RECIPEEK_APP_KEY,
          q: query,
          from,
          to
        },
        { addQueryPrefix: true }
      )}`,
      { headers: { Accept: 'application/json' } }
    );

    // cache API response
    const formattedData: string = JSON.stringify(formatHitsData(data.hits));
    redis.setex(redisKey, 2678400, formattedData);

    return {
      statusCode: 200,
      body: formattedData
    };
  } catch (err) {
    return handleError(err);
  }
}
