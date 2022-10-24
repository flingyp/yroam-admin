import { Router, RouteRecordRaw } from 'vue-router'

/**
 * 挂载路由
 * @param route
 * @param routerInstance
 */
export const mountRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  routerInstance.addRoute(route)
}

/**
 * 移除路由
 * @param route
 * @param routerInstance
 */
export const removeRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  routerInstance.removeRoute(route.name!)
}
