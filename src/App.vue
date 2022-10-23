<template>
  <NConfigProvider :theme="ThemeMode">
    <Suspense>
      <NMessageProvider>
        <RouterView></RouterView>
      </NMessageProvider>
    </Suspense>
    <!-- <NButton @click="toggleThemeMode">切换主题</NButton> -->
  </NConfigProvider>
</template>

<script setup lang="ts">
  import { useSwitchTheme } from '@hooks/index'
  import { useSystemConfigStore } from '@store/index'
  import type { GlobalTheme } from 'naive-ui'
  import { darkTheme, NConfigProvider, NMessageProvider } from 'naive-ui'
  import { computed } from 'vue'

  const SystemConfigStore = useSystemConfigStore()

  const { getThemeMode, setThemeMode } = useSwitchTheme()

  const ThemeMode = computed<GlobalTheme | null>(() => {
    if (SystemConfigStore.ThemeMode === 'LIGHT') return null
    return darkTheme
  })

  const toggleThemeMode = () => {
    if (getThemeMode() === 'LIGHT') {
      setThemeMode('DARK')
    } else {
      setThemeMode('LIGHT')
    }
  }
  setThemeMode(getThemeMode())
</script>

<style scoped></style>
