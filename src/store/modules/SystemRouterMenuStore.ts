import { SystemRoute } from 'configs'
import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'

import { TabMenuKey } from '@/CONSTANT'
import { getLocalKey, setLocalKey } from '@/utils'

export interface SystemRouterMenuStoreState {
  IsMountedRouter: boolean
  IsMountedNotFoundRouter: boolean
  ConstantSystemRouters: SystemRoute[]
  AsyncSystemRouters: SystemRoute[]
  ConstantRouters: RouteRecordRaw[]
  AsyncRouters: RouteRecordRaw[]
  SystemMenus: MenuOption[]
  BreadCrumbMenus: MenuOption[]
  TabMenusKey: string[]
  IsReloadPage: boolean
}

export const useSystemRouterMenuStore = defineStore('SystemRouterMenuStore', {
  state: (): SystemRouterMenuStoreState => {
    const systemRouterMenuStoreState: SystemRouterMenuStoreState = {
      IsMountedRouter: false,
      IsMountedNotFoundRouter: false,
      ConstantSystemRouters: [],
      AsyncSystemRouters: [],
      ConstantRouters: [],
      AsyncRouters: [],
      SystemMenus: [],
      BreadCrumbMenus: [],
      TabMenusKey: [],
      IsReloadPage: false
    }

    const LocalTabMenusKey = getLocalKey(TabMenuKey)?.split(',')
    if (LocalTabMenusKey) systemRouterMenuStoreState.TabMenusKey = LocalTabMenusKey

    return systemRouterMenuStoreState
  },
  getters: {
    SystemMenuByFlat: state => {
      const Menus = state.SystemMenus
      const MenusByFlat: MenuOption[] = []
      const toFlat = (HandleMenus: MenuOption[]) => {
        HandleMenus.forEach(Menu => {
          MenusByFlat.push(Menu)

          if (Menu.children) toFlat(Menu.children)
        })
      }
      // @ts-ignore
      toFlat(Menus)
      return MenusByFlat
    },
    SystemTabMenus(state) {
      const TabMenuKeys = state.TabMenusKey
      const MenuByFlat: MenuOption[] = []
      for (let i = 0; i < TabMenuKeys.length; i++) {
        const TabMenu = this.SystemMenuByFlat.find(item => item.key === TabMenuKeys[i])
        if (TabMenu) MenuByFlat.push(TabMenu)
      }
      return MenuByFlat
    }
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
    // 生成面包屑导航菜单
    generateBreadCrumbMenus(RouteKey: string) {
      // 当前的父菜单
      let CurrentParentMenu: MenuOption = {}
      const CurrentSystemMenus = this.SystemMenus
      for (let index = 0; index < CurrentSystemMenus.length; index++) {
        const isIncludeRouteKey = this.judgeIsIncludeMenuByRouteKey(RouteKey, CurrentSystemMenus[index])
        if (isIncludeRouteKey) {
          CurrentParentMenu = CurrentSystemMenus[index]
        }
      }
      this.BreadCrumbMenus = this.getBreadCrumbMenu(RouteKey, CurrentParentMenu)
      return this.BreadCrumbMenus
    },
    // 添加一个Tab菜单
    addTabMenuKey(Key: string) {
      if (!this.TabMenusKey.includes(Key)) {
        this.TabMenusKey.push(Key)
        if (!getLocalKey(TabMenuKey)) {
          setLocalKey(TabMenuKey, Key)
        } else {
          setLocalKey(TabMenuKey, `${getLocalKey(TabMenuKey)},${Key}`)
        }
      }
    },
    // 删除一个Tab菜单
    deleteTabMenuKey(Key: string) {
      const deleteIndex = this.TabMenusKey.indexOf(Key)
      if (deleteIndex !== -1) {
        this.TabMenusKey.splice(deleteIndex, 1)
        setLocalKey(TabMenuKey, this.TabMenusKey.join(','))
      }
    }
  }
})
