<template>
  <BasicLayout>
    <template #header>
      <!-- 菜单模式-头部 -->
      <Component :is="GlobalHeader"></Component>
    </template>

    <template #sider>
      <!-- 菜单模式-侧边（左侧菜单模式、顶部混合菜单模式） -->
      <Component :is="GlobalSider"></Component>
    </template>

    <template #content>
      <GlobalTab></GlobalTab>
      <main class="layout-container-main">
        <RouterView></RouterView>
      </main>
    </template>

    <template #footer>
      <Component :is="GlobalFooter"></Component>
    </template>
  </BasicLayout>

  <GlobalSetting></GlobalSetting>
</template>

<script setup lang="ts">
  import CommonFooter from '@layout/DifLayoutMode/CommonFooter.vue'
  import TopSiderHeader from '@layout/DifLayoutMode/TopSiderMode/TopSiderHeader.vue'
  import TopSiderSider from '@layout/DifLayoutMode/TopSiderMode/TopSiderSider.vue'
  import GlobalSetting from '@layout/LayoutComponent/GlobalSetting.vue'
  import GlobalTab from '@layout/LayoutComponent/GlobalTab.vue'

  import SiderTopHeader from '@layout/DifLayoutMode/SiderTopMode/SiderTopHeader.vue'
  import SiderTopSider from '@layout/DifLayoutMode/SiderTopMode/SiderTopSider.vue'

  import TopHeader from '@layout/DifLayoutMode/TopMode/TopHeader.vue'

  import { useSystemConfigStore } from '@store/index'
  import { computed } from 'vue'
  import BasicLayout from './BasicLayout.vue'

  const SystemConfigStore = useSystemConfigStore()

  const GlobalHeader = computed(() => {
    if (SystemConfigStore.LayoutMode === 'TOP_SIDER_MODE') return TopSiderHeader
    if (SystemConfigStore.LayoutMode === 'SIDER_TOP_MODE') return SiderTopHeader
    if (SystemConfigStore.LayoutMode === 'TOP_MODE') return TopHeader
    return null
  })

  const GlobalSider = computed(() => {
    if (SystemConfigStore.LayoutMode === 'TOP_SIDER_MODE') return TopSiderSider
    if (SystemConfigStore.LayoutMode === 'SIDER_TOP_MODE') return SiderTopSider
    return null
  })

  const GlobalFooter = computed(() => CommonFooter)
</script>

<style scoped lang="scss">
  .layout-container-main {
    padding: 10px;
  }
</style>
