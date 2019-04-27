import axios from 'axios';
import apiConfig from './apiConfig';
import errorHandler from './apiErrorHandler';
import AuthService from './authService';

axios.defaults.baseURL = `${apiConfig.apiUrl}`;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = apiConfig.contentType;
axios.defaults.headers.put['Content-Type'] = apiConfig.contentType;

axios.interceptors.request.use(async (config) => {
  const token = await AuthService.getClientToken();
  if (token) {
    config.headers['auth-type'] = 'Token';
    config.headers.Authorization = token.getJwtToken();
  }
  return config;
});

axios.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    const errorResponse = errorHandler(error.response);

    return Promise.reject(errorResponse);
  }
);

export const apiService = axios;
