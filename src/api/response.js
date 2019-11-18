import axios from 'axios'
axios.defaults.baseURL = '/api'

// 请求拦截
axios.interceptors.request.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
  return Promise.reject(error);
});

export default {
  get(url,params={}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      })
    })
  },
  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      })
    })
  }
}