import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  // baseURL: 'http://192.168.0.103:8080',
  timeout: 10000
})

instance.interceptors.request.use(config => {
  return config
}, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

// 封装一个http请求
type ReturnType<T> = {
  http: Promise<T>,
  abort: () => void
}
// 这里只是用来测试abort方法的
export const httpRequest1 = <T>(options: AxiosRequestConfig): ReturnType<T> => {
  const controller = new AbortController()

  return {
    http: instance.request({
      ...options,
      signal: controller.signal
    }),
    abort: () => controller.abort()
  }
}

export const httpRequest = <T>(options: AxiosRequestConfig): Promise<T> => {
  return instance.request({
    ...options,
  })
}
