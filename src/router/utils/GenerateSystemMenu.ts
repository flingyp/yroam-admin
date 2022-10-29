import { renderIcon } from '@components/index'
import { cloneDeep } from 'lodash'
import { MenuOption } from 'naive-ui'
import { RouteRecordRaw } from 'vue-router'

import { DefaultMenuIcon } from '@/CONSTANT'

/**
 * 生成菜单方法
 * @param routes
 * @returns
 */
export const generateSystemMenu = (routes: RouteRecordRaw[]): MenuOption[] => {
  const menus: MenuOption[] = []
  routes.forEach(route => {
    if (route.meta?.isShow === undefined || route.meta.isShow === true) {
      const menu: MenuOption = {}
      let handleRoute = cloneDeep(route)
      if (handleRoute.children && handleRoute.children.length > 1) {
        menu.children = generateSystemMenu(handleRoute.children)
      } else if (handleRoute.children && handleRoute.children.length === 1) {
        // 处理单一路由
        // eslint-disable-next-line prefer-destructuring
        handleRoute = handleRoute.children[0]
      }
      menu.label = handleRoute.meta?.label
      menu.key = handleRoute.name as string
      menu.icon = renderIcon(handleRoute.meta?.icon || DefaultMenuIcon)

      menus.push(menu)
    }
  })
  return menus
}
