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
}

export const useSystemRouterMenuStore = defineStore('SystemRouterMenuStore', {
  state: (): SystemRouterMenuStoreState => {
    const systemRouterMenuStoreState: SystemRouterMenuStoreState = {
      IsMountedRouter: false,
      ConstantSystemRouters: [],
      AsyncSystemRouters: [],
      ConstantRouters: [],
      AsyncRouters: [],
      SystemMenus: []
    }
    return systemRouterMenuStoreState
  },
  actions: {}
})
