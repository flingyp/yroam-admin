<template>
  <n-menu :inverted="isInverted" :value="routeKey" :mode="mode" :options="menuOptions" @update:value="clickMenu" />
</template>

<script setup lang="ts">
  import type { MenuOption } from 'naive-ui'
  import { NMenu } from 'naive-ui'
  import { computed, ref, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'

  interface GlobalMenuProps {
    mode: 'vertical' | 'horizontal'
    menuOptions: MenuOption[]
  }

  withDefaults(defineProps<GlobalMenuProps>(), {
    mode: 'vertical',
    menuOptions: () => []
  })

  const route = useRoute()

  // 监听路由的变化，更改菜单当前选中值
  const routeKey = ref(route.name as string)
  watchEffect(() => {
    //  当发现路由跳转了，及时修改页面标题的Title
    console.log('路由变化了')
    // const pageTitle = `${route.meta.title} | Vue Admin Pro` || 'Vue Admin Pro'
    // document.getElementsByTagName('title')[0].innerHTML = `${pageTitle}`

    // routeKey.value = route.name as string
  })

  // 菜单数据
  // @ts-ignore
  // const menuOptions: MenuOption[] = []

  // 点击菜单
  const clickMenu = (key: string, menu: MenuOption) => {
    console.log('点击菜单')
  }

  const isInverted = computed(() => {
    return false
  })
</script>
