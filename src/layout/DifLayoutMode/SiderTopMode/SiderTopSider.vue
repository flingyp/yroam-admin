<template>
  <div>
    <GlobalLogoTitle style="height: 64px"></GlobalLogoTitle>
    <GlobalMenu :menuOptions="SystemRouterMenuStore.SystemMenus"></GlobalMenu>
  </div>
</template>

<script setup lang="ts">
  import GlobalLogoTitle from '@layout/LayoutComponent/GlobalLogoTitle.vue'
  import GlobalMenu from '@layout/LayoutComponent/GlobalMenu.vue'
  import { useSystemRouterMenuStore } from '@store/index'

  const SystemRouterMenuStore = useSystemRouterMenuStore()
</script>
