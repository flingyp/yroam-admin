<template>
  <NMenu :inverted="MenuInverted" :value="routeKey" :mode="mode" :options="menuOptions" @update:value="clickMenu" />
</template>

<script setup lang="ts">
  import { useSystemConfigStore, useSystemRouterMenuStore } from '@store/index'
  import type { MenuOption } from 'naive-ui'
  import { NMenu } from 'naive-ui'
  import { computed, ref, watchEffect } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  interface GlobalMenuProps {
    mode?: 'vertical' | 'horizontal'
    menuOptions: MenuOption[]
  }

  const props = withDefaults(defineProps<GlobalMenuProps>(), {
    mode: 'vertical',
    menuOptions: () => []
  })

  const route = useRoute()
  const router = useRouter()
  const SystemConfigStore = useSystemConfigStore()
  const SystemRouterMenuStore = useSystemRouterMenuStore()

  // 监听路由的变化，更改菜单当前选中值
  const routeKey = ref(route.name as string)
  watchEffect(() => {
    //  当发现路由跳转了，及时修改页面标题的Title
    const pageTitle = `${route.meta.label} | ${SystemConfigStore.SystemName}` || SystemConfigStore.SystemName
    document.querySelector('title')!.innerHTML = `${pageTitle}`

    // 切换当前菜单选择项
    routeKey.value = route.name as string
    SystemRouterMenuStore.generateBreadCrumbMenus(routeKey.value)
  })

  // 点击菜单
  const clickMenu = (key: string, menu: MenuOption) => {
    if (menu.link === 'EXTERNAL_LINK' && menu.url) {
      window.open(menu.url as string)
    } else {
      router.push({ name: key })
      SystemRouterMenuStore.addTabMenuKey(key)
    }
  }

  const MenuInverted = computed(() => {
    if (props.mode === 'horizontal') return SystemConfigStore.SystemViewConfig.HeaderInverted
    return SystemConfigStore.SystemViewConfig.SiderInverted
  })
</script>
