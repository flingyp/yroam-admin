<template>
  <NDrawer
    v-model:show="SystemConfigStore.SettingDrawer"
    :width="400"
    :placement="placement"
    native-scrollbar
    @after-leave="closeDrawerAfter"
  >
    <NDrawerContent title="系统设置" closable>
      <GlobalSettingContainer title="系统名称">
        <NInput
          v-model:value="SystemConfigStore.SystemName"
          type="text"
          placeholder="系统名称"
          style="width: 130px; text-align: center"
        />
      </GlobalSettingContainer>

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
          <NButton
            class="overflow-hidden"
            v-for="item in LayoutItemsArray"
            :key="item.key"
            :type="SystemConfigStore.LayoutMode === item.key ? 'primary' : 'tertiary'"
            @click="changeLayoutMode(item.key)"
            >{{ item.value }}</NButton
          >
        </div>
      </GlobalSettingContainer>

      <GlobalSettingContainer title="系统主题色">
        <div>
          <div class="global-primary-container">
            <span
              v-for="(item, index) in PrimaryColorList"
              :key="index"
              :style="{ backgroundColor: item }"
              :class="[SystemConfigStore.PrimaryColor === item ? 'primary-active' : '']"
              @click="modifyPrimaryColor(item)"
            ></span>
          </div>
          <NColorPicker :value="SystemConfigStore.PrimaryColor" size="small" @update:value="modifyPrimaryColor">
          </NColorPicker>
        </div>
      </GlobalSettingContainer>

      <GlobalSettingContainer title="系统界面配置">
        <div class="global-page-container">
          <div class="global-page-item">
            <span>侧边栏反转色</span>
            <NSwitch v-model:value="SystemConfigStore.SystemViewConfig.SiderInverted"></NSwitch>
          </div>
          <div class="global-page-item">
            <span>顶部栏反转色</span>
            <NSwitch v-model:value="SystemConfigStore.SystemViewConfig.HeaderInverted"></NSwitch>
          </div>
          <div class="global-page-item">
            <span>底部栏反转色</span>
            <NSwitch v-model:value="SystemConfigStore.SystemViewConfig.FooterInverted"></NSwitch>
          </div>
          <div class="global-page-item">
            <span>Tab栏是否固定</span>
            <NSwitch v-model:value="SystemConfigStore.SystemViewConfig.TabIsFixed"></NSwitch>
          </div>
          <div class="global-page-item">
            <span>顶部栏高度</span>
            <NInputNumber
              v-model:value="SystemConfigStore.SystemViewConfig.HeaderHeight"
              placeholder="Min 44, Max 84"
              :min="44"
              :max="84"
            />
          </div>
          <div class="global-page-item">
            <span>侧边栏宽度</span>
            <NInputNumber
              v-model:value="SystemConfigStore.SystemViewConfig.SiderWidth"
              placeholder="Min 220, Max 320"
              :min="220"
              :max="320"
            />
          </div>
          <div class="global-page-item">
            <span>底部栏高度</span>
            <NInputNumber
              v-model:value="SystemConfigStore.SystemViewConfig.FooterHeight"
              placeholder="Min 44, Max 84"
              :min="44"
              :max="84"
            />
          </div>
          <div class="global-page-item">
            <span>Tab栏高度</span>
            <NInputNumber
              v-model:value="SystemConfigStore.SystemViewConfig.TabHeight"
              placeholder="Min 40, Max 60"
              :min="40"
              :max="60"
            />
          </div>
          <div class="global-page-item">
            <span>页面切换动画</span>
            <NSelect
              v-model:value="SystemConfigStore.SystemViewConfig.RouteTransitionAnimation"
              :options="PageTransitionOptions"
            ></NSelect>
          </div>
        </div>
      </GlobalSettingContainer>

      <GlobalSettingContainer title="拷贝系统配置">
        <div class="global-setting-copy-button">
          <NButton type="info" @click="CopySystemConfig">拷贝系统配置</NButton>
          <NButton @click="ResetSystemConfig">重置系统配置</NButton>
        </div>
      </GlobalSettingContainer>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
  import type { DrawerPlacement } from 'naive-ui'
  import {
    NButton,
    NColorPicker,
    NDrawer,
    NDrawerContent,
    NSwitch,
    NInputNumber,
    NSelect,
    NInput,
    useMessage
  } from 'naive-ui'
  import { computed, ref } from 'vue'

  import { useSwitchTheme } from '@hooks/index'
  import { useSystemConfigStore } from '@store/index'
  import { setLocalKey } from '@utils/index'
  import { LayoutModeType, SystemConfig } from '@configs'
  import { useCopyContent, useDeepClone } from '@flypeng/tool'
  import GlobalSettingContainer from './GlobalSettingContainer.vue'
  import { ThemeKey, ThemePrimaryColorKey } from '@/CONSTANT'

  const placement = ref<DrawerPlacement>('right')

  const SystemConfigStore = useSystemConfigStore()
  const { setThemeMode } = useSwitchTheme()
  const message = useMessage()

  const closeDrawerAfter = () => {
    if (SystemConfigStore.SettingDrawer) {
      SystemConfigStore.SettingDrawer = false
    }
  }

  // 主题模式
  const ThemeModeActive = computed(() => SystemConfigStore.ThemeMode === 'DARK')
  const changeThemeMode = (value: boolean) => {
    if (value) setThemeMode('DARK')
    else setThemeMode('LIGHT')
  }

  // 布局模式
  const LayoutItemsArray: { key: LayoutModeType; value: string }[] = [
    {
      key: 'SIDER_TOP_MODE',
      value: '左侧菜单'
    },
    {
      key: 'TOP_MODE',
      value: '顶部菜单'
    },
    {
      key: 'TOP_SIDER_MODE',
      value: '顶部菜单混合'
    }
  ]
  const changeLayoutMode = (mode: LayoutModeType) => {
    SystemConfigStore.LayoutMode = mode
  }

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
    '#607d8b'
  ]

  const modifyPrimaryColor = (value: string) => {
    SystemConfigStore.PrimaryColor = value
    setLocalKey(ThemePrimaryColorKey, value)
  }

  // 页面切换动画选项
  const PageTransitionOptions = [
    {
      label: '消退',
      value: 'fade'
    },
    {
      label: '滑动消退',
      value: 'fade-slide'
    },
    {
      label: '向下滑动消退',
      value: 'fade-bottom'
    },
    {
      label: '向上滑动消退',
      value: 'fade-top'
    },
    {
      label: '放大消退',
      value: 'fade-scale'
    },
    {
      label: '缩放消退',
      value: 'zoom-fade'
    },
    {
      label: '缩放弹出',
      value: 'zoom-out'
    }
  ]

  // 拷贝系统配置
  const CopySystemConfig = () => {
    const SystemConfigContent: SystemConfig = useDeepClone(SystemConfigStore.$state)
    SystemConfigContent.SettingDrawer = false
    SystemConfigContent.SiderCollapse = false
    useCopyContent(JSON.stringify(SystemConfigContent))
    message.success('复制成功，将剪贴板上的内容粘贴至 yroam.config.ts 系统配置中')
  }

  // 重置系统配置
  const ResetSystemConfig = () => {
    const DefaultSystemConfig: SystemConfig = {
      SystemName: 'YRoam Admin',
      ThemeMode: 'LIGHT',
      LayoutMode: 'SIDER_TOP_MODE',
      PrimaryColor: '#7B1FA2',
      SystemViewConfig: {
        SiderInverted: false,
        HeaderInverted: false,
        FooterInverted: false,
        TabIsFixed: true,
        HeaderHeight: 64,
        SiderWidth: 272,
        FooterHeight: 64,
        TabHeight: 44,
        RouteTransitionAnimation: 'fade'
      },
      SettingDrawer: false,
      SiderCollapse: false
    }
    DefaultSystemConfig.SettingDrawer = true
    // 设置明亮主题
    setThemeMode('LIGHT')
    setLocalKey(ThemePrimaryColorKey, DefaultSystemConfig.PrimaryColor)
    SystemConfigStore.$state = DefaultSystemConfig
    message.success('系统配置已重置为默认配置，如需要替换当前配置请重新拷贝')
  }
</script>

<style scoped lang="scss">
  .n-input-number {
    width: 130px;
  }
  .n-select {
    width: 130px;
  }

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

    & > span {
      display: inline-block;
      width: 26px;
      height: 26px;
      cursor: pointer;
      border-radius: 4px;
    }

    & > .primary-active {
      position: relative;
    }

    & > .primary-active::after {
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

  .global-setting-copy-button {
    width: 100%;
    display: flex;
    flex-direction: column;

    & > .n-button:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
