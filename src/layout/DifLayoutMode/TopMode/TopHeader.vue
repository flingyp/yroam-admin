<template>
  <div class="top-header-container">
    <div class="top-header-left">
      <GlobalLogoTitle></GlobalLogoTitle>
    </div>
    <div class="top-header-center">
      <GlobalMenu mode="horizontal" :menuOptions="SystemRouterMenuStore.SystemMenus"></GlobalMenu>
    </div>
    <div class="top-header-right">
      <GlobalFullyScreen></GlobalFullyScreen>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalUserCenter></GlobalUserCenter>
    </div>
  </div>
</template>

<script setup lang="ts">
  import GlobalFullyScreen from '@layout/LayoutComponent/GlobalFullyScreen.vue'
  import GlobalLogoTitle from '@layout/LayoutComponent/GlobalLogoTitle.vue'
  import GlobalMenu from '@layout/LayoutComponent/GlobalMenu.vue'
  import GlobalSettingIcon from '@layout/LayoutComponent/GlobalSettingIcon.vue'
  import GlobalUserCenter from '@layout/LayoutComponent/GlobalUserCenter.vue'

  import { useSystemRouterMenuStore } from '@store/index'

  const SystemRouterMenuStore = useSystemRouterMenuStore()
</script>

<style scoped lang="scss">
  .top-header-container {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .top-header-left {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .top-header-center {
  }

  .top-header-right {
    height: 100%;
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }
</style>
