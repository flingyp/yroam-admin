import { createPinia } from 'pinia'

export const piniaInstance = createPinia()

export * from './modules/SystemAccountInfoStore'
export * from './modules/SystemConfigStore'
export * from './modules/SystemRouterMenuStore'
