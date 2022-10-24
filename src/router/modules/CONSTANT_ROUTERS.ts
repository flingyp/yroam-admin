import { SystemRoute } from 'configs'

// TODO: 在编写路由配置的时候 component 是用 @pages/ 的方式，但是是没有IDEA路径提示的，所以这一点需要在文档声明的

export const CONSTANT_ROUTERS: SystemRoute[] = [
  {
    path: '/login',
    name: 'LoginIndex',
    component: '@pages/Login/LoginIndex.vue',
    meta: {
      isShow: false
    }
  }
]