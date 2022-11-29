<template>
  <IconPark icon="setting-two" :size="16" style="cursor: pointer" @click="toggleDrawer"></IconPark>
</template>

<script setup lang="ts">
  import { useSystemConfigStore } from '@store/index'

  const SystemConfigStore = useSystemConfigStore()

  const toggleDrawer = () => {
    SystemConfigStore.SettingDrawer = true
  }
</script>
