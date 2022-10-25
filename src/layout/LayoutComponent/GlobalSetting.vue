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
              <ViconsIcon icon="Moon"></ViconsIcon>
            </template>
            <template #unchecked>
              <ViconsIcon icon="PartlySunny"></ViconsIcon>
            </template>
          </NSwitch>
        </div>
      </GlobalSettingContainer>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
  import type { DrawerPlacement } from 'naive-ui'
  import { NDrawer, NDrawerContent, NSwitch } from 'naive-ui'
  import { computed, ref } from 'vue'

  import { useSwitchTheme } from '@hooks/index'
  import { useSystemConfigStore } from '@store/index'
  import GlobalSettingContainer from './GlobalSettingContainer.vue'

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
</script>
