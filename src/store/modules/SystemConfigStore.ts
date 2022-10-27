import { getLocalKey } from '@utils/index'
import { SystemConfig, ThemeModeType } from 'configs'
import { defineStore } from 'pinia'

import { ThemeKey } from '@/CONSTANT'
import defineConfig from '@/yroam.config'

export const useSystemConfigStore = defineStore('SystemConfigStore', {
  state: (): SystemConfig => {
    const DefaultSystemConfig = defineConfig()
    // 本地有主题模式修改默认配置
    const LocalThemeMode = getLocalKey(ThemeKey) as ThemeModeType
    if (LocalThemeMode) DefaultSystemConfig.ThemeMode = LocalThemeMode

    return DefaultSystemConfig
  }
})
