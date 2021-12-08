import axios from 'axios';

const { REACT_APP_API_URL, REACT_APP_API_LOCAL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export default api;
