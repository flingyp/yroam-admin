import { getLocalKey } from '@utils/index'
import { SystemConfig, ThemeModeType } from 'configs'
import { GlobalThemeOverrides } from 'naive-ui'
import { defineStore } from 'pinia'

import { getDifSceneColor } from '@store/utils/index'

import { ThemeKey, ThemePrimaryColorKey, LocalSystemConfigKey, SceneColorMap } from '@/CONSTANT'
import defineConfig from '@/yroam.config'

const InfoColorMap = getDifSceneColor(SceneColorMap.info, 'info')
const SuccessColorMap = getDifSceneColor(SceneColorMap.success, 'success')
const WarningColorMap = getDifSceneColor(SceneColorMap.warning, 'warning')
const ErrorColorMap = getDifSceneColor(SceneColorMap.error, 'error')

export const useSystemConfigStore = defineStore('SystemConfigStore', {
  state: (): SystemConfig => {
    let DefaultSystemConfig = defineConfig()
    const LocalSystemConfig = JSON.parse(getLocalKey(LocalSystemConfigKey) || '{}') as SystemConfig
    if (Object.keys(LocalSystemConfig).length !== 0) {
      DefaultSystemConfig = LocalSystemConfig
    }
    LocalSystemConfig.SettingDrawer = false
    LocalSystemConfig.SiderCollapse = false
    return DefaultSystemConfig
  },
  getters: {
    NaiveUiGlobalThemeOverrides(state): GlobalThemeOverrides {
      const PrimaryColorMap = getDifSceneColor(state.PrimaryColor, 'primary')
      return {
        common: {
          ...PrimaryColorMap,
          ...InfoColorMap,
          ...SuccessColorMap,
          ...WarningColorMap,
          ...ErrorColorMap
        }
      }
    },
    MainContainerHeight(state): string {
      return `calc(100vh - ${state.SystemViewConfig.HeaderHeight}px - ${state.SystemViewConfig.FooterHeight}px - ${state.SystemViewConfig.TabHeight}px)`
    }
  }
})
