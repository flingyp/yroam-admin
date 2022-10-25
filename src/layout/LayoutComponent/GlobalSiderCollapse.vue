<template>
  <ViconsIcon
    icon="MenuUnfoldOutlined"
    v-if="SystemConfigStore.SiderCollapse"
    :size="18"
    @click="toggleSiderCollapse(false)"
  ></ViconsIcon>
  <ViconsIcon icon="MenuFoldOutlined" v-else :size="18" @click="toggleSiderCollapse(true)"></ViconsIcon>
</template>

<script setup lang="ts">
  import { useSystemConfigStore } from '@store/index'

  const SystemConfigStore = useSystemConfigStore()

  const toggleSiderCollapse = (value: boolean) => {
    SystemConfigStore.SiderCollapse = value
  }
</script>
