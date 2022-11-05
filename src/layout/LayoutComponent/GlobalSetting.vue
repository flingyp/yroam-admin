<template>
  <NDrawer v-model:show="SystemConfigStore.SettingDrawer" :width="400" :placement="placement" native-scrollbar
    @after-leave="closeDrawerAfter">
    <NDrawerContent title="系统设置" closable>
      <GlobalSettingContainer title="主题模式">
        <div>
          <NSwitch v-model:value="ThemeModeActive" size="medium" @update:value="changeThemeMode">
            <template #checked>
              <ViconsIcon icon="MoonOutline" source="ionicons5" :size="16"></ViconsIcon>
            </template>
            <template #unchecked>
              <ViconsIcon icon="PartlySunnyOutline" source="ionicons5" :size="16"></ViconsIcon>
            </template>
          </NSwitch>
        </div>
      </GlobalSettingContainer>

      <GlobalSettingContainer title="系统布局模式">
        <div class="global-setting-layout-container">
          <NButton class="overflow-hidden" v-for="item in LayoutItemsArray" :key="item.key"
            :type="SystemConfigStore.LayoutMode === item.key ? 'primary' : 'tertiary'"
            @click="changeLayoutMode(item.key)">{{ item.value }}</NButton>
        </div>
      </GlobalSettingContainer>

      <GlobalSettingContainer title="系统主题色">
        <div>
          <div class="global-primary-container">
            <span v-for="(item, index) in PrimaryColorList" :key="index" :style="{ backgroundColor: item }"
              :class="[SystemConfigStore.PrimaryColor === item ? 'primary-active' : '']"
              @click="modifyPrimaryColor(item)"></span>
          </div>
          <NColorPicker :value="SystemConfigStore.PrimaryColor" size="small" @update:value="modifyPrimaryColor">
          </NColorPicker>
        </div>
      </GlobalSettingContainer>

      <GlobalSettingContainer title="系统界面功能">
        <div class="global-page-container">
          <div class="global-page-item">
            <span>侧边栏反转色</span>
            <NSwitch v-model:value="SystemConfigStore.SiderInverted"></NSwitch>
          </div>
          <div class="global-page-item">
            <span>顶部栏反转色</span>
            <NSwitch v-model:value="SystemConfigStore.HeaderInverted"></NSwitch>
          </div>
          <div class="global-page-item">
            <span>底部栏反转色</span>
            <NSwitch v-model:value="SystemConfigStore.FooterInverted"></NSwitch>
          </div>
          <div class="global-page-item">
            <span>Tab栏是否固定</span>
            <NSwitch v-model:value="SystemConfigStore.TabIsFixed"></NSwitch>
          </div>
          <div class="global-page-item">
            <span>顶部栏高度</span>
            <NInputNumber v-model:value="SystemConfigStore.HeaderHeight" placeholder="Min 44, Max 84" :min="44"
              :max="84" />
          </div>
          <div class="global-page-item">
            <span>侧边栏宽度</span>
            <NInputNumber v-model:value="SystemConfigStore.SiderWidth" placeholder="Min 220, Max 320" :min="220"
              :max="320" />
          </div>
          <div class="global-page-item">
            <span>底部栏高度</span>
            <NInputNumber v-model:value="SystemConfigStore.FooterHeight" placeholder="Min 44, Max 84" :min="44"
              :max="84" />
          </div>
          <div class="global-page-item">
            <span>Tab栏高度</span>
            <NInputNumber v-model:value="SystemConfigStore.TabHeight" placeholder="Min 40, Max 60" :min="40"
              :max="60" />
          </div>
        </div>
      </GlobalSettingContainer>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
import type { DrawerPlacement } from 'naive-ui';
import {
    NButton, NColorPicker, NDrawer, NDrawerContent, NSwitch, NInputNumber,
} from 'naive-ui';
import { computed, ref } from 'vue';

import { useSwitchTheme } from '@hooks/index';
import { useSystemConfigStore } from '@store/index';
import { setLocalKey } from '@utils/index';
import { LayoutModeType } from 'configs';
import GlobalSettingContainer from './GlobalSettingContainer.vue';

import { ThemePrimaryColorKey } from '@/CONSTANT';

const placement = ref<DrawerPlacement>('right');

const SystemConfigStore = useSystemConfigStore();
const { setThemeMode } = useSwitchTheme();

const closeDrawerAfter = () => {
    if (SystemConfigStore.SettingDrawer) {
        SystemConfigStore.SettingDrawer = false;
    }
};

// 主题模式
const ThemeModeActive = computed(() => SystemConfigStore.ThemeMode === 'DARK');
const changeThemeMode = (value: boolean) => {
    if (value) setThemeMode('DARK');
    else setThemeMode('LIGHT');
};

// 布局模式
const LayoutItemsArray: { key: LayoutModeType, value: string }[] = [
    {
        key: 'SIDER_TOP_MODE',
        value: '左侧菜单',
    },
    {
        key: 'TOP_MODE',
        value: '顶部菜单',
    },
    {
        key: 'TOP_SIDER_MODE',
        value: '顶部菜单混合',
    },
];

const changeLayoutMode = (mode: LayoutModeType) => {
    SystemConfigStore.LayoutMode = mode;
};

// 系统主题色
const PrimaryColorList = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#9e9e9e',
    '#607d8b',
];

const modifyPrimaryColor = (value: string) => {
    SystemConfigStore.PrimaryColor = value;
    setLocalKey(ThemePrimaryColorKey, value);
};
</script>

<style scoped lang="scss">
.global-setting-layout-container {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 8px 8px;
}

.global-primary-container {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px 10px;

  &>span {
    display: inline-block;
    width: 26px;
    height: 26px;
    cursor: pointer;
    border-radius: 4px;
  }

  &>.primary-active {
    position: relative;
  }

  &>.primary-active::after {
    content: '✓';
    position: absolute;
    color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.global-page-container {
  width: 100%;

  .global-page-item {
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
