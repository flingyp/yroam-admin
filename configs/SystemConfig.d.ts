export type ThemeModeType = 'LIGHT' | 'DARK'
export type LayoutModeType = 'TOP_MODE' | 'TOP_SIDER_MODE' | 'SIDER_TOP_MODE'
export type HandleRouteType = 'WEB' | 'SERVER'

/**
 * 系统界面配置
 */
interface SystemViewConfigType {
  SiderInverted: boolean // 侧边栏是否反转色
  HeaderInverted: boolean // 头部栏是否反转色
  FooterInverted: boolean // 底部栏是否反转色
  TabIsFixed: boolean // Tab是否固定
  HeaderHeight: number // 顶部高度
  SiderWidth: number // 侧边栏宽度
  FooterHeight: number // 底部高度
  TabHeight: number // Tab栏高度
  RouteTransitionAnimation: string // 页面切换动画
}

/**
 * 系统设置
 */
export interface SystemConfig {
  SystemName: string // 系统名称
  ThemeMode: ThemeModeType // 主题模式
  LayoutMode: LayoutModeType // 布局模式
  PrimaryColor: string // 主题颜色
  SystemViewConfig: SystemViewConfigType
  SettingDrawer: boolean // 系统设置抽屉是否打开（默认false）
  SiderCollapse: boolean // 左侧侧边栏是否打开（默认false）
}
