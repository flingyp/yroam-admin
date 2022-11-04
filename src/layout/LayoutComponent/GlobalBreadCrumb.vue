<template>
  <NBreadcrumb>
    <NBreadcrumbItem v-for="item in SystemRouterMenuStore.BreadCrumbMenus" :key="item.key">
      <NDropdown :options="item.children" @select="clickBreadCrumbItem">
        <span>{{ item.label }}</span>
      </NDropdown>
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>

<script setup lang="ts">
import { useSystemRouterMenuStore } from '@store/index';
import { NBreadcrumb, NBreadcrumbItem, NDropdown } from 'naive-ui';
import { useRouter } from 'vue-router';

const SystemRouterMenuStore = useSystemRouterMenuStore();

const router = useRouter();

// 点击面包屑菜单
const clickBreadCrumbItem = (RouteKey: string) => {
  router.push({ name: RouteKey });
  SystemRouterMenuStore.addTabMenuKey(RouteKey);
};
</script>
