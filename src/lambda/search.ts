import axios, { AxiosInstance } from 'axios';
import qs from 'qs';

const client: AxiosInstance = axios.create({
  baseURL: 'https://api.edamam.com',
  timeout: 5000
});

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
      body: JSON.stringify(data.hits)
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
