<template>
  <!-- 'TOP_MODE' | 'TOP_SIDER_MODE' | 'SIDER_TOP_MODE' -->
  <NLayout :has-sider="isSiderTopMode">
    <NLayoutHeader bordered v-if="isTopMode || isTopSiderMode">
      <slot name="header">默认头部</slot>
    </NLayoutHeader>

    <NLayoutSider bordered collapse-mode="width" :collapsed="SystemConfigStore.SiderCollapse" v-if="isSiderTopMode">
      <slot name="sider">默认侧边栏</slot>
    </NLayoutSider>

    <NLayoutContent bordered v-if="isTopMode">
      <slot name="content">默认内容</slot>
    </NLayoutContent>

    <NLayout v-if="!isTopMode" :has-sider="isTopSiderMode">
      <NLayoutHeader bordered v-if="isSiderTopMode">
        <slot name="header">默认头部</slot>
      </NLayoutHeader>

      <NLayoutSider bordered collapse-mode="width" :collapsed="SystemConfigStore.SiderCollapse" v-if="isTopSiderMode">
        <slot name="sider">默认侧边栏</slot>
      </NLayoutSider>

      <NLayoutContent bordered v-if="isTopSiderMode || isSiderTopMode">
        <slot name="content">默认内容</slot>
      </NLayoutContent>

      <NLayoutFooter bordered v-if="isSiderTopMode">
        <slot name="footer">默认底部</slot>
      </NLayoutFooter>
    </NLayout>

    <NLayoutFooter bordered v-if="isTopMode || isTopSiderMode">
      <slot name="footer">默认底部</slot>
    </NLayoutFooter>
  </NLayout>
</template>

<script setup lang="ts">
  import { useSystemConfigStore } from '@store/index'
  import { NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider } from 'naive-ui'
  import { computed, ref } from 'vue'

  const SystemConfigStore = useSystemConfigStore()

  const isTopMode = computed(() => SystemConfigStore.LayoutMode === 'TOP_MODE')
  const isTopSiderMode = computed(() => SystemConfigStore.LayoutMode === 'TOP_SIDER_MODE')
  const isSiderTopMode = computed(() => SystemConfigStore.LayoutMode === 'SIDER_TOP_MODE')

  const isHeaderHeight = ref(64)
  const isFooterHeight = ref(64)

  const isSiderHeight = computed(() => {
    if (isTopSiderMode.value) return `calc(100vh - ${isHeaderHeight.value}px - ${isFooterHeight.value}px)`
    if (isSiderTopMode.value) return `100vh`
    return 0
  })

  const isContentHeight = computed(() => {
    if (isTopMode.value) return `calc(100vh - ${isHeaderHeight.value}px - ${isFooterHeight.value}px)`
    if (isTopSiderMode.value) return `calc(100vh - ${isHeaderHeight.value}px - ${isFooterHeight.value}px)`
    if (isSiderTopMode.value) return `calc(100vh - ${isHeaderHeight.value}px - ${isFooterHeight.value}px)`
    return 0
  })
</script>

<style scoped>
  .n-layout-header {
    height: v-bind(isHeaderHeight + 'px');
  }

  .n-layout-footer {
    height: v-bind(isFooterHeight + 'px');
  }

  .n-layout-sider {
    transition: all 0.2s linear;
    height: v-bind(isSiderHeight);
  }

  .n-layout-content {
    height: v-bind(isContentHeight);
  }
</style>
