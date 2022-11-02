import { useCommonType } from '@flypeng/tool'
import { userInfoHttp } from '@https/SystemHttps'
import {
  SystemAccountInfoStoreState,
  SystemRouterMenuStoreState,
  useSystemAccountInfoStore,
  useSystemRouterMenuStore
} from '@store/index'
import { getLocalKey } from '@utils/LocalStorage'
import { SystemRoute } from 'configs'
import { cloneDeep } from 'lodash'
import { Store } from 'pinia'
import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { ASYNC_ROUTERS } from './modules/ASYNC_ROUTERS'
import { CONSTANT_ROUTERS, RedirectNotFoundRoute } from './modules/CONSTANT_ROUTERS'
import { filterRoutes, generateSystemMenu, mountRoute, transform, transformSystemRouteToRouteRecordRaw } from './utils'

import { AuthKey, LoginRouteKey, NotFoundRouteKey, SystemHomeKey } from '@/CONSTANT'

// TODO: 白名单后期放置在系统配置中
const WhiteRouteList: string[] = [LoginRouteKey, NotFoundRouteKey]

// TODO: 后期需要在文档中接受相关逻辑

/**
 * 路由处理生成菜单处理程序
 *  1. 获取用户信息
 *  2. 筛选异步系统路由
 *  3. 转换为VueRouter路由
 *  3. 挂载路由
 *  4. 生成菜单
 *  5. 初始化相关状态管理
 */
const routeHandleGenerateMenuProcess = async (
  SystemRouterMenuStore: Store<'SystemRouterMenuStore', SystemRouterMenuStoreState, {}, {}>,
  SystemAccountInfoStore: Store<'SystemAccountInfoStore', SystemAccountInfoStoreState, {}, {}>,
  RouterInstance: Router
) => {
  // 1. 获取用户信息
  const responseUserInfo = await userInfoHttp()

  let Permissions: string[] = []

  if (responseUserInfo) {
    SystemAccountInfoStore.user = responseUserInfo
    Permissions = responseUserInfo.permissions ? responseUserInfo.permissions : []
  }

  // TODO: 判断当前项目是前端控制路由权限还是后端控制（目前默认是前端控制路由）

  // 2. 筛选异步路由
  let SystemAsyncRouters: SystemRoute[] = []

  SystemAsyncRouters = cloneDeep(ASYNC_ROUTERS)

  // 2.1 过滤成功的系统异步路由
  const FilterSuccessAsyncRouters = filterRoutes(SystemAsyncRouters, Permissions)

  // 3. 转换为VueRouter路由
  const TransformToAsyncRouters = transformSystemRouteToRouteRecordRaw(FilterSuccessAsyncRouters)
  const TransformToConstantRouters = transformSystemRouteToRouteRecordRaw(CONSTANT_ROUTERS)

  // 3. 挂载路由
  TransformToAsyncRouters.forEach(AsyncRoute => {
    // TODO: 过滤掉外链的路由不让被挂载
    mountRoute(AsyncRoute, RouterInstance)
  })

  // 4. 生成菜单
  const GenerateSuccessSystemMenu = generateSystemMenu([...TransformToConstantRouters, ...TransformToAsyncRouters])

  // 5. 初始化相关状态管理商店
  SystemRouterMenuStore.AsyncSystemRouters = FilterSuccessAsyncRouters
  SystemRouterMenuStore.ConstantSystemRouters = CONSTANT_ROUTERS
  SystemRouterMenuStore.AsyncRouters = TransformToAsyncRouters
  SystemRouterMenuStore.ConstantRouters = TransformToConstantRouters
  // @ts-ignore
  SystemRouterMenuStore.SystemMenus = GenerateSuccessSystemMenu
}

/**
 * 路由全局控制守卫：
 * 1. 有Token的情况
 *  1. 第一次从登录页登录后存在Token，挂载异步路由
 *  2. 页面刷新后存在Token, 需要重新挂载异步路由
 *  3. 不可以手动修改URL跳转登陆页面
 *  4. 正常的页面跳转
 * 2. 没有Token的情况
 *  1. 没有Token前提 查询要跳转的页面是否是不需要Token的，如果需要返回到登录页面
 *  2. 没有Token前提 查询要跳转的页面是否是不需要Token的，如果不需要这进入该页面
 */
export default async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  RouterInstance: Router
) => {
  const SystemRouterMenuStore = useSystemRouterMenuStore()
  const SystemAccountInfoStore = useSystemAccountInfoStore()

  // 本地存储的AccessToken
  const UserLocalToken = getLocalKey(AuthKey)?.trim()

  // 1.0 有AccessToken的情况
  if (!useCommonType.isUndefined(UserLocalToken)) {
    if (from.name === LoginRouteKey && to.name !== LoginRouteKey) {
      // 1.0.1 从登录页跳转进来
      if (!SystemRouterMenuStore.IsMountedRouter) {
        await routeHandleGenerateMenuProcess(SystemRouterMenuStore, SystemAccountInfoStore, RouterInstance)
        SystemRouterMenuStore.IsMountedRouter = true
        next({ path: to.fullPath, replace: true })
      }
    } else if (from.name === undefined && to.name !== LoginRouteKey) {
      // 1.0.2 不是从登录页来的，去的也不是登录页（场景：刷新页面的情况）
      if (!SystemRouterMenuStore.IsMountedRouter) {
        await routeHandleGenerateMenuProcess(SystemRouterMenuStore, SystemAccountInfoStore, RouterInstance)
        SystemRouterMenuStore.IsMountedRouter = true
        next({ path: to.fullPath, replace: true })
      }
    } else if (to.name === LoginRouteKey) {
      // 1.0.3 想手动跳转登录页面，返回到指定页面
      next({ name: SystemHomeKey })
    }

    if (!SystemRouterMenuStore.IsMountedNotFoundRouter) {
      mountRoute(transform(RedirectNotFoundRoute), RouterInstance)
      SystemRouterMenuStore.IsMountedNotFoundRouter = true
    }

    next()
  } else {
    // 1.1：没有AccessToken的情况
    // 1.1.1：判断是否配置了白名单，如果配置了直接放行
    const isAccess = WhiteRouteList.includes(to.name as string)
    // 1.1.2：没有配置白名单，跳转到登录页面
    if (isAccess) {
      next()
    } else {
      next({ name: LoginRouteKey })
    }
  }
}
