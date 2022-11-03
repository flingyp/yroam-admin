import { SystemConfig } from 'configs'

export default (): SystemConfig => {
  return {
    SystemName: 'YRoam Admin',
    ThemeMode: 'LIGHT',
    LayoutMode: 'SIDER_TOP_MODE',
    SettingDrawer: false,
    SiderCollapse: false,
    PrimaryColor: '#7B1FA2',
    SiderInverted: false,
    HeaderInverted: false,
    FooterInverted: false
  }
}
