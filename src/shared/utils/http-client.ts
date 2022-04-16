import axios from 'axios';

const httpAxios = axios.create({
  baseURL: 'http://localhost:4242/api/v1',
  timeout: 3000,
});

/**
 * Request interceptor
 */
httpAxios.interceptors.request.use(
  (config: any) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error: any) => {
    // TODO:
    // - Add logger
    // - Format errors to show them in the UI
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 */
httpAxios.interceptors.response.use(
  response => (response),
  error => {
    // TODO:
    // - Add logger
    // - Format errors to show them in the UI
    return Promise.reject(error);
  }
);

const get = async (url: string, options: any = {}) => {
  return await httpAxios.get(url, options);
};

const post = async (url: string, body: any, options: any = {}) => {
  return await httpAxios.post(url, body, options);
};

const put = async (url: string, body: any, options: any = {}) => {
  return await httpAxios.put(url, body, options);
};

const del = async (url: string, options: any = {}) => {
  return await httpAxios.delete(url, options);
};

export const http = {
  get,
  post,
  put,
  del,
};
