<template>
  <IconPark
    icon="menu-fold-one"
    v-if="SystemConfigStore.SiderCollapse"
    :size="18"
    @click="toggleSiderCollapse(false)"
  />
  <IconPark icon="menu-unfold-one" v-else :size="18" @click="toggleSiderCollapse(true)" />
</template>

<script setup lang="ts">
  import { useSystemConfigStore } from '@store/index'

  const SystemConfigStore = useSystemConfigStore()

  const toggleSiderCollapse = (value: boolean) => {
    SystemConfigStore.SiderCollapse = value
  }
</script>
