import axios from 'axios';

const api = axios.create({
  baseURL: process.env.SUPERO_API,
});

export default api;
