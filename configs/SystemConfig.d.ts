export type ThemeModeType = 'LIGHT' | 'DARK'
export type LayoutModeType = 'TOP_MODE' | 'TOP_SIDER_MODE' | 'SIDER_TOP_MODE'
export type HandleRouteType = 'WEB' | 'SERVER'

/**
 * 系统设置
 */
export interface SystemConfig {
  SystemName: string // 系统名称
  ThemeMode: ThemeModeType // 主题模式
  LayoutMode: LayoutModeType // 布局模式
  SettingDrawer: boolean // 系统设置抽屉是否打开
  SiderCollapse: boolean // 左侧侧边栏是否打开
  PrimaryColor: string // 主题颜色
  SiderInverted: boolean // 侧边栏是否反转色
  HeaderInverted: boolean // 头部栏是否反转色
  FooterInverted: boolean // 底部栏是否反转色
  HeaderHeight: number // 顶部高度
  SiderWidth: number // 侧边栏宽度
  FooterHeight: number // 底部高度
  TabHeight: number // Tab栏高度
  TabIsFixed: boolean // Tab是否固定
  RouteTransitionAnimation: string // 页面切换动画
}
