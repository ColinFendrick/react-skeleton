import http from '../http-common';

const get = page => http.get(`todos/${page}`);

const service = { get };

export default service;
