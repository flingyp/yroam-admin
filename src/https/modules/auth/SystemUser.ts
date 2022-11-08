import { YAxiosInstance } from '@https/index'
import { getLocalKey } from '@utils/index'
import { SystemRoute } from '@configs'
import { AuthKey } from '@/CONSTANT'

enum SystemUser_URL {
  UserLogin = '/auth/login',
  UserInfo = '/auth/info',
  UserAsyncRouters = '/auth/asyncRouters'
}

/**
 * 用户登录
 */
export interface UserLoginRes {
  token: string
}
export const fetchUserLogin = async (username: string, password: string) => {
  const HttpResponse = await YAxiosInstance.request<any, UserLoginRes>({
    url: SystemUser_URL.UserLogin,
    method: 'POST',
    data: {
      username,
      password
    }
  })
  return HttpResponse
}

/**
 * 用户信息
 */
export interface UserInfoRes {
  id?: number
  username?: string
  nickname?: string
  birthday?: string
  roles?: Array<string>
  permissions?: Array<string>
}
export const fetchUserInfo = async () => {
  const HttpResponse = await YAxiosInstance.request<any, UserInfoRes>({
    url: SystemUser_URL.UserInfo,
    method: 'POST',
    headers: {
      token: getLocalKey(AuthKey) as string
    }
  })
  return HttpResponse
}

/**
 * 获取异步路由表
 */
export const fetchUserAsyncRouters = async () => {
  const HttpResponse = await YAxiosInstance.request<any, SystemRoute[]>({
    url: SystemUser_URL.UserAsyncRouters,
    method: 'POST',
    headers: {
      token: getLocalKey(AuthKey) as string
    }
  })
  return HttpResponse
}
