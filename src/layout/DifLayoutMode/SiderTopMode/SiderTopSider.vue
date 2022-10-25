<template>
  <div>
    <GlobalMenu :menuOptions="SystemRouterMenuStore.SystemMenus"></GlobalMenu>
  </div>
</template>

<script setup lang="ts">
  import GlobalMenu from '@layout/LayoutComponent/GlobalMenu.vue'
  import { useSystemRouterMenuStore } from '@store/index'

  const SystemRouterMenuStore = useSystemRouterMenuStore()
</script>
