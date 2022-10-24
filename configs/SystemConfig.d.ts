export type ThemeModeType = 'LIGHT' | 'DARK'
export type LayoutModeType = 'TOP_MODE' | 'TOP_SIDER_MODE' | 'SIDER_TOP_MODE'

export interface SystemConfig {
  ThemeMode: ThemeModeType
  LayoutMode: LayoutModeType
}
