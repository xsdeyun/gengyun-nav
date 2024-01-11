import axios from 'axios'
import { appConfig } from '@/config/app.config';
import { resReject, resResolve } from './interceptors'

export  function request(config) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // 根据实际情况修改
    timeout: appConfig.timeout // 请求超时时间
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config
  }, error => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error)
  })

  // 响应拦截器
  instance.interceptors.response.use(resResolve, resReject)

  // 发送真正的网络请求
  return instance(config)
}