import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

import { failData, successData } from './util'

const MockRandom = Mock.Random

/**
 * 用户登录
 * @param username
 * @param password
 * @returns
 */
const SysUserLogin = (username: string, password: string) => {
  if (username === 'admin' && password === '123456') {
    return successData({
      token: 'admin-token'
    })
  }
  if (username === 'user' && password === '123456') {
    return successData({
      token: 'user-token'
    })
  }
  return failData('用户名或密码错误')
}

/**
 * 用户信息
 * @param token
 * @returns
 */
const SysUserInfo = (token: string) => {
  // 超级管理员
  if (token === 'admin-token') {
    return successData({
      id: MockRandom.id(),
      username: 'admin',
      nickname: '超级管理员',
      birthday: MockRandom.date(),
      roles: ['admin'],
      permissions: ['sys:root:*']
    })
  }
  if (token === 'user-token') {
    return successData({
      id: MockRandom.id(),
      username: 'user',
      nickname: '普通用户',
      birthday: MockRandom.date(),
      roles: ['user'],
      permissions: ['sys:user:*']
    })
  }
  return failData('token错误')
}

/**
 * 用户路由
 * @param token
 */
const SysUserRouters = (token: string) => {
  if (token === 'admin-token') {
    return successData([
      {
        path: '/permission',
        name: 'Permission',
        component: 'Layout',
        meta: {
          label: '前端权限测试',
          icon: 'material-AccessAlarmOutlined'
        },
        children: [
          {
            path: 'user',
            name: 'Permission-User',
            component: '@pages/Permission/UserIndex.vue',
            meta: {
              label: '普通用户权限页面',
              permissions: ['sys:user:*']
            }
          },
          {
            path: 'role',
            name: 'Permission-Role',
            component: '@pages/Permission/RoleIndex.vue',
            meta: {
              label: '超级管理员权限页面',
              permissions: ['sys:root:*'],
              icon: 'ionicons5-BagCheck'
            }
          },
          {
            path: 'button',
            name: 'Permission-Button',
            component: '@pages/Permission/ButtonIndex.vue',
            meta: {
              label: '按钮级权限指令控制'
            }
          }
        ]
      }
    ])
  }

  if (token === 'user-token') {
    return successData([
      {
        path: '/permission',
        name: 'Permission',
        component: 'Layout',
        meta: {
          label: '前端权限测试'
        },
        children: [
          {
            path: 'user',
            name: 'Permission-User',
            component: '@pages/Permission/UserIndex.vue',
            meta: {
              label: '普通用户权限页面',
              permissions: ['sys:user:*']
            }
          },
          {
            path: 'role',
            name: 'Permission-Role',
            component: '@pages/Permission/RoleIndex.vue',
            meta: {
              label: '超级管理员权限页面',
              permissions: ['sys:root:*']
            }
          },
          {
            path: 'button',
            name: 'Permission-Button',
            component: '@pages/Permission/ButtonIndex.vue',
            meta: {
              label: '按钮级权限指令控制'
            }
          }
        ]
      }
    ])
  }
  return failData('token错误')
}

export default [
  {
    url: '/dev/auth/login',
    method: 'post',
    response: ({ body }: any) => SysUserLogin(body.username, body.password)
  },
  {
    url: '/dev/auth/info',
    method: 'post',
    response: ({ headers }: any) => SysUserInfo(headers.token)
  },
  {
    url: '/dev/auth/asyncRouters',
    method: 'post',
    response: ({ headers }: any) => SysUserRouters(headers.token)
  }
] as MockMethod[]
