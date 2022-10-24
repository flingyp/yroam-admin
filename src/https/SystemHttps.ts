import { getLocalKey, httpRequest } from '@utils/index'
import { SystemRoute } from 'configs'

interface UserLoginResponse {
  token: string
}

/**
 * 用户登录
 * @param username
 * @param password
 * @returns
 */
export const userLoginHttp = async (username: string, password: string) => {
  const response = await httpRequest<UserLoginResponse>({
    url: '/auth/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
  if (response.code === 200) return response.data
  return null
}

interface UserInfo {
  id?: number
  username?: string
  nickname?: string
  birthday?: string
  roles?: Array<string>
  permissions?: Array<string>
}

/**
 * 获取用户信息
 * @returns
 */
export const userInfoHttp = async () => {
  const response = await httpRequest<UserInfo>({
    url: '/auth/info',
    method: 'post',
    headers: {
      token: getLocalKey('access-token') as string
    }
  })
  if (response.code === 200) return response.data
  return null
}

/**
 * 获取异步路由表
 * @returns
 */
export const userAsyncRouters = async () => {
  const response = await httpRequest<SystemRoute[]>({
    url: '/auth/asyncRouters',
    method: 'post',
    headers: {
      token: getLocalKey('access-token') as string
    }
  })
  if (response.code === 200) return response.data
  return null
}
