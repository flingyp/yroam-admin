import LayoutContainer from '@layout/BasicLayout/LayoutContainer.vue'
import { SystemRoute } from 'configs'
import { cloneDeep } from 'lodash'
import { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router'
import { globFileModule } from '.'

/**
 * 转换函数 SystemRoute => RouteRecordRaw
 * @param Route
 * @returns
 */
const transform = (Route: SystemRoute): RouteRecordRaw => {
  // @ts-expect-error
  const CurrentRouteRecordRaw: RouteRecordRaw = {
    path: Route.path,
    name: Route.name,
    meta: Route.meta,
    // TODO: 没有定义的页面，统一返回404组件
    component: globFileModule(Route.component as string),
    redirect: Route.redirect as RouteRecordRedirectOption
  }

  if (Route.children) {
    // eslint-disable-next-line no-use-before-define
    CurrentRouteRecordRaw.children = transformSystemRouteToRouteRecordRaw(Route.children)
  }

  if (Route.component === 'Layout') {
    CurrentRouteRecordRaw.component = LayoutContainer
  }

  return CurrentRouteRecordRaw
}

/**
 * 转换路由 SystemRoute[] => RouteRecordRaw[]
 * @param SystemRoutes
 * @returns
 */
export const transformSystemRouteToRouteRecordRaw = (SystemRoutes: SystemRoute[]): RouteRecordRaw[] => {
  const SystemRouteClone = cloneDeep(SystemRoutes)
  const SystemRouteRecordRaw: RouteRecordRaw[] = []

  SystemRouteClone.forEach(Route => {
    SystemRouteRecordRaw.push(transform(Route))
  })

  return SystemRouteRecordRaw
}
