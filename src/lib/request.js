import axios from 'axios';

const _defaultHeaders = {
  'Content-Type': 'application/json; charset=UTF-8'
};

function _request(method = 'GET', path, params = {}, headers = {}) {
  let defaultHeaders = Object.assign({}, _defaultHeaders, headers);
  let axiosParams = Object.assign({}, params);
  let baseURL = 'https://private-93240c-oracodechallenge.apiary-mock.com'
  let url = baseURL + path
  let options = {
    method,
    url,
    headers: defaultHeaders,
    timeout: 30000,
  };
  if (method.toUpperCase() === 'GET') {
    options.params = axiosParams;
  } else {
    options.data = axiosParams;
  }

  return axios(options);
}

export function get(path, params, headers) {
  return _request('GET', path, params, headers);
}

export function patch(path, params, headers) {
  return _request('PATCH', path, params, headers);
}

export function post(path, params, headers) {
  return _request('POST', path, params, headers);
}

export function remove(path, params, headers) {
  return _request('DELETE', path, params, headers);
}

