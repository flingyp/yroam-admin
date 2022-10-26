<template>
  <div class="top-sider-header-container">
    <div class="top-sider-header-left">
      <GlobalLogoTitle style="margin-right: 70px"></GlobalLogoTitle>
      <GlobalBreadCrumb></GlobalBreadCrumb>
    </div>
    <div class="top-sider-header-right">
      <GlobalSiderCollapse></GlobalSiderCollapse>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalUserCenter></GlobalUserCenter>
    </div>
  </div>
</template>

<script setup lang="ts">
  import GlobalBreadCrumb from '@layout/LayoutComponent/GlobalBreadCrumb.vue'
  import GlobalLogoTitle from '@layout/LayoutComponent/GlobalLogoTitle.vue'
  import GlobalSettingIcon from '@layout/LayoutComponent/GlobalSettingIcon.vue'
  import GlobalSiderCollapse from '@layout/LayoutComponent/GlobalSiderCollapse.vue'
  import GlobalUserCenter from '@layout/LayoutComponent/GlobalUserCenter.vue'
</script>

<style scoped lang="scss">
  .top-sider-header-container {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
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

    & > *:not(:last-child) {
      cursor: pointer;
      margin-right: 20px;
    }
  }
</style>
