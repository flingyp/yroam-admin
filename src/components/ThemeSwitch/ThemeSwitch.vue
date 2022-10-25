<template>
  <div @click="switchThemeMode" v-if="CurrentThemeMode === 'LIGHT'">
    <ViconsIcon icon="PartlySunnyOutline"></ViconsIcon>
  </div>
  <div @click="switchThemeMode" v-if="CurrentThemeMode === 'DARK'">
    <ViconsIcon icon="MoonOutline"></ViconsIcon>
  </div>
</template>

<script setup lang="ts">
  import { useSwitchTheme } from '@hooks/index'
  import { useSystemConfigStore } from '@store/index'
  import { computed } from 'vue'

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

<script lang="ts">
  export default {
    name: 'ThemeSwitch'
  }
</script>
