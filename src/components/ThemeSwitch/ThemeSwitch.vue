<template>
  <div @click="switchThemeMode" v-if="CurrentThemeMode === 'LIGHT'">
    <IconPark icon="sun" :size="14" />
  </div>
  <div @click="switchThemeMode" v-if="CurrentThemeMode === 'DARK'">
    <IconPark icon="moon" :size="14"></IconPark>
  </div>
</template>

<script setup lang="ts">
  import { useSwitchTheme } from '@hooks/index'
  import { useSystemConfigStore } from '@store/index'
  import { computed } from 'vue'

  defineOptions({ name: 'ThemeSwitch' })

  const SystemConfigStore = useSystemConfigStore()
  const { getThemeMode, setThemeMode } = useSwitchTheme()

  const switchThemeMode = () => {
    if (getThemeMode() === 'LIGHT') {
      setThemeMode('DARK')
    } else {
      setThemeMode('LIGHT')
    }
  }

  const CurrentThemeMode = computed(() => SystemConfigStore.ThemeMode)
</script>
