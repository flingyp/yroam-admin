import { createRouter, createWebHashHistory } from 'vue-router'
import { CONSTANT_ROUTERS } from './modules/CONSTANT_ROUTERS'
import { transformSystemRouteToRouteRecordRaw } from './utils'

export const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes: transformSystemRouteToRouteRecordRaw(CONSTANT_ROUTERS)
})
