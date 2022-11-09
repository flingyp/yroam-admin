export type ThemeModeType = 'LIGHT' | 'DARK'
export type LayoutModeType = 'TOP_MODE' | 'TOP_SIDER_MODE' | 'SIDER_TOP_MODE'

export interface SystemConfig {
  SystemName: string
  ThemeMode: ThemeModeType
  LayoutMode: LayoutModeType
  SettingDrawer: boolean
  SiderCollapse: boolean
  PrimaryColor: string
  SiderInverted: boolean
  HeaderInverted: boolean
  FooterInverted: boolean
  HeaderHeight: number
  SiderWidth: number
  FooterHeight: number
  TabHeight: number
  TabIsFixed: boolean
  WhiteRouteList: string[]
}
