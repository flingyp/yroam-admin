<template>
  <n-menu :inverted="isInverted" :value="routeKey" :mode="mode" :options="menuOptions" @update:value="clickMenu" />
</template>

<script setup lang="ts">
  import { useSystemRouterMenuStore } from '@store/index'
  import type { MenuOption } from 'naive-ui'
  import { NMenu } from 'naive-ui'
  import { computed, ref, watchEffect } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  interface GlobalMenuProps {
    mode?: 'vertical' | 'horizontal'
    menuOptions: MenuOption[]
  }

  withDefaults(defineProps<GlobalMenuProps>(), {
    mode: 'vertical',
    menuOptions: () => []
  })

  const route = useRoute()
  const router = useRouter()
  const SystemRouterMenuStore = useSystemRouterMenuStore()

  // 监听路由的变化，更改菜单当前选中值
  const routeKey = ref(route.name as string)
  watchEffect(() => {
    //  当发现路由跳转了，及时修改页面标题的Title
    // TODO: YRoam Admin 不嫩写死
    const pageTitle = `${route.meta.label} | YRoam Admin` || 'YRoam Admin'
    document.querySelector('title')!.innerHTML = `${pageTitle}`

    // 切换当前菜单选择项
    routeKey.value = route.name as string
    // TODO: 生成面包屑导航菜单
    console.log(SystemRouterMenuStore.generateBreadCrumbMenus(routeKey.value))
  })

  // 点击菜单
  const clickMenu = (key: string, menu: MenuOption) => {
    router.push({ name: key })
  }

  const isInverted = computed(() => {
    return false
  })
</script>
