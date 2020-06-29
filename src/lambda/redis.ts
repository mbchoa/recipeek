import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient({
  port: process.env.REACT_APP_REDIS_PORT,
  host: process.env.REACT_APP_REDIS_HOST,
  password: process.env.REACT_APP_REDIS_PASSWORD
});

/**
 * Returns the expected key from Redis cache based on input parameters.
 *
 * Eg: { from: 100, query: 'pizza', to: 200 } => 'pizza:100-200'
 */
type GetKeyParams = {
  from: number;
  query: string;
  to: string;
};
export const getKey = ({ from, query, to }: GetKeyParams): string =>
  `${query}:${from}-${to}`;

/**
 * Returns Promise-ified version of the native Redis client's .get() method.
 */
export const redisGet = promisify(client.get).bind(client);

export default client;
