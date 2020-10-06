import axios from 'axios';

const api = axios.create({
  baseURL: 'http://biblioteca.supero.com.br/api',
});

export default api;
