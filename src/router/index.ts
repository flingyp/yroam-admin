import NProgress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalRouterHandleProcess from './GlobalRouterHandleProcess'
import { CONSTANT_ROUTERS } from './modules/CONSTANT_ROUTERS'
import { transformSystemRouteToRouteRecordRaw, initialRoute } from './utils'

NProgress.configure({ easing: 'ease', speed: 500, trickle: false })

export const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes: initialRoute(transformSystemRouteToRouteRecordRaw(CONSTANT_ROUTERS))
})

routerInstance.beforeEach(async (to, from, next) => {
  NProgress.start()
  await GlobalRouterHandleProcess(to, from, next, routerInstance)
})

routerInstance.afterEach(async () => {
  NProgress.done()
})
