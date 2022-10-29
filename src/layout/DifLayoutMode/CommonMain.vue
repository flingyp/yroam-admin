<template>
  <GlobalTab></GlobalTab>
  <main class="layout-container-main" v-if="!SystemRouterMenuStore.IsReloadPage">
    <RouterView></RouterView>
  </main>
  <div class="content-loading-container" v-else>
    <NSpin :show="SystemRouterMenuStore.IsReloadPage" size="medium">
      <template #description> 重新加载中... </template>
    </NSpin>
  </div>
</template>

<script setup lang="ts">
  import GlobalTab from '@layout/LayoutComponent/GlobalTab.vue'
  import { NSpin } from 'naive-ui'

  import { useSystemRouterMenuStore } from '@store/index'

  const SystemRouterMenuStore = useSystemRouterMenuStore()
</script>

<style scoped lang="scss">
  .layout-container-main {
    padding: 10px;
    height: calc(100vh - 64px - 64px - 48px);
  }

  .content-loading-container {
    width: 100%;
    // TODO: 不能写死
    height: calc(100vh - 64px - 64px - 48px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
