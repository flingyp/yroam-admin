<template>
  <div class="global-tab-item-container" :style="ActiveKey ? ActiveTabStyle : {}">
    <span>{{ menu.label }}</span>
    <ViconsIcon v-show="SystemRouterMenuStore.TabMenusKey.length > 1" class="item-icon" icon="CloseOutlined"
      source="material" :size="14" @click.stop="deleteTabItem(menu.key as string)"></ViconsIcon>
  </div>
</template>

<script setup lang="ts">
import { useSystemRouterMenuStore } from '@store/index';
import { MenuOption } from 'naive-ui';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface GlobalTabItem {
  menu: MenuOption
}

const props = defineProps<GlobalTabItem>();

const route = useRoute();
const router = useRouter();
const SystemRouterMenuStore = useSystemRouterMenuStore();

const ActiveKey = computed(() => {
  if (props.menu.key === route.name) return true;
  return false;
});
const ActiveTabStyle = {
  border: '1px solid var(--primaryColor)',
  background: 'var(--primaryColor)',
  color: '#FFFFFF',
};
const deleteTabItem = (Key: string) => {
  // 判断下SystemTabMenus是不是就一个
  if (SystemRouterMenuStore.TabMenusKey.length === 1) return;
  // 判断删除的是不是当前所在路由，如果是则需要去另外跳转其它的页面
  if (route.name === Key) {
    const TabMenuIndex = SystemRouterMenuStore.SystemTabMenus.findIndex((item) => item.key === Key);
    // 需要跳转的路由名称
    const NavRouteName = SystemRouterMenuStore.SystemTabMenus[
      TabMenuIndex === 0 ? 1 : TabMenuIndex - 1];
    router.push({ name: NavRouteName.key as string });
  }
  SystemRouterMenuStore.deleteTabMenuKey(Key);
};
</script>

<style scoped lang="scss">
.global-tab-item-container {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 4px 4px;
  border-radius: 4px;
  cursor: pointer;

  &>span {
    margin: 2px;
  }

  &>.item-icon {
    width: 0;
    transition: width 0.25s linear;
  }

  &:hover>.item-icon {
    width: 14px;
  }
}
</style>
