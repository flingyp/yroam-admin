<template>
  <div>
    <button @click="SystemConfigStore.ThemeMode = 'LIGHT'">切换白天</button>
    <button @click="SystemConfigStore.ThemeMode = 'DARK'">切换暗黑</button>
  </div>
</template>

<script setup lang="ts">
  import { useSystemConfigStore } from '@store/index'

  const SystemConfigStore = useSystemConfigStore()
</script>
