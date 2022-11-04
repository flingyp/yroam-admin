import { getLocalKey } from '@utils/index';
import { SystemConfig, ThemeModeType } from 'configs';
import { GlobalThemeOverrides } from 'naive-ui';
import { defineStore } from 'pinia';

import { getDifSceneColor } from '@store/utils/index';

import { ThemeKey, ThemePrimaryColorKey } from '@/CONSTANT';
import defineConfig from '@/yroam.config';

const InfoColorMap = getDifSceneColor('#687FFF', 'info');
const SuccessColorMap = getDifSceneColor('#61D132', 'success');
const WarningColorMap = getDifSceneColor('#FFA500', 'warning');
const ErrorColorMap = getDifSceneColor('#FF4838', 'error');

export const useSystemConfigStore = defineStore('SystemConfigStore', {
  state: (): SystemConfig => {
    const DefaultSystemConfig = defineConfig();
    // 本地有主题模式修改默认配置
    const LocalThemeMode = getLocalKey(ThemeKey) as ThemeModeType;
    if (LocalThemeMode) DefaultSystemConfig.ThemeMode = LocalThemeMode;
    // 本地有主题色值缓存修改默认配置
    const LocalThemePrimaryColor = getLocalKey(ThemePrimaryColorKey);
    if (LocalThemePrimaryColor) DefaultSystemConfig.PrimaryColor = LocalThemePrimaryColor;

    return DefaultSystemConfig;
  },
  getters: {
    NaiveUiGlobalThemeOverrides(state): GlobalThemeOverrides {
      const PrimaryColorMap = getDifSceneColor(state.PrimaryColor, 'primary');
      return {
        common: {
          ...PrimaryColorMap,
          ...InfoColorMap,
          ...SuccessColorMap,
          ...WarningColorMap,
          ...ErrorColorMap,
        },
      };
    },
  },
});
