import axios, { AxiosRequestConfig } from 'axios';

// TODO: 目前HttpRequest对于Axios的封装只是简单的处理了下，后期需要完整的封装

interface ResponseData<T> {
  code: number
  message: string
  data: T
}

export const axiosInstance = axios.create({
  baseURL: '/dev',
  timeout: 5000,
  withCredentials: false,
});

/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export const httpRequest = async <T>(config: AxiosRequestConfig): Promise<ResponseData<T>> => await axiosInstance.request<any, ResponseData<T>>(config);
