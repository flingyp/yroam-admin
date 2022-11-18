import { HandleRouteType, SystemConfig } from '@configs'
import { LoginRouteKey, NotFoundRouteKey } from '@/CONSTANT'

// 系统白名单路由列表
export const WhiteRouteList: string[] = [LoginRouteKey, NotFoundRouteKey]
// 系统异步路由控制方式
export const HandleRoute: HandleRouteType = 'WEB'

// 系统设置
export default (): SystemConfig => ({
  SystemName: 'YRoam Admin',
  ThemeMode: 'LIGHT',
  LayoutMode: 'SIDER_TOP_MODE',
  SettingDrawer: false,
  SiderCollapse: false,
  PrimaryColor: '#7B1FA2',
  SiderInverted: false,
  HeaderInverted: false,
  FooterInverted: false,
  HeaderHeight: 64,
  SiderWidth: 272,
  FooterHeight: 64,
  TabHeight: 44,
  TabIsFixed: true,
  RouteTransitionAnimation: 'fade'
})
