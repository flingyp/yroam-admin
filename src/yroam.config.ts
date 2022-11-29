import { HandleRouteType, SystemConfig } from '@configs'
import { LoginRouteKey, NotFoundRouteKey, SceneColorMap } from '@/CONSTANT'

// 系统白名单路由列表
export const WhiteRouteList: string[] = [LoginRouteKey, NotFoundRouteKey]
// 系统异步路由控制方式
export const HandleRoute: HandleRouteType = 'WEB'

// 系统设置
export default (): SystemConfig => ({
  SystemName: 'YRoam Admin',
  ThemeMode: 'LIGHT',
  LayoutMode: 'SIDER_TOP_MODE',
  PrimaryColor: SceneColorMap.primary,
  SystemViewConfig: {
    SiderInverted: false,
    HeaderInverted: false,
    FooterInverted: false,
    TabIsFixed: true,
    HeaderHeight: 64,
    SiderWidth: 272,
    FooterHeight: 64,
    TabHeight: 44,
    RouteTransitionAnimation: 'fade'
  },
  SettingDrawer: false,
  SiderCollapse: false
})
