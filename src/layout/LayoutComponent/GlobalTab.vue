<template>
  <div class="global-tab-container" :class="[isFixed ? 'is-fixed' : '']">
    <div class="global-tab-left-container">
      <GlobalTabItem v-for="item in SystemRouterMenuStore.SystemTabMenus" :key="item.key" :menu="item"
        @click.stop="clickTabMenu(item.key as string)"></GlobalTabItem>
    </div>
    <div class="global-tab-right-container">
      <NDropdown trigger="hover" :options="TabMenuSettingOptions" @select="selectTabSetting">
        <ViconsIcon icon="MenuOutline" source="ionicons5" :size="20" style="cursor: pointer; padding: 4px" />
      </NDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemRouterMenuStore, useSystemConfigStore } from '@store/index';
import type { DropdownOption } from 'naive-ui';
import { NDropdown } from 'naive-ui';
import { computed, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GlobalTabItem from './GlobalTabItem.vue';

import { TabMenuKey } from '@/CONSTANT';
import { setLocalKey } from '@/utils';

const route = useRoute();
const router = useRouter();
const SystemConfigStore = useSystemConfigStore();
const SystemRouterMenuStore = useSystemRouterMenuStore();

const isDisabled = computed(() => {
    if (SystemRouterMenuStore.TabMenusKey.length <= 1) return true;
    return false;
});

const isFixed = computed(() => SystemConfigStore.TabIsFixed);
const TabHeight = computed(() => SystemConfigStore.TabHeight);

const TabMenuSettingOptions: DropdownOption[] = reactive([
    {
        label: '重新加载页面',
        key: 'reload',
    },
    {
        label: '关闭当前页面',
        key: 'closeCurrentTab',
        disabled: isDisabled,
    },
    {
        label: '关闭其他标签',
        key: 'closeOtherTabMenu',
        disabled: isDisabled,
    },
]);

const clickTabMenu = (Key: string) => router.push({ name: Key });

const selectTabSetting = (key: string) => {
    if (key === 'reload') {
        SystemRouterMenuStore.IsReloadPage = true;
        setTimeout(() => {
            SystemRouterMenuStore.IsReloadPage = false;
        }, 2000);
    } else if (key === 'closeCurrentTab') {
        // 判断删除的是不是当前所在路由，如果是则需要去另外跳转其它的页面
        const TabMenuIndex = SystemRouterMenuStore.SystemTabMenus.findIndex(
            (item) => item.key === route.name,
        );
        // 需要跳转的路由名称
        const NavRouteName = SystemRouterMenuStore.SystemTabMenus[
            TabMenuIndex === 0 ? 1 : TabMenuIndex - 1];
        router.push({ name: NavRouteName.key as string });
        SystemRouterMenuStore.deleteTabMenuKey(route.name as string);
    } else if (key === 'closeOtherTabMenu') {
        // 关闭其他的标签页
        SystemRouterMenuStore.TabMenusKey = [route.name as string];
        setLocalKey(TabMenuKey, route.name);
    }
};

onMounted(() => {
    SystemRouterMenuStore.addTabMenuKey(route.name as string);
});
</script>

<style scoped>
.global-tab-container {
  box-sizing: border-box;
  width: 100%;
  height: v-bind(TabHeight + 'px');
  padding: 0 8px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);
}

.global-tab-container.is-fixed {
  position: sticky;
  top: 0px;
  z-index: 999;
}

.global-tab-left-container {
  display: flex;
  align-items: center;
}

.global-tab-left-container>*:not(:last-child) {
  margin-right: 12px;
}
</style>
