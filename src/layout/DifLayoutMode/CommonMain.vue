<template>
  <GlobalTab></GlobalTab>
  <main class="layout-container-main" v-if="!SystemRouterMenuStore.IsReloadPage">
    <!-- TODO: iframe外链 -->
    <iframe v-if="route.meta.link === 'INTERNAL_LINK'" :src="route.meta.url"></iframe>
    <RouterView v-else></RouterView>
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
  import { useRoute } from 'vue-router'

  import { useSystemRouterMenuStore } from '@store/index'

  const route = useRoute()
  const SystemRouterMenuStore = useSystemRouterMenuStore()
</script>

<style scoped lang="scss">
  .layout-container-main {
    padding: 8px;
  }

  .content-loading-container {
    width: 100%;
    // TODO: 不能写死
    height: calc(100vh - 64px - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  iframe {
    width: 100%;
    height: calc(100vh - 64px - 64px);
    border-radius: 4px;
  }
</style>
