import type { ColorType } from '@store/utils/index'

export const AuthKey = 'access-token' // 本地存储Token的Key名称
export const LoginRouteKey = 'LoginIndex' // 登录页的Name
export const NotFoundRouteKey = 'NotFound' // 404页面的Name
export const SystemHomeKey = 'AboutPageIndex' // 登录后跳转的和点击后台Logo旁边的Title后跳转的路由Key
export const ThemeKey = 'theme' // 本地主题 Key
export const ThemePrimaryColorKey = 'primary-color' // 本地主题色 Key
export const TabMenuKey = 'tab-menu' // 本地Tab菜单 Key
export const DefaultMenuIcon = 'Person' // 默认菜单图标
export const LocalSystemConfigKey = 'local-system-config' // 本地系统配置

// 系统用户可以自定义系统相关色值
export const SceneColorMap: Record<ColorType, string> = {
  primary: '#0071bc',
  info: '#687FFF',
  success: '#61D132',
  warning: '#FFA500',
  error: '#FF4838'
}
