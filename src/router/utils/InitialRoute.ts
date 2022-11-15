import { RouteRecordRaw } from 'vue-router'

// 主要作用：处理静态路由挂载前需要处理的事情
export const initialRoute = (Routes: RouteRecordRaw[]) => {
  const InitialRoutes: RouteRecordRaw[] = []
  Routes.forEach(Route => {
    if (Route.children && Route.children.length > 0) {
      Route.children = initialRoute(Route.children)
    }
    if (Route.meta?.link === 'EXTERNAL_LINK') return
    InitialRoutes.push(Route)
  })
  return InitialRoutes
}
