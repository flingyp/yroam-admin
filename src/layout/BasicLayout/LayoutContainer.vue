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
      <RouterView></RouterView>
    </template>

    <template #footer>
      <Component :is="GlobalFooter"></Component>
    </template>
  </BasicLayout>
</template>

<script setup lang="ts">
  import CommonFooter from '@layout/DifLayoutMode/CommonFooter.vue'
  import TopSiderHeader from '@layout/DifLayoutMode/TopSiderMode/TopSiderHeader.vue'
  import TopSiderSider from '@layout/DifLayoutMode/TopSiderMode/TopSiderSider.vue'
  import { useSystemConfigStore } from '@store/index'
  import { computed } from 'vue'
  import BasicLayout from './BasicLayout.vue'

  const SystemConfigStore = useSystemConfigStore()

  const GlobalHeader = computed(() => {
    if (SystemConfigStore.LayoutMode === 'TOP_SIDER_MODE') return TopSiderHeader
    return null
  })

  const GlobalSider = computed(() => {
    if (SystemConfigStore.LayoutMode === 'TOP_SIDER_MODE') return TopSiderSider
    return null
  })

  const GlobalFooter = computed(() => CommonFooter)
</script>
