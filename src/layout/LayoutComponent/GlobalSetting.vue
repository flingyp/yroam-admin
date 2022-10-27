<template>
  <NDrawer
    v-model:show="SystemConfigStore.SettingDrawer"
    :width="400"
    :placement="placement"
    native-scrollbar
    @after-leave="closeDrawerAfter"
  >
    <NDrawerContent title="系统设置" closable>
      <GlobalSettingContainer title="主题模式">
        <div>
          <NSwitch v-model:value="ThemeModeActive" size="medium" @update:value="changeThemeMode">
            <template #checked>
              <ViconsIcon icon="MoonOutline" :size="16"></ViconsIcon>
            </template>
            <template #unchecked>
              <ViconsIcon icon="PartlySunnyOutline" :size="16"></ViconsIcon>
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
        <NColorPicker
          :defaultValue="SystemConfigStore.PrimaryColor"
          size="small"
          @update:value="modifyPrimaryColor"
        ></NColorPicker>
      </GlobalSettingContainer>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
  import type { DrawerPlacement } from 'naive-ui'
  import { NButton, NColorPicker, NDrawer, NDrawerContent, NSwitch } from 'naive-ui'
  import { computed, ref } from 'vue'

  import { useSwitchTheme } from '@hooks/index'
  import { useSystemConfigStore } from '@store/index'
  import { setLocalKey } from '@utils/index'
  import { LayoutModeType } from 'configs'
  import GlobalSettingContainer from './GlobalSettingContainer.vue'

  import { ThemePrimaryColorKey } from '@/CONSTANT'

  const placement = ref<DrawerPlacement>('right')

  const SystemConfigStore = useSystemConfigStore()
  const { setThemeMode } = useSwitchTheme()

  const closeDrawerAfter = () => {
    if (SystemConfigStore.SettingDrawer) {
      SystemConfigStore.SettingDrawer = false
    }
  }

  // 主题模式
  const ThemeModeActive = computed(() => SystemConfigStore.ThemeMode === 'DARK')
  const changeThemeMode = (value: boolean) => {
    if (value) {
      setThemeMode('DARK')
    } else {
      setThemeMode('LIGHT')
    }
  }

  // 布局模式
  const LayoutItemsArray: {
    key: LayoutModeType
    value: string
  }[] = [
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
  const modifyPrimaryColor = (value: string) => {
    SystemConfigStore.PrimaryColor = value
    setLocalKey(ThemePrimaryColorKey, value)
  }
</script>

<style scoped lang="scss">
  .global-setting-layout-container {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 8px 8px;
  }
</style>
