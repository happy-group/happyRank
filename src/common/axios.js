/**
 * 公共http接口拦截
 */

import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// http请求拦截
http.interceptors.request.use(request => {
  return request
}, error => {
  return Promise.reject(error)
})

// http响应拦截
http.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default http
