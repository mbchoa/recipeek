import axios from 'axios';

const edamamApiClient = axios.create({
  baseURL: 'https://api.edamam.com',
  timeout: 10000
});

export default edamamApiClient;
