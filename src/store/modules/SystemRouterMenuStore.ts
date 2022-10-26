import { SystemRoute } from 'configs'
import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'

export interface SystemRouterMenuStoreState {
  IsMountedRouter: boolean
  ConstantSystemRouters: SystemRoute[]
  AsyncSystemRouters: SystemRoute[]
  ConstantRouters: RouteRecordRaw[]
  AsyncRouters: RouteRecordRaw[]
  SystemMenus: MenuOption[]
  BreadCrumbMenus: MenuOption[]
}

export const useSystemRouterMenuStore = defineStore('SystemRouterMenuStore', {
  state: (): SystemRouterMenuStoreState => {
    const systemRouterMenuStoreState: SystemRouterMenuStoreState = {
      IsMountedRouter: false,
      ConstantSystemRouters: [],
      AsyncSystemRouters: [],
      ConstantRouters: [],
      AsyncRouters: [],
      SystemMenus: [],
      BreadCrumbMenus: []
    }
    return systemRouterMenuStoreState
  },
  actions: {
    // 判断当前的RouteKey是否包含在此Menu中
    judgeIsIncludeMenuByRouteKey(RouteKey: string, Menu: MenuOption): boolean {
      if (Menu.key === RouteKey) return true
      if (Menu.children) {
        return Menu.children.some(ChildMenu => {
          return this.judgeIsIncludeMenuByRouteKey(RouteKey, ChildMenu)
        })
      }
      return false
    },
    // 获取面包屑导航菜单
    getBreadCrumbMenu(RouteKey: string, ParentMenu: MenuOption) {
      const CurrentThis = this
      const BreadCrumbMenu: MenuOption[] = []
      BreadCrumbMenu.push(ParentMenu)
      const getTheseMenuByKey = (menu: MenuOption) => {
        if (menu.children) {
          menu.children.forEach(item => {
            if (CurrentThis.judgeIsIncludeMenuByRouteKey(RouteKey, item)) {
              BreadCrumbMenu.push(item)
              getTheseMenuByKey(item)
            }
          })
        }
      }
      getTheseMenuByKey(ParentMenu)
      return BreadCrumbMenu
    },
    generateBreadCrumbMenus(RouteKey: string) {
      // 当前的父菜单
      let CurrentParentMenu: MenuOption = {}
      const CurrentSystemMenus = this.SystemMenus
      for (let index = 0; index < CurrentSystemMenus.length; index++) {
        // @ts-expect-error
        const isIncludeRouteKey = this.judgeIsIncludeMenuByRouteKey(RouteKey, CurrentSystemMenus[index])
        if (isIncludeRouteKey) {
          CurrentParentMenu = CurrentSystemMenus[index]
        }
      }
      this.BreadCrumbMenus = this.getBreadCrumbMenu(RouteKey, CurrentParentMenu)
      return this.BreadCrumbMenus
    }
  }
})
