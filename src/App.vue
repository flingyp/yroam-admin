<template>
  <NNotificationProvider>
    <NConfigProvider :theme="ThemeMode" :theme-overrides="SystemConfigStore.NaiveUiGlobalThemeOverrides">
      <Suspense>
        <NMessageProvider>
          <RouterView></RouterView>
        </NMessageProvider>
      </Suspense>
    </NConfigProvider>
  </NNotificationProvider>
</template>

<script setup lang="ts">
  import { useSwitchTheme } from '@hooks/index'
  import { useSystemConfigStore } from '@store/index'
  import type { GlobalTheme } from 'naive-ui'
  import { darkTheme, NConfigProvider, NMessageProvider, NNotificationProvider } from 'naive-ui'
  import { computed } from 'vue'

  const SystemConfigStore = useSystemConfigStore()

  const { getThemeMode, setThemeMode } = useSwitchTheme()

  const ThemeMode = computed<GlobalTheme | null>(() => {
    if (SystemConfigStore.ThemeMode === 'LIGHT') return null
    return darkTheme
  })

  setThemeMode(getThemeMode())
</script>

<style scoped></style>
