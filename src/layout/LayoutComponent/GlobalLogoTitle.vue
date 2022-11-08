<template>
  <div class="global-logo-title-container">
    <img src="@assets/Img/YRoamLogo.png" alt="YRoam Logo" />
    <h1 v-show="isCollapse">YRoam Admin</h1>
  </div>
</template>

<script setup lang="ts">
import { useSystemConfigStore } from '@store/index';
import { computed } from 'vue';

const SystemConfigStore = useSystemConfigStore();

const isCollapse = computed(() => {
  if (SystemConfigStore.LayoutMode === 'SIDER_TOP_MODE' && SystemConfigStore.SiderCollapse) return false;
  return true;
});
</script>

<style scoped lang="scss">
.global-logo-title-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &>img {
    width: 30px;
    height: 30px;
    margin-right: 6px;
    vertical-align: bottom;
  }

  &>h1 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 24px;
  }
}
</style>
