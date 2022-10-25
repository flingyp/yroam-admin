<template>
  <div class="sider-top-header-container">
    <div class="sider-top-header-left">
      <GlobalLogoTitle></GlobalLogoTitle>
    </div>
    <div class="sider-top-header-right">
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalUserCenter></GlobalUserCenter>
    </div>
  </div>
</template>

<script setup lang="ts">
  import GlobalLogoTitle from '@layout/LayoutComponent/GlobalLogoTitle.vue'
  import GlobalSettingIcon from '@layout/LayoutComponent/GlobalSettingIcon.vue'
  import GlobalUserCenter from '@layout/LayoutComponent/GlobalUserCenter.vue'
</script>

<style scoped lang="scss">
  .sider-top-header-container {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .sider-top-header-left {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .sider-top-header-right {
    height: 100%;
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }
</style>
