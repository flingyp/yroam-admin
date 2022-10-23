import { getLocalKey } from '@utils/index'
import { SystemConfig, ThemeModeType } from 'configs'
import { defineStore } from 'pinia'
import defineConfig from '../../yroam.config'

export const useSystemConfigStore = defineStore('SystemConfigStore', {
  state: (): SystemConfig => {
    const DefaultSystemConfig = defineConfig()
    // TODO: theme Key值不能写死
    // 本地有主题模式修改默认配置
    const LocalThemeMode = getLocalKey('theme') as ThemeModeType
    if (LocalThemeMode) DefaultSystemConfig.ThemeMode = LocalThemeMode

    return DefaultSystemConfig
  }
})
