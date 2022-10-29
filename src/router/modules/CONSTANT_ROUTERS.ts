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
  },
  {
    path: '/common',
    name: 'PermissionCommon',
    component: 'Layout',
    children: [
      {
        path: '',
        name: 'PermissionCommonIndex',
        component: '@pages/Permission/CommonIndex.vue',
        meta: {
          label: '均可访问权限页面'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: 'Layout',
    children: [
      {
        path: '',
        name: 'AboutPageIndex',
        component: '@pages/SystemAbout.vue',
        meta: {
          label: '关于',
          icon: 'Bookmarks'
        }
      }
    ]
  },
  {
    path: '/naive',
    name: 'NaiveUI-Component',
    component: 'Layout',
    children: [
      {
        path: 'component',
        name: 'NaiveUI-ComponentIndex',
        component: '@pages/NaiveComponent.vue',
        meta: {
          label: 'NaiveUI 示例',
          icon: 'LogoWebComponent'
        }
      }
    ]
  },
  {
    path: '/common',
    name: 'Common-Page',
    component: 'Layout',
    meta: {
      label: '常用页面'
    },
    children: [
      {
        path: '404',
        name: 'Common-NotFound',
        component: '@pages/Common/NotFound.vue',
        meta: {
          label: '404 页面',
          icon: 'FileExclamationOutlined'
        }
      },
      {
        path: '500',
        name: 'Common-ServeError',
        component: '@pages/Common/ServeError.vue',
        meta: {
          label: '500 页面',
          icon: 'ErrorFilled'
        }
      }
    ]
  }
]
