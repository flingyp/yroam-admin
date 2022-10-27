<template>
  <div class="global-tab-container">
    <div class="global-tab-left-container">
      <GlobalTabItem
        v-for="item in SystemRouterMenuStore.SystemTabMenus"
        :key="item.key"
        :menu="item"
        @click="clickTabMenu(item.key as string)"
      ></GlobalTabItem>
    </div>
    <div class="global-tab-right-container">
      <NDropdown trigger="hover" :options="TabMenuSettingOptions" @select="selectTabSetting">
        <ViconsIcon icon="MenuOutline" :size="20" style="cursor: pointer; padding: 4px"></ViconsIcon>
      </NDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useSystemRouterMenuStore } from '@store/index'
  import type { DropdownOption } from 'naive-ui'
  import { NDropdown } from 'naive-ui'
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import GlobalTabItem from './GlobalTabItem.vue'

  const router = useRouter()
  const SystemRouterMenuStore = useSystemRouterMenuStore()

  const TabMenuSettingOptions: DropdownOption[] = reactive([
    {
      label: '重新加载页面',
      key: 'reload'
    },
    {
      label: '关闭当前页面',
      key: 'closeCurrentTab'
      // disabled: isDisabled
    },
    {
      label: '关闭其他标签',
      key: 'closeOtherTabMenu'
      // disabled: isDisabled
    }
  ])

  const clickTabMenu = (Key: string) => {
    router.push({ name: Key })
  }

  const selectTabSetting = (key: string) => {
    console.log('key->', key)
  }
</script>

<style scoped lang="scss">
  .global-tab-container {
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    padding: 0 8px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color);
  }

  .global-tab-left-container {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 12px;
    }
  }

  .global-tab-right-container {
  }
</style>
