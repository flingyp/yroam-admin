import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const RequestInterceptor = (config: AxiosRequestConfig<any>) => config;

export const RequestErrorInterceptor = (error: any) => {
    console.log('请求错误拦截器->', error);
};

export const ResponseInterceptor = (response: AxiosResponse<any, any>) => {
    if (response.status === 200 && response.statusText === 'OK') return response.data.data;
    return null;
};

export const ResponseErrorInterceptor = (error: any) => {
    console.log('响应错误拦截器->', error);
};
