import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'
import {
  RequestInterceptor,
  RequestErrorInterceptor,
  ResponseInterceptor,
  ResponseErrorInterceptor
} from './Interceptors'

// TODO: 根据不同环境配置不同的Config，创建不同Axios实例
export class YRequest {
  private _AxiosInstance: AxiosInstance

  constructor(AxiosConfig: CreateAxiosDefaults) {
    this._AxiosInstance = axios.create(AxiosConfig)
    this.mountInterceptor()
  }

  private mountInterceptor() {
    this._AxiosInstance.interceptors.request.use(RequestInterceptor, RequestErrorInterceptor)
    this._AxiosInstance.interceptors.response.use(ResponseInterceptor, ResponseErrorInterceptor)
  }

  getRequestInstance() {
    return this._AxiosInstance
  }
}

export const YAxiosInstance = new YRequest({ baseURL: '/dev', timeout: 5000 }).getRequestInstance()
