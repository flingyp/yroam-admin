<template>
  <GlobalTab></GlobalTab>
  <main class="layout-container-main" v-if="!SystemRouterMenuStore.IsReloadPage">
    <RouterView style="padding: 10px" v-slot="{ Component, route }">
      <Transition :name="SystemConfigStore.SystemViewConfig.RouteTransitionAnimation" mode="out-in" appear>
        <KeepAlive>
          <CommonIframe v-if="$route.meta.link === 'INTERNAL_LINK'"></CommonIframe>
          <Component v-else :is="Component" :key="route.path"></Component>
        </KeepAlive>
      </Transition>
    </RouterView>
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
  import { ref } from 'vue'

  import { useSystemRouterMenuStore, useSystemConfigStore } from '@store/index'
  import CommonIframe from './CommonIframe.vue'

  const SystemConfigStore = useSystemConfigStore()
  const SystemRouterMenuStore = useSystemRouterMenuStore()

  const ContainerHeight = ref(SystemConfigStore.MainContainerHeight)
</script>

<style scoped>
  .content-loading-container {
    width: 100%;
    height: v-bind(ContainerHeight);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
