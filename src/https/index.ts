export * from './modules';
export * from './request';

// 统一响应数据结构
export interface HttpResponse<T> {
  code: number | string
  msg: string
  data: T
}
