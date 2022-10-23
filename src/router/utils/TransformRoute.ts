import { SystemRoute } from 'configs'
import { cloneDeep } from 'lodash'
import { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router'
import { globFileModule } from '.'

const transform = (Route: SystemRoute): RouteRecordRaw => {
  // @ts-expect-error
  const CurrentRouteRecordRaw: RouteRecordRaw = {
    path: Route.path,
    name: Route.name,
    meta: Route.meta,
    component: globFileModule(Route.component as string),
    redirect: Route.redirect as RouteRecordRedirectOption
  }
  if (Route.children) {
    // eslint-disable-next-line no-use-before-define
    CurrentRouteRecordRaw.children = transformSystemRouteToRouteRecordRaw(Route.children)
  }
  return CurrentRouteRecordRaw
}

export const transformSystemRouteToRouteRecordRaw = (SystemRoutes: SystemRoute[]): RouteRecordRaw[] => {
  const SystemRouteClone = cloneDeep(SystemRoutes)
  const SystemRouteRecordRaw: RouteRecordRaw[] = []

  SystemRouteClone.forEach(Route => {
    SystemRouteRecordRaw.push(transform(Route))
  })

  return SystemRouteRecordRaw
}
