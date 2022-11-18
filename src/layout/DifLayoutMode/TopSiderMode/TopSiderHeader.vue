<template>
  <div class="top-sider-header-container">
    <div class="top-sider-header-left">
      <GlobalLogoTitle :style="{ width: SystemConfigStore.SystemViewConfig.SiderWidth + 'px' }"> </GlobalLogoTitle>
      <GlobalBreadCrumb></GlobalBreadCrumb>
    </div>
    <div class="top-sider-header-right">
      <GlobalFullyScreen></GlobalFullyScreen>
      <GlobalSiderCollapse></GlobalSiderCollapse>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalUserCenter></GlobalUserCenter>
    </div>
  </div>
</template>

<script setup lang="ts">
  import GlobalBreadCrumb from '@layout/LayoutComponent/GlobalBreadCrumb.vue'
  import GlobalFullyScreen from '@layout/LayoutComponent/GlobalFullyScreen.vue'
  import GlobalLogoTitle from '@layout/LayoutComponent/GlobalLogoTitle.vue'
  import GlobalSettingIcon from '@layout/LayoutComponent/GlobalSettingIcon.vue'
  import GlobalSiderCollapse from '@layout/LayoutComponent/GlobalSiderCollapse.vue'
  import GlobalUserCenter from '@layout/LayoutComponent/GlobalUserCenter.vue'

  import { useSystemConfigStore } from '@store/index'

  const SystemConfigStore = useSystemConfigStore()
</script>

<style scoped lang="scss">
  .top-sider-header-container {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .top-sider-header-left {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .top-sider-header-right {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 15px;

    & > *:not(:last-child) {
      cursor: pointer;
      margin-right: 20px;
    }
  }
</style>
