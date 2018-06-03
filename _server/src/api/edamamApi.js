import axios from 'axios';

const edamamApiClient = axios.create({
  baseURL: 'https://api.edamam.com',
});

export default edamamApiClient;
