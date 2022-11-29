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
    path: '/404',
    name: 'NotFound',
    component: '@pages/Common/NotFound.vue',
    meta: {
      isShow: false
    }
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
          icon: 'all-application',
          single: true
        }
      }
    ]
  },
  {
    path: '/naive',
    name: 'NaiveUI-Component',
    component: 'Layout',
    meta: {
      label: '组件示例',
      icon: 'components'
    },
    children: [
      {
        path: 'component',
        name: 'NaiveUI-ComponentIndex',
        component: '@pages/NaiveComponent.vue',
        meta: {
          label: 'NaiveUI 示例'
        }
      },
      {
        path: 'echarts',
        name: 'Echarts-ComponentContainer',
        component: '@pages/Echarts/EchartsContainer.vue',
        meta: {
          label: 'Echarts图标'
        },
        children: [
          {
            path: 'pie',
            name: 'Echarts-PieChart',
            component: '@pages/Echarts/CommonChart.vue',
            meta: {
              label: '常用图表'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/common',
    name: 'Common-Page',
    component: 'Layout',
    meta: {
      label: '常用页面',
      icon: 'page'
    },
    children: [
      {
        path: '404',
        name: 'Common-NotFound',
        component: '@pages/Common/NotFound.vue',
        meta: {
          label: '404 页面'
        }
      },
      {
        path: '500',
        name: 'Common-ServeError',
        component: '@pages/Common/ServeError.vue',
        meta: {
          label: '500 页面'
        }
      },
      {
        path: 'table',
        name: 'Common-Table',
        component: '@pages/Common/CommonDataTable.vue',
        meta: {
          label: '数据表格'
        }
      }
    ]
  },
  {
    path: '/docs',
    name: 'Docs-Page',
    component: 'Layout',
    meta: {
      label: '相关文档',
      icon: 'bill'
    },
    children: [
      {
        path: 'vite',
        name: 'Vite-Vue',
        meta: {
          label: 'Vite中文文档',
          link: 'INTERNAL_LINK',
          url: 'https://cn.vitejs.dev'
        }
      },
      {
        path: 'vue',
        name: 'Docs-Vue',
        meta: {
          label: 'Vue.js中文文档',
          link: 'INTERNAL_LINK',
          url: 'https://cn.vuejs.org'
        }
      },
      {
        path: 'naive',
        name: 'Naive-Vue',
        meta: {
          label: 'NaiveUI文档（外链）',
          link: 'EXTERNAL_LINK',
          url: 'https://www.naiveui.com'
        }
      }
    ]
  },
  {
    path: '/multi-menu',
    name: 'Multi--Menu',
    component: 'Layout',
    meta: {
      label: '多级菜单',
      icon: 'list-add'
    },
    children: [
      {
        path: 'secondary-menu-1',
        name: 'SecondaryMenu1',
        component: '@pages/MultiMenu/SecondaryMenu-1.vue',
        meta: {
          label: '二级菜单-1'
        },
        children: [
          {
            path: 'third-menu-1-1',
            name: 'ThirdMenu1-1',
            component: '@pages/MultiMenu/ThirdMenu-1-1.vue',
            meta: {
              label: '三级级菜单-1-1'
            }
          },
          {
            path: 'third-menu-1-2',
            name: 'ThirdMenu1-2',
            component: '@pages/MultiMenu/ThirdMenu-1-2.vue',
            meta: {
              label: '三级级菜单-1-2'
            }
          }
        ]
      },
      {
        path: 'secondary-menu-2',
        name: 'SecondaryMenu2',
        component: '@pages/MultiMenu/SecondaryMenu-2.vue',
        meta: {
          label: '二级菜单-2'
        }
      }
    ]
  }
]

export const RedirectNotFoundRoute: SystemRoute = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  name: 'CatchAll',
  meta: {
    isShow: false
  }
}
