<template>
  <div class="global-logo-title-container">
    <img src="@assets/Img/YRoamLogo.png" alt="YRoam Logo" />
    <a v-show="isCollapse" @click="router.push({ name: SystemHomeKey })">{{ SystemConfigStore.SystemName }}</a>
  </div>
</template>

<script setup lang="ts">
  import { useSystemConfigStore } from '@store/index'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { SystemHomeKey } from '@/CONSTANT'

  const router = useRouter()

  const SystemConfigStore = useSystemConfigStore()

  const isCollapse = computed(() => {
    if (SystemConfigStore.LayoutMode === 'SIDER_TOP_MODE' && SystemConfigStore.SiderCollapse) return false
    return true
  })
</script>

<style scoped lang="scss">
  .global-logo-title-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 25px;
    }

    & > a {
      margin-left: 4px;
      margin-top: 6px;
      font-size: 22px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      cursor: pointer;
    }
  }
</style>
