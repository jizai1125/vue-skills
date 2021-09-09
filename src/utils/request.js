import axios from 'axios'
import store from '@/store'
const baseApi = 'https://jizai.com/api'

const instance = axios.create({
  baseURL: baseApi,
 // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(function(config) {
  // todo 在发送之前做些什么

  const source = store.getters.axiosCancelSource
  if(source) {
    config.cancelToken = source.token
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function(response) {
  // todo 对响应数据做点什么
  return response
}, function (error) {
  return Promise.reject(error)
})